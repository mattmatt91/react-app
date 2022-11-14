import time
from flask import Flask, jsonify, request
import random

app = Flask(__name__)


@app.route('/features')
def get_features():
    data = {
        'brigthness': 1,
        'freqarea': 12,
        'smooth': 13,
        'falldown': 14,
        'fadespeed': 15,
        'rainbow': 16,
        'yrainbow': 17,
        'sym': 18,
        'maxdot': 19,
        'blackspec': 10,
        'center': False,
        'animation': 12,
        'render_spec': 12,
        'render_animation': 11,
        'quit': 11
    }
    print('get freatures', data)

    return data


@app.route('/update_feature', methods=['POST'])
def set_value():
    print(request.json)
    #val = random.randint(0, 10)
    return {"data": ""}


if __name__ == '__main__':
    app.run(debug=False, host='127.0.0.1', port=5000)
