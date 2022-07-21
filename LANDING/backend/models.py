from .import db
from flask_login import UserMixin

class admin(db.Model,UserMixin):
    aid = db.Column(db.Integer,primary_key=True)
    email = db.Column(db.String(150),unique=True)
    password = db.Column(db.String(150))
    name = db.Column(db.String(150))

class order(db.Model,UserMixin):
    orderid = db.Column(db.Integer,primary_key=True)
    name= db.Column(db.String(150))
    flavour= db.Column(db.String(150))
    quantity = db.Column(db.Integer)
    price = db.Column(db.Float)






class customer(db.Model,UserMixin):
    cid = db.Column(db.Integer,primary_key=True)
    email = db.Column(db.String(150),unique=True)
    password = db.Column(db.String(150))
    name = db.Column(db.String(150))

 class cake(db.Model,UserMixin):
    cakeid = db.Column(db.Integer,primary_key=True)
    orderid = db.Column(db.Integer)
    name= db.Column(db.String(150))
    flavour= db.Column(db.String(150))
    quantity = db.Column(db.Integer)
    price = db.Column(db.Float)