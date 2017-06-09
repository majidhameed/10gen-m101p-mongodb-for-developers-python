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

def find_one():
    print 'find, reporting for duty'
    query = {'student_id':10}
    
    try:
        doc = scores.find_one(query)
    except:
        print "Unexpected error:", sys.exc_info()[0] 

    print doc

find_one()