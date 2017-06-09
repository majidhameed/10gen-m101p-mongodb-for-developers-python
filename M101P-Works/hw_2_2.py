'''
Created on Feb 4, 2013

@author: majid
'''
# Query: db.grades.find({'type':'homework'}).sort({'student_id':1},{'score':1})

import pymongo
import sys

# establish a connection to a database
connection = pymongo.Connection('mongodb://localhost', safe=True)

# get a handle to the school database
db = connection.students
grades = db.grades

def remove_low_hw():
    try:
        docs = grades.find({'type':'homework'}).sort([('student_id',pymongo.ASCENDING),('score',pymongo.ASCENDING)])
    except:
        print "Unexpected error:", sys.exc_info()[0] 
    
    student_id = None    
    for doc in docs:
        if student_id!=doc['student_id']:
            grades.remove(doc)
            print '\nRemoved', doc
        student_id = doc['student_id']
        print doc

remove_low_hw()
