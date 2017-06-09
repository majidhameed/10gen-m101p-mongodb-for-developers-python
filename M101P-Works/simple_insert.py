'''
Created on Mar 4, 2013

@author: majid
'''
import pymongo
import sys

read_pref = pymongo.read_preferences.ReadPreference.SECONDARY

c = pymongo.MongoClient(host="mongodb://localhost:27017",
                        replicaSet="rs1",
                        w=3, wtimeout=10000, j=True,
                        read_preference = read_pref 
                        )

db = c.m101
people = db.people

try:
    print "inserting"
    people.insert({'name':'Andrew Erlichson', 'favorite_color':'blue'})
    
    print "inserting"
    people.insert({'name':'Richard Kreuter', 'favorite_color':'red'})
    
    print "inserting"
    people.insert({'name':'Dwight Merriman', 'favorite_color':'green'})
except:
    print "Unexpected error:",sys.exc_info()[0]

print 'completed the inserts'