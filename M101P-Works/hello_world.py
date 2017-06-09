'''
Created on Jan 28, 2013

@author: Majid
'''
import bottle

@bottle.route('/')
def index():
    return "<html><head><title></title></head><body>Hello World</body></html>"

@bottle.route('/test')
def test():
    return 'this is test'

bottle.debug(True)
bottle.run(host='localhost', port=8080)