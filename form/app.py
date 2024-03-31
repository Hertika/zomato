from flask import Flask, request, jsonify, send_from_directory
import subprocess
import os

app = Flask(__name__)

# Route for handling form submission
@app.route('/search', methods=['POST'])
def search():
    data = request.form
    state = data.get('state')
    city = data.get('city')
    locality = data.get('locality')
    
    # Execute Google Colab script and pass form data as arguments
    output = subprocess.check_output(['python', 'your_model.py', state, city, locality])
    
    # Process the output if necessary
    # For now, just returning it as JSON
    return jsonify({'result': output.decode('utf-8')})

# Route for the homepage
@app.route('/')
def index():
    return "Welcome to Restaurant Location Form!"

# Route for serving favicon
@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'), 'favicon.ico', mimetype='image/vnd.microsoft.icon')

if __name__ == '__main__':
    app.run(debug=True)
