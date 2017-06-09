'''
Created on Feb 4, 2013

@author: majid
'''
import pymongo
import sys
import datetime

# establish a connection to a database
connection = pymongo.Connection('mongodb://localhost', safe=True)

# get a handle to the school database
db = connection.school
scores = db.scores

def using_save():
    print 'using_save, reporting for duty'
    
    try:
        # get the doc
        score = scores.find_one({'student_id':1, 'type':'homework'})
        print 'before:', score
        
        # add a review date
        score['review_date'] = datetime.datetime.utcnow()
        
        # update the record with convenience method
        scores.save(score)
        score = scores.find_one({'student_id':1, 'type':'homework'})
        print 'after:', score
          
    except:
        print "Unexpected error:", sys.exc_info()[0]
        raise 

def using_update():
    print 'using_update, reporting for duty'
    
    try:
        # get the doc
        score = scores.find_one({'student_id':1, 'type':'homework'})
        print 'before:', score
        
        # add a review date
        score['review_date'] = datetime.datetime.utcnow()
        
        # using update
        scores.update({'student_id':1, 'type':'homework'},score)
        score = scores.find_one({'student_id':1, 'type':'homework'})
        print 'after:', score
          
    except:
        print "Unexpected error:", sys.exc_info()[0]
        raise 

def using_set():
    print 'using_set, reporting for duty'
    
    try:
        # get the doc
        score = scores.find_one({'student_id':1, 'type':'homework'})
        print 'before:', score
        
        # update using set
        scores.update({'student_id':1, 'type':'homework'},
                      {'$set':{'review_date':datetime.datetime.utcnow()}})
        score = scores.find_one({'student_id':1, 'type':'homework'}) 
        print 'after:', score
          
    except:
        print "Unexpected error:", sys.exc_info()[0]
        raise 

def remove_review_date():
    print "\n\nRemoving all review dates"
    try:
        scores.update({},{'$unset':{'review_date':1}},multi=True)     
    except:
        print "Unexpected error:", sys.exc_info()[0]
        raise

remove_review_date()
using_save()
remove_review_date()
using_update()
remove_review_date()
using_set()
