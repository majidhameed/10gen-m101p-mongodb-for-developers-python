'''
Created on Feb 4, 2013

@author: majid
'''
import pymongo
import sys

# establish a connection to a database
connection = pymongo.Connection('mongodb://localhost', safe=True)

# get a handle to the database
db = connection.test
things = db.things

def using_upsert():
    
    print 'updating with upsert'
    
    try:
        # lets remove all stuff from things
        # things.remove({}) OR performance wise efficient
        things.drop()
        
        things.update({'thing':'apple'}, {'$set':{'color':'red'}}, upsert=True)
        things.update({'thing':'pear'}, {'color':'green'}, upsert=True)
        
        apple = things.find_one({'thing':'apple'})
        print 'apple:', apple
        pear = things.find_one({'thing':'pear'})
        print 'pear:', pear
        
    except:
        print "Unexpected error:", sys.exc_info()[0] 
        


using_upsert()
