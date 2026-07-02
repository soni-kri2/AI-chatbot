from datetime import datetime

responses = {
    "hello": "Hello!",
    "hi": "Hi!",
    "how are you": "I am fine.",
    "your name": "I am AI Chatbot.",
    "bye": "Goodbye!",
    "who made you": "I was created using Python Flask.",
    "python": "Python is a programming language.",
    "course": "I can help in coding.",
    "thanks": "You are welcome."
}


def get_response(message):
    message = message.lower()
    if "time" in message:
        return datetime.now().strftime("%H:%M:%S")
    return responses.get(message, "I don't understand that.")