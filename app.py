from datetime import datetime

import flask
import chat

app = flask.Flask(__name__)

@app.route("/")
def home():
    return flask.render_template("index.html")

@app.route("/chat", methods=["POST"])
def chatbot():
    message = flask.request.json["message"]

    reply = chat.get_response(message)

    return flask.jsonify({"response": reply})

if __name__ == "__main__":
    app.run(debug=True)