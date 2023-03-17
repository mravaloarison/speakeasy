import openai 
from os import environ as env
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)

# Allow cross-origin requests from http://localhost:3000
# CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

# Set the OpenAI API key
openai.api_key = env.get("API_KEY")


@app.after_request
def add_cors_headers(response):
    response.headers['Access-Control-Allow-Origin'] = 'https://speakeasy-01.netlify.app/'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
    response.headers['Access-Control-Allow-Methods'] = 'POST'
    return response


# Route for the home page
@app.route("/")
def home():
    return {
        "status": "success",
        "message": "Welcome to the Email Generation API"
    }

# Route for generating an email
@app.route("/generate-email", methods=["POST"])
def generate_email():
    # Get the email prompt from the request data
    try:
        email_prompt = request.form.get("email_prompt")
    except:
        return jsonify({
            "status": "error",
            "message": "Invalid request data"
        })
    
    # Use OpenAI's GPT-3 API to generate the email content
    response = openai.Completion.create(
        model="text-davinci-003",
        prompt="Write an email saying: " + email_prompt,
        max_tokens=2048,
        temperature=0
    )
    email_content = response["choices"][0]["text"]
    
    # Return the generated email content as a JSON response
    return jsonify({
        "status": "success",
        "data": {
            "email_content": email_content
        }
    })


@app.route("/translate", methods=["POST"])
def translate():
    try:
        speech = request.form.get("speech")
        language = request.form.get("language")

    except:
        return jsonify({
            "status": "error",
            "message": "Invalid request data"
        })
    
    response = openai.Completion.create(
        model="text-davinci-003",
        prompt="Say " + speech + " properly in " + language,
        max_tokens=2048,
        temperature=0
    )
    translation = response["choices"][0]["text"]

    return jsonify({
        "status": "success",
        "data": {
            "translation": translation
        }
    })


@app.route("/reword", methods=['POST'])
def reword():
    try:
        original_text = request.form.get("original_text")
    except:
        return jsonify({
            "status": "error",
            "message": "Invalid request data"
        })
    
    response = openai.Completion.create(
        model="text-davinci-003",
        prompt="Correct grammar, and reword perfectly this text: " + original_text,
        max_tokens=2048,
        temperature=0
    )
    reworded = response["choices"][0]["text"]

    return jsonify({
        "status": "success",
        "data": {
            "reworded": reworded
        }
    })