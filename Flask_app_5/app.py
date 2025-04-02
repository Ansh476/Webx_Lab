from flask import Flask, render_template
app = Flask(__name__) 
app.secret_key = 'supersecretkey123'
@app.route('/') 
def home(): 
    return render_template('index.html') 
@app.route('/user/<username>') 
def user(username): 
    return render_template('user.html', username=username) 
if __name__ == '__main__': 
    app.run(debug=True)
