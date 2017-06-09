'''
Created on Jan 28, 2013

@author: Majid
'''
import bottle

@bottle.route('/')
def index():
    fav_fruits = ['apple', 'orange', 'grape']
    return bottle.template('hello_world', {'name':'User', 'fruits':fav_fruits})

@bottle.post('/fav_fruit')
def fav_fruit():
    fruit = bottle.request.forms.get('fruit')
    if fruit == '' or fruit == None:
        fruit = 'No fruit selected'
    
    return bottle.template('fav_fruit', {'fruit':fruit})
               
bottle.debug(True)
bottle.run(host='localhost', port=8080)
