'''
Created on Feb 12, 2013

@author: majid
'''
# Query: db.grades.find({'type':'homework'}).sort({'student_id':1},{'score':1})

import pymongo
import sys

# establish a connection to a database
connection = pymongo.Connection('mongodb://localhost', safe=True)

# get a handle to the school database
db = connection.school
students = db.students

def remove_low_hw():
    try:
        docs = students.find()
    except:
        print "Unexpected error:", sys.exc_info()[0] 
    
    student_id = None    
    for doc in docs:
        print "\nBEFORE:", doc
        _id = doc['_id']
        scores = doc['scores']
        low_score = None
        for score in scores:
            if score['type'] == 'homework':
                print "hw", score
            
                if low_score == None:
                    low_score = score
                    
                if score['score']<low_score['score']:
                    low_score = score
                 
        print "low_score",low_score        
        scores.remove(low_score)
        students.update({'_id':_id},{'$set':{'scores':scores}})
        print "AFTER:", students.find_one({"_id":_id}) 
        

remove_low_hw()
