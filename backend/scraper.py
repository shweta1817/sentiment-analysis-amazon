import requests
from bs4 import BeautifulSoup
from textblob import TextBlob


def extract_product_details(soup):
    product_name = soup.find("span", {"id": "productTitle"})
    product_name = product_name.get_text(strip=True) if product_name else "No product name available"

    price = soup.find("span", {"class": "a-price-whole"})
    price = price.get_text(strip=True) if price else "Not Available"

    img = soup.find("img", {"id": "landingImage"})
    img_url = img['src'] if img else "No image found"

    description = soup.find("div", {"id": "feature-bullets"})
    description = description.get_text(strip=True) if description else "No description available"

    rating = soup.find("span", {"class": "a-icon-alt"})
    rating = rating.get_text(strip=True) if rating else "0 out of 5 stars"

    return {
        "Product Name": product_name,
        "Price": price,
        "Image URL": img_url,
        "Description": description,
        "Overall Rating": rating,
    }


def extract_reviews(soup):
    reviews = []
    review_elements = soup.find_all("li", {"data-hook": "review"})
    for review in review_elements:
        review_text = review.find("span", {"data-hook": "review-body"})
        if review_text:
            reviews.append(review_text.get_text(strip=True))
    return reviews


def get_product_sentiment(url):
    print("🌐 Sending request to:", url)

    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
    }

    response = requests.get(url, headers=headers)
    print("Status Code:", response.status_code)

    if response.status_code != 200:
        print("❌ Failed to fetch the page.")
        return None

    if "captcha" in response.text.lower():
        print("🛑 CAPTCHA detected")
        return {"error": "Amazon blocked the request with CAPTCHA"}

    soup = BeautifulSoup(response.content, "html.parser")

    try:
        product_details = extract_product_details(soup)
        print("🛒 Product Details:", product_details)

        reviews = extract_reviews(soup)
        print("📝 Number of reviews found:", len(reviews))

        try:
            rating_text = product_details.get("Overall Rating", "0 out of 5 stars")
            overall_rating = float(rating_text.split()[0])
        except Exception as e:
            print("⚠️ Error parsing rating:", e)
            overall_rating = 0.0

        positive_reviews = []
        for review in reviews:
            try:
                if TextBlob(review).sentiment.polarity > 0:
                    positive_reviews.append(review)
            except Exception as e:
                print("⚠️ Sentiment error:", e)

        positive_percentage = (len(positive_reviews) / len(reviews)) * 100 if reviews else 0

        if positive_percentage > 70:
            recommendation = "Highly recommended product for purchase."
        elif positive_percentage >= 50:
            recommendation = "The product is decent. Consider purchasing."
        else:
            recommendation = "The product is not recommended based on reviews."

        result = {
            "Product Name": product_details["Product Name"],
            "Price": product_details["Price"],
            "Image URL": product_details["Image URL"],
            "Description": product_details["Description"],
            "Overall Rating": overall_rating,
            "Positive Review Percentage": f"{positive_percentage:.2f}%",
            "Recommendation": recommendation,
        }

        return result

    except Exception as e:
        print("🔥 Parsing failed:", e)
        return None