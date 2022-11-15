import time
from flask import Flask, jsonify, request
import random

app = Flask(__name__)


@app.route('/features')
def get_features():
    data = {
        'brigthness': {'val':1, 'options':[0,100]},
        'freqarea': {'val':12, 'options':[10,50]},
        'smooth': {'val':12, 'options':[10,50]},
        'falldown': {'val':12, 'options':[10,50]},
        'fadespeed': {'val':12, 'options':[10,50]},
        'rainbow': {'val':12, 'options':[10,50]},
        'yrainbow': {'val':12, 'options':[10,50]},
        'sym': {'val':12, 'options':[10,50]},
        'maxdot': {'val':12, 'options':[10,50]},
        'blackspec':  {'val':True, 'options':[True, False]},
        'center': {'val':12, 'options':[10,50]},
        'animation':  {'val':'prog1', 'options':['prog1', 'prog2', 'prog3']},
        'render_spec':  {'val':True, 'options':[True, False]},
        'render_animation': {'val':True, 'options':[True, False]}

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
