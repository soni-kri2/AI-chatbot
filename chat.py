from response import responses
from datetime import datetime


def get_response(message):

    message = message.lower().strip()

    # Time
    if message == "time":
        return datetime.now().strftime("%H:%M:%S")

    # Date
    if message == "date":
        return datetime.now().strftime("%d-%m-%Y")

    # Predefined Responses
    for key in responses:

        if key in message:

            return responses[key]

    return "Sorry, I don't understand."