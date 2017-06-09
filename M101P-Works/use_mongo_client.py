'''
Created on Mar 1, 2013

@author: majid
'''
import pymongo

c = pymongo.MongoClient(host="mongodb://localhost:27017", w=1, j=True)

db = c.m101
people = db.people

print "inserting"
people.insert({'name':'Andrew Erlichson', 'favorite_color':'blue'})

print "inserting"
people.insert({'name':'Richard Kreuter', 'favorite_color':'red'})

print "inserting"
people.insert({'name':'Dwight Merriman', 'favorite_color':'green'})
