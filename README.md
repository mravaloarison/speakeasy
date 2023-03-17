# Speak Easy
👋 Say goodbye to language barriers and experience a world
🌎 where language is no longer a barrier to understanding.

## Getting started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
* Node.js (v14.x.x or later)
* Python (v3.x.x or later)
* OpenAI API key

### Usage
The application consists of three main features:

* **Email Generation**: Enter a prompt for an email and the application will generate a complete email for you.

* **Phrase Rewording**: Enter a phrase and the application will offer different ways to reword it.

* **Language Translation**: Enter text in one language and the application will translate it into another language.

### Built with
* [React](https://react.dev/) - JavaScript library for building user interfaces
* [Material-UI](https://mui.com/) - React UI framework
* [Flask](https://flask.palletsprojects.com/en/2.2.x/) - Python web framework
* [OpenAI](https://openai.com/blog/introducing-chatgpt-and-whisper-apis) - GPT-3 API

### Installing
1. Clone the repository:

```bash
git clone https://github.com/mravaloarison/speakeasy.git
cd speakeasy
```

2. Install the required `Node.js` packages:

```
npm install
```

3. Install the required `Python` packages:

```python
pip install -r requirements.txt
```

4. Create a `.env ` file in the root directory of the project and add your OpenAI API key:

```makefile
API_KEY=<your_api_key_here>
```
### Running
To start the application, run the following command:

```sql
npm start
```

This will start the React front-end and Flask back-end servers concurrently. You can access the application by navigating to `http://localhost:3000` in your web browser.

## Authors
Mami Ravaloarison: [mravaloarison](https://github.com/mravaloarison)

## License
This project is licensed under the MIT License - see the [LICENSE.md]() file for details