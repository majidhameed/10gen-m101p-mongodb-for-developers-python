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
    query = {}
    
    try:
        cursor = scores.find(query).sort('student_id',pymongo.ASCENDING).skip(4).limit(1)
        
    except:
        print "Unexpected error:", sys.exc_info()[0] 
        
    for doc in cursor:
        print doc

find()