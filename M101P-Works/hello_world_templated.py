'''
Created on Jan 28, 2013

@author: Majid
'''
import bottle

@bottle.route('/')
def index():
    fav_fruits = ['apple', 'orange', 'grape']
    return bottle.template('hello_world',name='Majid', fruits=fav_fruits)
    #OR below are equivalent
    #return bottle.template('hello_world',{'name':'Majid', 'fruits':fav_fruits})

bottle.debug(True)
bottle.run(host='localhost', port=8080)