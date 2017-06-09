'''
Created on Jan 28, 2013

@author: Majid
'''
import bottle
import pymongo

@bottle.route('/')
def index():
    from pymongo import Connection
    connection = Connection('localhost', 27017)
    
    db = connection.test
    
    names = db.names
    
    item = db.names.find_one()
    
    return '<b>Hello %s!</b>' % item['name']

bottle.run(host='localhost', port=8082)