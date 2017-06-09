'''
Created on Feb 4, 2013

@author: majid
'''
import pymongo
import sys
import urllib2
import json

# establish a connection to a database
connection = pymongo.Connection('mongodb://localhost', safe=True)

# get a handle to the school database
db = connection.reddit
stories = db.stories

# get the reddit home page
reddit_page = urllib2.urlopen("http://www.reddit.com/r/technology/.json")

# parse the json into Python objects
parsed = json.loads(reddit_page.read())

# iterate through every item on the page
for item in parsed['data']['children']:
    # put it in mongo
    stories.insert(item['data'])
     