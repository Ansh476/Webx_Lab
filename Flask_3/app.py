from flask import Flask, render_template, request, redirect, url_for
app = Flask(__name__)
@app.route('/')
def homepage():
    name = request.args.get('name')  
    if name:
        message = f"Welcome, {name}!"
    else:
        message = "Welcome to the homepage!"
    return render_template('index.html', message=message)
@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        return redirect(url_for('thank_you', name=name, email=email))
    return render_template('contact.html')
@app.route('/thank_you')
def thank_you():
    name = request.args.get('name')
    email = request.args.get('email')
    return render_template('thank-you.html', name=name, email=email)
if __name__ == '__main__':
    app.run(debug=True)
