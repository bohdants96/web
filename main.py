from flask import Flask
from rout import user_blueprint, room_blueprint
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

app.register_blueprint(user_blueprint)
app.register_blueprint(room_blueprint)

STUDENT_ID = 16


@app.route(f'/hello-world')
def hello_world():
    return f"Hello world!", 200


@app.route(f'/hello-world-{STUDENT_ID}')
def hello_world_student():
    return f"Hello world, {STUDENT_ID}!", 200


if __name__ == "__main__":
    app.run(debug=True)