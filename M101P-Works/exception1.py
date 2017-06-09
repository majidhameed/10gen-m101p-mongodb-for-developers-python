'''
Created on Jan 28, 2013

@author: Majid
'''
import sys

try:
    print 5/0
except:
    print 'exception ', sys.exc_info()[0]     

print "but life goes on"