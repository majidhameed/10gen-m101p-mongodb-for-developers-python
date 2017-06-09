'''
Created on Jan 28, 2013

@author: Majid
'''
import pymongo

def main():
    connection = pymongo.Connection('mongodb://localhost', safe=True)
    
    db = connection.m101
    people = db.people
    
    person = {'name':'Barack Obama',
              'role':'President',
              'address':{
                         'address1':'The White House',
                         'street':'1600 Pennsylvania Ave',
                         'state':'DC',
                         'city':'Washington'
                         },
              'interests':['government', 'basketball', 'MiddleEast']
              }
    
    people.insert(person)
        
main()
