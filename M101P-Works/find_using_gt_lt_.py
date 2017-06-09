'''
Created on Feb 4, 2013

@author: majid
'''
import pymongo
import sys

# establish a connection to a database
connection = pymongo.Connection('mongodb://localhost', safe=True)

# get a handle to the school database
db = connection.school
scores = db.scores

def find():
    print 'find, reporting for duty'
    query = {'type':'exam','score':{'$gt':50,'$lt':70}}
    
    try:
        docs = scores.find(query)
    except:
        print "Unexpected error:", sys.exc_info()[0] 
        
    sanity = 0
    for doc in docs:
        print doc
        sanity+=1
        if (sanity > 10):
            break

find()