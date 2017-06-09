'''
Created on Jan 28, 2013

@author: Majid
'''

fruits = ['apple', 'orange', 'pear',
          'orange', 'kiwi', 'grape',
          'pear', 'kiwi', 'orange', 'cherry']


def fruit_freq(fruits):
    
    fruit_freq = {}
    for fruit in fruits:
        if fruit in fruit_freq:
            fruit_freq[fruit] += 1
        else:     
            fruit_freq[fruit] = 1
    return fruit_freq
        
print fruit_freq(fruits)    