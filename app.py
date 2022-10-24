from flask import Flask , render_template , request , jsonify
from image_ai import *

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/images-collector1" , methods = ["POST"])
def class1_captured_images():
    Collect_Button_pressed1 = request.json.get("buttonPressed1")

    if Collect_Button_pressed1 != "true":
        return jsonify({
            "status":"error",
            "message":"upload some images yo"
        })
    else:
        captured1 = collector1(Collect_Button_pressed1)
        return jsonify({
            "status" : "success",
            "data" : captured1
        })

@app.route("/images-collector2" , methods = ["POST"])
def class2_captured_images():
    Collect_Button_pressed2 = request.json.get("buttonPressed2")

    if Collect_Button_pressed2 != "true":
        return jsonify({
            "status":"error",
            "message":"upload some images yo"
        })
    else:
        captured2 = collector1(Collect_Button_pressed2)
        return jsonify({
            "status" : "success",
            "data" : captured2
        })
