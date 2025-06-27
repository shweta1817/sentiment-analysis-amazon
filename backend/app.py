from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
from scraper import get_product_sentiment

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/')
def hello():
    return 'Welcome to the Product Sentiment API'

@app.route('/productURL', methods=['GET'])
def scrape_product():
    url = request.args.get('url')

    if not url:
        return jsonify({"error": "URL parameter is missing"}), 400

    print(f"Received URL: {url}")

    try:
        result = get_product_sentiment(url)

        if not result:
            print("Scraping returned None.")
            return jsonify({"error": "Failed to scrape the product data"}), 500

        print("Scraping succeeded.")
        return jsonify(result)

    except Exception as e:
        print(f"Error during scraping: {e}")
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    # Ensure the app is running in debug mode for development
    app.run(debug=True)
