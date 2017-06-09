'''
Created on Jan 28, 2013

@author: Majid
'''
import pymongo

from pymongo import Connection
connection = Connection('localhost', 27017)

db = connection.test

names = db.names

item = db.names.find_one()

print item['name']