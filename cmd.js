//Start Shell
mongo

//use test database
use test

// store in collection
db.things.save({a:1, b:2, c:3})

db.things.find()

// save another document
db.things.save({a:3, b:4, c:6, d:200})

db.things.find()

db.things.find({a:1})

db.things.save({a:1,b:1, fruit['apple','orange','pear']})

db.things.find()
db.things.save({name:'majid', address:{street:'ABC Street', city:'Karachi', zip:'75950', house_number:'67'}})

db.things.find()

db.things.find().pretty()

db.mycollection.insert({hello:"world"})

db.names.save({'name':'Majid Hameed'});

// Update name
db.names.update({},{$set:{'name':'Majid Hameed Khan'}})

db.names.findOne()

var j = db.names.findOne()

j.name = 'Majid'

db.names.save(j)
db.names.find()

db.names.remove({name:'Majid'})
db.names.find()
db.names.save({'name':'Majid Hameed'})

db.names.save({'name':'Majid Hameed', city:'Karachi'})
db.names.save({'name':'Khalid', city:'Faisalabad',color:'White'})
db.names.find()
db.names.find().pretty()

db.names.remove({name:'Majid'})
db.names.find()
db.names.save({'name':'Majid Hameed'})

db.names.find()
db.names.remove({name:'Majid'})
db.names.find()

db.names.remove({name:'Majid Hameed'})
db.names.find()
db.names.save({'name':'Majid Hameed', city:'Karachi'})
db.names.save({'name':'Khalid', city:'Faisalabad',color:'White'})
db.names.find()

db.names.find().pretty()
 
db.names.find({'name':'Majid Hameed'})

var j = db.names.find({'name':'Majid Hameed'})
j.color='Black'
db.names.save(j)

db.names.find().pretty()

{'fruit':['apple','pear', 'peach']}
{'address':{'street_address':'23 Elm Drive', 'city':'Palo Alto', 'state':'California', 'zipcode': '94305'}}

// Removes all data in users collection
db.users.remove()

// Drop database
db.dropDatabase()

z = {a:1}
z.a
z["a"]
z['a']
w="a"
z[w]

doc = {"name":"ali", 'age': 30, 'profession': 'hacker'}
db.people.insert(doc)
db.people.find()

db.people.findOne({'name':'ali'},{'name':true,'_id':false});
// OR
db.people.findOne({'name':'ali'},{'name':1,'_id':0});

db.users.findOne({"username":"dwight"},{"email":true,"_id":false});

for (i=0; i<1000; i++) {
        names=["exams", "essay", "quiz"];
        for (j=0;j<3;j++) {
                db.scores.insert({"student":i, "type": names[j], score: Math.round(Math.random()*100)});
        }
}

db.scores.find().pretty()

db.scores.find().count();
db.scores.find({type:'essay'});
db.scores.find({type:'essay'}).count();
db.scores.find({'student':19}).count();
db.scores.find({'student':19, 'type': 'essay'})

db.scores.find({'student':19, 'type': 'essay'},{'score':1, '_id' : false})

db.scores.find({'type':'essay','score':50},{'student':true, '_id':false})

db.scores.find({'score':{$gt : 95}})
db.scores.find({'score':{$gt : 95}}).count()

db.scores.find({'score':{$gt : 95}, 'type':'essay'}).count()
db.scores.find({'score':{$gt : 95, $lte : 98}, 'type':'essay'}).count()

db.scores.find({'score':{$gte : 50, $lte : 60}, 'type':'essay'}).count()

