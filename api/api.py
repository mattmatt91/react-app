import time
from flask import Flask, jsonify
import random

app = Flask(__name__)

@app.route('/features/')
def get_features():
    data = {'test1': time.time(), 'test2': 2342, 'test3': 'test'}
    print('get freatures', data)

    return data

@app.route('/feature/<feature>/<value>', methods=['POST', 'GET'])
def set_value(feature, value):
    print(value, feature, 'test setter')
    val = random.randint(0,10)
    return {"data":val}

@app.route('/time')
def get_current_time():
    print('time')
    return {'time': time.time()}

if __name__ == '__main__':
    app.run(debug=False,host= '127.0.0.1', port=5000)