'''
Created on Mar 11, 2013

@author: majid
'''
import pymongo
import sys

# establish a connection to a database
connection = pymongo.Connection('mongodb://localhost', safe=True)

# get a handle to the photosharing database
db = connection.photosharing
images_collection = db.images
albums_collection = db.albums

def find():
    
    try:
        images = images_collection.find({})
    except:
        print "Unexpected error:", sys.exc_info()[0] 
        
    orphan_images=[]
    for image in images:
        image_id=image['_id']
        count = albums_collection.find({"images":image_id}).count()
        
        if count==0:
            orphan_images.append(image_id)
            images_collection.remove(image)
        
    print orphan_images
    print "orphan images count",len(orphan_images)
        

find()