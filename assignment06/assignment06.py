from flask import Flask, request
from flask import render_template
# step2
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
# Step3
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.assignment06'

# step4
db = SQLAlchemy(app)


#####

# TODO add Product class (model and __init__)

class Products(db.Model):
	id = db.Column('id', db.Integer, primary_key=True)
	name = db.Column(db.String(30))
	price = db.Column(db.Float)

	def __init__(self, name, price):
		self.name = name
		self.price = price


#####


@app.route('/welcome/<name>')
def welcome(name):
	return render_template('welcome.html', name=name)


@app.route('/')
def index():
	return render_template('index.html')


@app.route('/newpdt')
def new_product():
	return render_template('add_product.html')


@app.route('/addpdt1', methods=['POST'])
def addstd1():
	product_info = request.form
	msg = 'Product received correctly!'

	return render_template("product.html", msg=msg, name=product_info['name'], price=product_info['price'])


@app.route('/addpdt2', methods=['POST'])
def addpdt2():
	product_info = request.form

	product = Products(product_info['name'], product_info['price'])
	db.session.add(product)
	db.session.commit()

	msg = 'Record successfully added'
	return render_template("product.html", msg=msg, name=product_info['name'], price=product_info['price'])


@app.route('/list')
def list():

	products = Products.query.all()

	return render_template('products.html', products=products)


if __name__ == '__main__':
	# step5
	db.create_all()
	app.run(debug=True)
