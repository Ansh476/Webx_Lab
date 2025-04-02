from flask import Flask, request, url_for, redirect, render_template, session

app = Flask(__name__)
app.secret_key = 'supersecretkey123' 

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/profile/<username>')
def profile(username):
    name = session.get('name', 'Guest')
    age = session.get('age', 'Unknown')
    return render_template('profile.html', username=username, name=name, age=age)

@app.route('/submit', methods=['GET', 'POST'])
def submit():
    if request.method == 'POST':
        session['name'] = request.form.get('name', 'Unknown')
        session['age'] = request.form.get('age', 'Unknown')
        return redirect(url_for('profile', username=session['name']))
    
    return render_template('submit.html')

if __name__ == '__main__':
    app.run(debug=True) 