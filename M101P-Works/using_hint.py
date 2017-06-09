'''
Created on Feb 17, 2013

@author: majid
'''
import pymongo
import sys

# establish a connection to a database
connection = pymongo.Connection('mongodb://localhost', safe=True)

# get a handle to the database
db = connection.test
foo = db.foo

query = {'a':4000,'b':4000,'c':4000}

try:
    doc = foo.find(query).hint([('c',pymongo.ASCENDING)]).explain()
except:
    print "Unexpected error:", sys.exc_info()[0] 
    
for key in doc:
    print str(key).rjust(25),":",str(doc[key])