> db.people.find()
> db.people.insert({'name':'Smith','age':30,'profession':'hacker'});
> db.people.insert({'name':'Jones','age':35,'profession':'baker'});
> db.people.insert({'name':'Alice'});
> db.people.insert({'name':'Bob'});
> db.people.insert({'name':'Charlie'});
> db.people.insert({'name':'Dave'});
> db.people.insert({'name':'Edgar'});
> db.people.insert({'name':'Fred'});
> db.people.insert({'name':42});
>
>
> db.people.find();
{ "_id" : ObjectId("510a671a23289a817dab4848"), "name" : "Smith", "age" : 30, "p
rofession" : "hacker" }
{ "_id" : ObjectId("510a672a23289a817dab4849"), "name" : "Jones", "age" : 35, "p
rofession" : "baker" }
{ "_id" : ObjectId("510a673523289a817dab484a"), "name" : "Alice" }
{ "_id" : ObjectId("510a674223289a817dab484b"), "name" : "Bob" }
{ "_id" : ObjectId("510a674823289a817dab484c"), "name" : "Charlie" }
{ "_id" : ObjectId("510a674c23289a817dab484d"), "name" : "Dave" }
{ "_id" : ObjectId("510a675223289a817dab484e"), "name" : "Edgar" }
{ "_id" : ObjectId("510a675623289a817dab484f"), "name" : "Fred" }
{ "_id" : ObjectId("510a676123289a817dab4850"), "name" : 42 }
> db.people.find({profession:{$exists:true}});
{ "_id" : ObjectId("510a671a23289a817dab4848"), "name" : "Smith", "age" : 30, "p
rofession" : "hacker" }
{ "_id" : ObjectId("510a672a23289a817dab4849"), "name" : "Jones", "age" : 35, "p
rofession" : "baker" }

db.people.find({profession:{$exists:false}});

// Name is of type string
db.people.find({name:{$type:2}});

> db.people.find({name:{$regex:'a'}});
{ "_id" : ObjectId("510a674823289a817dab484c"), "name" : "Charlie" }
{ "_id" : ObjectId("510a674c23289a817dab484d"), "name" : "Dave" }
{ "_id" : ObjectId("510a675223289a817dab484e"), "name" : "Edgar" }
> db.people.find({name:{$regex:'e$'}});
{ "_id" : ObjectId("510a673523289a817dab484a"), "name" : "Alice" }
{ "_id" : ObjectId("510a674823289a817dab484c"), "name" : "Charlie" }
{ "_id" : ObjectId("510a674c23289a817dab484d"), "name" : "Dave" }

> db.people.find({name:{$regex:'^A'}});
{ "_id" : ObjectId("510a673523289a817dab484a"), "name" : "Alice" }

db.people.find({'name':{$regex,'q'}},{'profession':{$exists:true}})

db.users.find({'name':{$regex:'q'},'email':{$exists:true}})

> db.people.find({name:{$lt:'D'}});
{ "_id" : ObjectId("510a673523289a817dab484a"), "name" : "Alice" }
{ "_id" : ObjectId("510a674223289a817dab484b"), "name" : "Bob" }
{ "_id" : ObjectId("510a674823289a817dab484c"), "name" : "Charlie" }
> db.people.find({name:{$lt:'D', $gt : 'B'}});
{ "_id" : ObjectId("510a674223289a817dab484b"), "name" : "Bob" }
{ "_id" : ObjectId("510a674823289a817dab484c"), "name" : "Charlie" }
> db.people.find({name:{$gt:'B', $lt : 'D'}});
{ "_id" : ObjectId("510a674223289a817dab484b"), "name" : "Bob" }
{ "_id" : ObjectId("510a674823289a817dab484c"), "name" : "Charlie" }


db.people.find({$or:
		[{name:{$regex:'e$'}},{age:{$exists:true}}]
	});


db.people.find({$and:[{name:{$gt:"C"}},{name:{$regex:"a"}}]});
//OR
db.people.find({name:{$gt:"C",$regex:"a"}});

db.accounts.insert({"name":"George","favorites":["ice cream","pretzels"]});
db.accounts.insert({"name":"Howard","favorites":["pretzels","beer"]});

db.accounts.insert({name:'Irving',favorites:['beer','pretzels','cheese']})
db.accounts.insert({name:'John',favorites:['beer','cheese']})

// All documents with cheese, beer as favorites
db.accounts.find({favorites:{$all:['cheese','beer']}})
db.accounts.find({favorites:{$all:['cheese','pretzels']}})

// cheese or beer or both
db.accounts.find({favorites:{$in:['cheese','beer']}})

// Howard or John or both
db.accounts.find({name:{$in:['John','Howard']}})

db.users.insert({ name:'richard',email:{work:'richard@10gen.com',personal:'kreuter@example.com'}})

> db.users.find({email:{work:'richard@10gen.com',personal:'kreuter@example.com'}
});
{ "_id" : ObjectId("510d3d5d763fd7d770e743d9"), "name" : "richard", "email" : {
"work" : "richard@10gen.com", "personal" : "kreuter@example.com" } }

// Returns nothing
> db.users.find({email:{work:'richard@10gen.com'}});
> db.users.find({email:{personal:'kreuter@example.com'}});

> db.users.find({"email.personal":'kreuter@example.com'});
{ "_id" : ObjectId("510d3d5d763fd7d770e743d9"), "name" : "richard", "email" : {
"work" : "richard@10gen.com", "personal" : "kreuter@example.com" } }

> db.users.find({"email.work":'richard@10gen.com'});
{ "_id" : ObjectId("510d3d5d763fd7d770e743d9"), "name" : "richard", "email" : {
"work" : "richard@10gen.com", "personal" : "kreuter@example.com" } }

cur = db.people.find();null;
cur.next();
cur.hasNext();

db.people.update({name:'Smith'},{name:'Thompson', salary:'50000'});

// adds the age fielld with value 32 if it not exists
db.people.update({name:'Alice'},{$set:{age:32}});

// increments the age by 1 
db.people.update({name:'Alice'},{$inc:{age:1}});

// if not exist then age is set as 1
db.people.update({name:'Bob'},{$inc:{age:1}});

// removes the profession field from people where name is Jones
db.people.update({'name':'Jones'},{$unset:{'profession':1}})

// Array operations
> db.arrays.insert({_id:0, a:[1,2,3,4]});
> db.arrays.findOne();
{ "_id" : 0, "a" : [ 1, 2, 3, 4 ] }
> db.arrays.find();
{ "_id" : 0, "a" : [ 1, 2, 3, 4 ] }
> db.arrays.update({_id:0},{$set:{"a.2":5}})
> db.arrays.findOne();
{ "_id" : 0, "a" : [ 1, 2, 5, 4 ] }
> db.arrays.update({_id:0},{$push:{a:6}})
> db.arrays.findOne();
{ "_id" : 0, "a" : [ 1, 2, 5, 4, 6 ] }
> db.arrays.update({_id:0},{$pop:{a:1}})
> db.arrays.findOne();
{ "_id" : 0, "a" : [ 1, 2, 5, 4 ] }
> db.arrays.update({_id:0},{$pop:{a:-1}})
> db.arrays.findOne();
{ "_id" : 0, "a" : [ 2, 5, 4 ] }
> db.arrays.update({_id:0},{$pushAll:{a:[7,8,9]}})
> db.arrays.findOne();
{ "_id" : 0, "a" : [ 2, 5, 4, 7, 8, 9 ] }
> db.arrays.update({_id:0},{$pull:{a:5}})
> db.arrays.findOne();
{ "_id" : 0, "a" : [ 2, 4, 7, 8, 9 ] }
> db.arrays.update({_id:0},{$pullAll:{a:[2,4,8]}})
> db.arrays.findOne();
{ "_id" : 0, "a" : [ 7, 9 ] }
> db.arrays.findOne();
{ "_id" : 0, "a" : [ 7, 9 ] }
> db.arrays.update({_id:0},{$addToSet:{a:5}})
> db.arrays.findOne();
{ "_id" : 0, "a" : [ 7, 9, 5 ] }
> db.arrays.update({_id:0},{$addToSet:{a:5}})
> db.arrays.findOne();
{ "_id" : 0, "a" : [ 7, 9, 5 ] }
> db.arrays.update({_id:0},{$addToSet:{a:5}})
> db.arrays.update({_id:0},{$addToSet:{a:5}})
> db.arrays.findOne();
{ "_id" : 0, "a" : [ 7, 9, 5 ] }

// has not effect as George is not there
db.people.update({name:"George"},{$set:{age:40}});
// will add the document
db.people.update({name:"George"},{$set:{age:40}},{upsert:true});

// Default behavior is to update only 1 record so multi:true is required to multiple records
db.people.update({},{$set:{title:'Dr'}}, {multi:true})

db.people.remove({name:'Alice'})

db.people.remove({name:{$gt:'M'}})

> db.people.remove()
> show collections
accounts
arrays
people
scores
system.indexes
users
> db.people.find()
> db.people.drop()
true
> show collections
accounts
arrays
scores
system.indexes
users
>

> db.people.insert({_id:'Smith',age:30});
> db.people.insert({_id:'Smith',age:30});
E11000 duplicate key error index: test.people.$_id_  dup key: { : "Smith" }
> db.runCommand({getLastError:1})
{
        "err" : "E11000 duplicate key error index: test.people.$_id_  dup key: {
 : \"Smith\" }",
        "code" : 11000,
        "n" : 0,
        "connectionId" : 1,
        "ok" : 1
}
> db.people.insert({_id:'Jones',age:30});
> db.runCommand({getLastError:1})
{ "n" : 0, "connectionId" : 1, "err" : null, "ok" : 1 }
> db.people.update({},{$set:{title:'Dr'}},{multi:true});
> db.runCommand({getLastError:1})
{
        "updatedExisting" : true,
        "n" : 2,
        "connectionId" : 1,
        "err" : null,
        "ok" : 1
}
> db.people.update({name:"Thompson"},{$set:{title:'Dr'}},{upsert:true});
> db.runCommand({getLastError:1})
{
        "updatedExisting" : false,
        "upserted" : ObjectId("510ea9162dde994448ab1c14"),
        "n" : 1,
        "connectionId" : 1,
        "err" : null,
        "ok" : 1
}

> db.people.remove()
> db.runCommand({getLastError:1})
{ "n" : 3, "connectionId" : 1, "err" : null, "ok" : 1 }

db.stories.find({'title':{$regex:'Microsoft'}},{'title':1,'_id':0})

db.students.insert({_id:0,"name":"Andrew Erlichson", "teachers": [0,1]})
db.students.insert({_id:1,"name":"Richard Kreuter", "teachers": [0,1,3]})
db.students.insert({_id:2,"name":"Eliot Horowitz", "teachers": [1,3]})
db.students.insert({_id:3,"name":"Mark Heinrich", "teachers": [0,3]})

db.teachers.insert({_id:0, "name": "Mark Horowitz"})
db.teachers.insert({_id:1, "name": "John Hennessy"})
db.teachers.insert({_id:2, "name": "Bruce Wolley"})
db.teachers.insert({_id:3, "name": "James Plummer"})

db.students.ensureIndex({'teachers':1})
db.students.find({'teachers':{'$all':[1,3]}})
db.students.find({'teachers':{'$all':[1,3]}}).explain()

db.system.indexes.find()

// Listing inside a collection
db.grades.getIndexes()


db.students.dropIndex({'teachers':1})

db.bbb.insert({a:1,b:1})
db.bbb.ensureIndex({a:1,b:1})
db.bbb.insert({[a:[1,2,3],b:1})
db.bbb.insert({a:[1,2,3],b:1})
db.bbb.insert({a:5,b:[1,2,3]})
db.bbb.insert({a:5,b:[1,2,3]})
db.bbb.getIndexes()

> db.bbb.insert({a:[1,2,4],b:[1,2,3]})
cannot index parallel arrays [b] [a]

> db.stuff.insert({thing:'pear'})
> db.stuff.ensureIndex({thing:1})
> db.stuff.insert({thing:'pear'})
> db.stuff.insert({thing:'apple'})
db.stuff.dropIndex({thing:1})

> db.stuff.ensureIndex({thing:1},{unique:true})
E11000 duplicate key error index: test.stuff.$thing_1  dup key: { : "pear" }
db.stuff.remove({ "_id" : ObjectId("511b76ee2b09d367e5ca3e5f")})

db.stuff.ensureIndex({thing:1},{unique:true})
db.stuff.getIndexes()

> db.stuff.insert({thing:'apple'})
E11000 duplicate key error index: test.stuff.$thing_1  dup key: { : "apple" }

> db.things.insert({thing:"pear", "color":"green"})
> db.things.insert({thing:"apple", "color":"red"})
> db.things.insert({thing:"pear", "shape":"round"})

// removes duplicates. Dangerous to use
db.things.ensureIndex({thing:1},{unique:true,dropDups:true})

> db.products.insert({item:"DVI-to-VGA cable"})
> db.products.insert({item:"iphone cradle"})
> db.products.insert({item:"jeans",size:"32x32"})
> db.products.insert({item:"polo shirt",size:"medium"})

> db.products.ensureIndex({size:1},{unique:true})
E11000 duplicate key error index: test.products.$size_1  dup key: { : null }


> db.products.ensureIndex({size:1},{unique:true, sparse:true})

// Returns only 2 docs that contains size attribute
db.products.find().sort({'size':1})

> db.products.dropIndex({size:1})
// Now it will return 4 docs
db.products.find().sort({'size':1})

> db.people.insert({name:"Andrew",title:"Jester"})
> db.people.insert({name:"Dwight",title:"CEO"})
> db.people.insert({name:"John"})
> db.people.ensureIndex({title:1}, {sparse:1})
> db.people.find({title:null})
> db.people.find()
//No documents, because the query uses the index and there are no documents with title:null in the index.

use test
for (i=0;i<10000;i++) {
        db.foo.insert({a:i,b:i,c:i});
}

db.foo.ensureIndex({a:1,b:1,c:1})

db.foo.find({c:1}).explain()
db.foo.find({a:500}).explain()
db.foo.find({a:500},{a:1,b:1,_id:0}).explain()

db.foo.getIndexes()

db.bbb.stats()
db.bbb.totalIndexSize()

db.foo.dropIndex({a:1,b:1,c:1})

db.foo.ensureIndex({a:1})
db.foo.ensureIndex({b:1})
db.foo.ensureIndex({c:1})
db.foo.ensureIndex({d:1})

db.foo.find({a:100,b:100,c:100}).explain()

// Hint use no index 
db.foo.find({a:100,b:100,c:100}).hint({$natural:1}).explain()

db.foo.find({a:100,b:100,c:100}).hint({c:1}).explain()

// No documents with d index
db.foo.find({a:100,b:100,c:100}).hint({d:1}).explain()

// but still returns the document
db.foo.find({a:100,b:100,c:100}).hint({d:1})

// create sparse index
db.foo.ensureIndex({e:1},{sparse:true})

// Now will result nothing
db.foo.find({a:100,b:100,c:100}).hint({e:1})

// will returns the document
db.foo.find({a:100,b:100,c:100})

use school
db.students.drop();
types = ['exam', 'quiz', 'homework', 'homework'];
for (i = 0; i < 1000000; i++) {
    scores = []
    for (j = 0; j < 4; j++) {
        scores.push({'type':types[j],'score':Math.random()*100});
    }
    record = {'student_id':i, 'scores':scores};
    db.students.insert(record);
}
            
use school2
db.students.drop();
types = ['exam', 'quiz', 'homework', 'homework'];
// 1 million students
for (i = 0; i < 1000000; i++) {
    // take 10 classes
    for (class = 0; class < 10; class++) {
        scores = []
            // and each class has 4 grades
            for (j = 0; j < 4; j++) {
                scores.push({'type':types[j],'score':Math.random()*100});
            }
        // there are 500 different classes that they can take
        class_id = Math.floor(Math.random()*501); // get a class id between 0 and 500
        record = {'student_id':i, 'scores':scores, 'class_id':class_id};
        db.students.insert(record);
    }
}

db.students.ensureIndex({student_id:1})
db.students.ensureIndex({class_id:1})
db.students.ensureIndex({student_id:1,class_id:1})

db.students.find({student_id:{$gt:500},class_id:20}).sort({'student_id':1}).explain()
db.students.find({student_id:{$gt:500},class_id:20}).sort({'student_id':1}).hint({student_id:1},{class_id:1}).explain()
db.students.find({student_id:{$gt:500},class_id:20}).sort({'student_id':1}).hint({class_id:1}).explain()

// Geo Spatial indexes - 2D
use test
db.stores.insert({name:"Rubys",type:"Barber",location:[40,74]})
db.stores.insert({name:"Ace Hardware",type:"Hardware",location:[40.232,-74.343]})
db.stores.insert({name:"Tickle Candy",type:"Food",location:[41.232,-75.343]})
db.stores.ensureIndex({location:'2d',type:1})
db.stores.find({location:{$near:[50,50]}})
db.places.find({'location':{$near:[74,140]}}).limit(3)

//lon,lat , maxDistance = 1 radian
db.runCommand({geoNear:'stores',near:[50,50],spherical:true,maxDistance:1})

db.runCommand({geoNear:'stores',near:[50,50],spherical:true,maxDistance:3})

// find out slow queries
db.system.profile.find().pretty()

db.system.profile.find({ns:/school.students/}).sort({ts:1}).pretty()

db.system.profile.find({millis:{$gt:1}}).sort({ts:1}).pretty()

db.getProfilingLevel()

db.getProfilingStatus()

db.setProfilingLevel(1,1)
db.getProfilingStatus()
db.setProfilingLevel(0)
db.getProfilingStatus()

//Write the query to look in the system profile collection for all queries that took longer than one second, ordered by timestamp descending.
db.system.profile.find({millis:{$gt:1000}}).sort({ts:-1})

// mongotop like unix top
mongotop
// ran every 10 seconds
mongotop 10

// like iostat
mongostat

@@@ End of Week 4 Performance

@@@ Week 5 - Aggregation

db.products.insert({'name':'Nexus 7', 'category':'Tablets','manufacturer':'Google','price':199})
db.products.insert({'name':'Kindle Paper White', 'category':'Tablets','manufacturer':'Amazon','price':129})
db.products.insert({'name':'Kindle Fire', 'category':'Tablets','manufacturer':'Amazon','price':199})
db.products.insert({'name':'Galaxy IV', 'category':'Phone','manufacturer':'Samsung','price':150})
db.products.insert({'name':'Sony VAIO', 'category':'Laptop','manufacturer':'Sony','price':500})
db.products.insert({'name':'Mac Pro', 'category':'Laptop','manufacturer':'Apple','price':1000})
db.products.insert({'name':'Mac Mini', 'category':'Laptop','manufacturer':'Apple','price':700})
db.products.insert({'name':'IPhone 3', 'category':'Phone','manufacturer':'Apple','price':450})
db.products.insert({'name':'IPAD 1', 'category':'Tablets','manufacturer':'Apple','price':600})

db.products.aggregate([{$group:{_id:'$manufacturer',num_products:{$sum:1}}}])

db.products.aggregate([{$group:{"_id":"$category","num_products":{$sum:1}}}])
// Same as above but increases the readability
db.products.aggregate([{$group:{"_id":{category:"$category"},"num_products":{$sum:1}}}])

// Compound Grouping
db.products.aggregate([{$group:{"_id":{manufacturer:"$manufacturer",category:"$category"},"num_products":{$sum:1}}}])
// Same as above but increases the readability
db.products.aggregate([{$group:{"_id":{maker:"$manufacturer",category:"$category"},"num_products":{$sum:1}}}])

// _id field can be non scalar value like document but it need to be unique
db.foo.insert({_id:{name:"andrew",class:"m101"},hometown:"NY"})
// execute above statement again will generate duplicate key error

db.products.aggregate([{$group:{"_id":"_id",max_price:{$max:"$price"}}}])
db.products.aggregate([{$group:{"_id":"_id",min_price:{$min:"$price"}}}])

db.products.aggregate([{$group:{"_id":{maker:"$manufacturer"},sum_prices:{$sum:"$price"}}}])

// Total Population in each state
db.zips.aggregate([{$group:{"_id":"$state","population":{$sum:"$pop"}}}])

// Max population
db.zips.aggregate([{$group:{"_id":"$state","population":{$sum:"$pop"}}},{$group:{"_id":"$state","max_population":{$max:"$population"}}}])

db.products.aggregate([{$group:{"_id":{category:"$category"},avg_price:{$avg:"$price"}}}])

db.zips.aggregate([{$group:{"_id":"$state","average_pop":{$avg:"$pop"}}}])

db.products.aggregate([{$group:{"_id":{category:"$category"},avg_price:{$avg:"$price"}}}])

db.products.aggregate([{$group:{"_id":{maker:"$manufacturer"},categories:{$addToSet:"$category"}}}])

db.zips.aggregate([{$group:{"_id":"$city","postal_codes":{$addToSet:"$_id"}}}])

db.products.aggregate([{$group:{"_id":{maker:"$manufacturer"},categories:{$push:"$category"}}}])

db.products.aggregate([{$group:{"_id":{maker:"$manufacturer"},maxprice:{$max:"$price"}}}])

db.zips.aggregate([{$group:{"_id":"$state","pop":{$max:"$pop"}}}])

use school2;
db.students.aggregate([
    {'$group':{_id:{class_id:"$class_id",student_id:"$student_id"}, 'average':{"$avg":"$score"}}},
    {'$group':{_id:"$_id.class_id",'average':{"$avg":"$average"}}}
    ])

use week5;
db.products.aggregate([
    {$project:{_id:0,'maker':{$toLower:"$manufacturer"},'details':{'category':"$category",'price':{"$multiply":["$price",10]}},
    'item':'$name'}}
    ])

db.zips.aggregate([{$project:{_id:0,city:{$toLower:"$city"},pop:1,state:1,zip:"$_id"}}])

db.zips.aggregate([
    {$match:{'state':'NY'}}
    ])

db.zips.aggregate([
    {$match:{'state':'NY'}},
    {$group:{'_id':'$city','population':{$sum:'$pop'},zip_codes:{$addToSet:'$_id'}}}
])

db.zips.aggregate([
    {$match:{'state':'NY'}},
    {$group:{'_id':'$city','population':{$sum:'$pop'},zip_codes:{$addToSet:'$_id'}}},
    {$project:{_id:0,city:$city,population:$population,zip_codes:$zip_codes}}
])

db.zips.aggregate([     
    {$match:{'state':'NY'}},     
    {$group:{'_id':'$city','population':{$sum:'$pop'},zip_codes:{$addToSet:'$_id'}}},     
    {$project:{_id:0,city:"$_id",population:"$population",zip_codes:'$zip_codes'}} 
])
OR
db.zips.aggregate([     
    {$match:{'state':'NY'}},     
    {$group:{'_id':'$city','population':{$sum:'$pop'},zip_codes:{$addToSet:'$_id'}}},     
    {$project:{_id:0,city:"$_id",population:1,zip_codes:1}} 
])

db.zips.aggregate([     
    {$match:{'state':'NY'}},     
    {$group:{'_id':'$city','population':{$sum:'$pop'}}},     
    {$project:{_id:0,city:"$_id",population:1}},
    {$sort:{population:-1}}
])

db.zips.aggregate([     
    {$match:{'state':'NY'}},     
    {$group:{'_id':'$city','population':{$sum:'$pop'}}},     
    {$project:{_id:0,city:"$_id",population:1}},
    {$sort:{population:-1}},
    {$skip:10},
    {$limit:5}
])

db.zips.aggregate([     
    {$match:{'state':'NY'}},     
    {$group:{'_id':'$city','population':{$sum:'$pop'}}},     
    {$project:{_id:0,city:"$_id",population:1}},
    {$sort:{population:-1}},
    {$limit:5},
    {$skip:10}
])

db.zips.aggregate([
    {$group:{_id:{state:"$state", city:"$city"},population:{$sum:"$pop"}}},
    {$sort:{"_id.state":1,"population":-1}},
    {$group:{_id:"$_id.state",city:{$first:"$_id.city"},population:{$first:"$population"}}},
    {$sort:{"_id":1}}
    ])

db.posts.aggregate([
    {"$unwind":"$tags"},
    {"$group":{"_id":"$tags","count":{$sum:1}}},
    {"$sort":{"count":-1}},
    {"$limit":10},
    {"$project":{_id:0,'tag':'$_id',count:1}}
    ])

db.inventory.drop();
db.inventory.insert({'name':"Polo Shirt", 'sizes':["Small", "Medium", "Large"], 'colors':['navy', 'white', 'orange', 'red']})
db.inventory.insert({'name':"T-Shirt", 'sizes':["Small", "Medium", "Large", "X-Large"], 'colors':['navy', "black",  'orange', 'red']})
db.inventory.insert({'name':"Chino Pants", 'sizes':["32x32", "31x30", "36x32"], 'colors':['navy', 'white', 'orange', 'violet']})

db.inventory.aggregate([
    {$unwind: "$sizes"},
    {$unwind: "$colors"},
    {$group: 
     {
    '_id': {'size':'$sizes', 'color':'$colors'},
    'count' : {'$sum':1}
     }
    }
])

db.inventory.aggregate([
    {$unwind: "$sizes"},
    {$unwind: "$colors"},
    /* create the color array */
    {$group: 
     {
    '_id': {name:"$name",size:"$sizes"},
     'colors': {$push: "$colors"},
     }
    },
    /* create the size array */
    {$group: 
     {
    '_id': {'name':"$_id.name",
        'colors' : "$colors"},
     'sizes': {$push: "$_id.size"}
     }
    },
    /* reshape for beauty */
    {$project: 
     {
     _id:0,
     "name":"$_id.name",
     "sizes":1,
     "colors": "$_id.colors"
     }
    }
])

db.inventory.aggregate([
    {$unwind: "$sizes"},
    {$unwind: "$colors"},
    {$group: 
     {
    '_id': "$name",
     'sizes': {$addToSet: "$sizes"},
     'colors': {$addToSet: "$colors"},
     }
    }
])

// Create replica set
mongod --replSet rs1 --logpath "/10gen/1.log" --dbpath /10gen/1 --port 27017 --smallfiles --oplogSize 50
mongod --replSet rs1 --logpath "/10gen/2.log" --dbpath /10gen/2 --port 27018 --smallfiles --oplogSize 50
mongod --replSet rs1 --logpath "/10gen/3.log" --dbpath /10gen/3 --port 27019 --smallfiles --oplogSize 50

// Connect to 27018
mongo --port 27018

config = {
    _id:"rs1",
    members:[
    {_id:0, host:"localhost:27017", priority:0, slaveDelay:5},
    {_id:1, host:"localhost:27018"},
    {_id:2, host:"localhost:27019"},
    ]
}
rs.initiate(config)
rs.status()

rs1:PRIMARY> db.people.insert({'name':'Andrew'})

rs1:SECONDARY> db.people.find()
error: { "$err" : "not master and slaveOk=false", "code" : 13435 }

rs1:SECONDARY> rs.slaveOk()
rs1:SECONDARY> db.people.find()
{ "_id" : ObjectId("5132687fd2959839b1c7afe1"), "name" : "Andrew" }

rs1:PRIMARY> rs.isMaster()
rs1:PRIMARY> db.people.insert({'name':'Richard'})

rs1:SECONDARY> rs.slaveOk()
rs1:SECONDARY> db.people.find()

rs1:PRIMARY> use local

//shows the replicated queries
rs1:PRIMARY> db.oplog.rs.find().pretty()

rs1:SECONDARY> use local

//should display the exact same item
rs1:SECONDARY> db.oplog.rs.find().pretty()

rs1:PRIMARY> db.people.ensureIndex({name:1})
rs1:PRIMARY> db.people.getIndexes()

//To get the config on any primary or secondary node
rs.conf()


/* FINAL */

//Q1
db.messages.find({"headers.From":"andrew.fastow@enron.com","headers.To":"john.lavorato@enron.com"}).count()
db.messages.find({"headers.From":"andrew.fastow@enron.com","headers.To":"jeff.skilling@enron.com"}).count()

db.messages.aggregate([
    {$match:{"headers.From":"andrew.fastow@enron.com","headers.To":"jeff.skilling@enron.com"}},  
    {"$unwind":"$headers.To"},
    {"$group":{"_id":{'to':"$headers.To","from":"$headers.From"},count:{$sum:1}}},
    {"$project":{_id:0,'From':'$_id.from','To':'$_id.to',count:1}}
    ])

//Q2
db.messages.aggregate([
    {"$unwind":"$headers.To"},
    {"$group":{"_id":{'to':"$headers.To","from":"$headers.From"},count:{$sum:1}}},
    {"$sort":{"count":-1}},
    {"$limit":10},
    {"$project":{_id:0,'From':'$_id.from','To':'$_id.to',count:1}}
    ])

//Q3
db.messages.update({"headers.Message-ID":"<8147308.1075851042335.JavaMail.evans@thyme>"},{$push:{'headers.To':"mrpotatohead@10gen.com"}})
//Tests Passed for Final 3. Your Final 3 validation code is 897h6723ghf25gd87gh28

//Q4
//Tests Passed for Final 4. Your validation code is 89jlkfdsjflks34j0d

//Q5 - Done
//Q6 - Done
//Q7 - Done
//Q8 - Done
//Q9 - Done
//Q10 - Done

