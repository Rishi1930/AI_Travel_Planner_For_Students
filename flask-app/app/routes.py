from flask import Blueprint, jsonify, render_template, request
import os
import requests

main = Blueprint('main', __name__)

GOOGLE_API_KEY = os.getenv('GOOGLE_API_KEY')

@main.route('/')
def home():
    return render_template('index.html')

@main.route('/api/generate', methods=['POST'])
def generate_plan():
    try:
        data = request.get_json()
        prompt = data.get('prompt')

        if not prompt:
            return jsonify(error="Missing prompt"), 400

        response = requests.post(
            f'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={GOOGLE_API_KEY}',
            headers={'Content-Type': 'application/json'},
            json={
                'contents': [{'role': 'user', 'parts': [{'text': prompt}]}],
            }
        )

        api_data = response.json()
        
        if 'error' in api_data:
            return jsonify(error=api_data['error'].get('message', 'API Error')), 400

        text = api_data.get('candidates', [{}])[0].get('content', {}).get('parts', [{}])[0].get('text', 'No response from AI.')
        return jsonify(text=text)
    except Exception as error:
        print(f"Server error: {error}")
        return jsonify(error="SERVER:ERROR"), 500

@main.route('/api/data')
def get_data():
    return jsonify({
        "key1": "value1",
        "key2": "value2"
    })