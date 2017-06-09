'''
Created on Jan 28, 2013

@author: Majid
'''
import pymongo
import sys

def main():
    connection = pymongo.Connection('mongodb://localhost', safe = True)
    
    db = connection.test
    users = db.users
    
    user = users.find_one()
    if user==None:
        user = {'first_name':'Majid', 'last_name':'Hameed'}
    
    try:
        users.insert(user)
    except:
        print '1st insert failed: ', sys.exc_info()[0]     
    
    print user
    
    try:
        users.insert(user)
    except:
        print '2nd insert failed: ', sys.exc_info()[0]     
        
main()
