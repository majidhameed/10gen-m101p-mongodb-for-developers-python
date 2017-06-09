'''
Created on Feb 5, 2013

@author: majid
'''
import pymongo
import sys

# establish a connection to a database
connection = pymongo.Connection('mongodb://localhost', safe=True)

# get a handle to the database
db = connection.test
counters = db.counters

# gets the next number in a sequence
def get_next_sequence_number(name):
    try:
        counter = counters.find_and_modify(query={'type':name},
                                           update={'$inc':{'value':1}},
                                           upsert=True, new=True)
        counter_value = counter['value']
        return counter_value
    except:
        print "Unexpected error:", sys.exc_info()[0] 
        


print get_next_sequence_number('uid')
print get_next_sequence_number('uid')
print get_next_sequence_number('uid')