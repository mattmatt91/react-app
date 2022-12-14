from time import time
from flask import Flask, jsonify, request
from numpy.random import randint



app = Flask(__name__)


@app.route('/features')
def get_features():
    data = {
        # für int und float sind das die min und max werte
        'brigthness': {'val': 1, 'options': [0, 100]},
        'freqarea': {'val': 12, 'options': [10, 50]},
        'smooth': {'val': 12, 'options': [10, 50]},
        'falldown': {'val': 12, 'options': [10, 50]},
        'fadespeed': {'val': 12, 'options': [10, 50]},
        'rainbow': {'val': 12, 'options': [10, 50]},
        'yrainbow': {'val': 62, 'options': [10, 50]},
        'sym': {'val': 14, 'options': [10, 50]},
        'maxdot': {'val': 12, 'options': [10, 50]},
        'blackspec':  {'val': True, 'options': [True, False]},
        'center': {'val': 12, 'options': [10, 50]},
        'animation':  {'val': 'prog2', 'options': ['prog1', 'prog2', 'prog3']},
        'render_spec':  {'val': True, 'options': [True, False]},
        'render_animation': {'val': True, 'options': [True, False]}

    }
    print('get freatures', data)

    return data


@app.route('/update_feature', methods=['GET', 'POST'])
def set_value():
    data = request.json
    feature = data['featureName']
    val = data['value']
    print({feature: val})
    return {feature: val}


@app.route('/get_time', methods=['GET', 'POST'])
def get_time():
    data = {"time": time()}
    print(data)
    return data

@app.route('/get_data', methods=['GET', 'POST'])
def get_data():
    data  = randint(0, 10, 20)
    print(data)
    return {'new_data': data.tolist()}

@app.route('/menues_page', methods=['GET', 'POST'])
def get_setupmenu():
    # data = request.json
    path  = 'pics\\img2.jpg'
    data = {'page1':{'path_img': path, 'conrtols': ['next', 'back']}}
    print(data)
    return data

if __name__ == '__main__':
    app.run(debug=False, host='127.0.0.1', port=5000)
