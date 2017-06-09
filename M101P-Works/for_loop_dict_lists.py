'''
Created on Jan 28, 2013

@author: Majid
'''

person = {'name':'Majid', 'favorite_color':'black', 'city': 'Karachi',
          'interests' : ['video games', 'programming', 'music'] 
          }

for key in person:
    if (key == 'interests'):
        print '\t interests are:'
        for interest in person[key]:
            print " " + interest
    else:         
        print key + ':' + person[key]
