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
    
    bottle.response.set_cookie('fruit', fruit)
    
    bottle.redirect('/show_fruit')

@bottle.route('/show_fruit')
def show_fruit():
    fruit = bottle.request.get_cookie('fruit')
    return bottle.template('show_fruit', {'fruit':fruit})    
               
bottle.debug(True)
bottle.run(host='localhost', port=8080)
