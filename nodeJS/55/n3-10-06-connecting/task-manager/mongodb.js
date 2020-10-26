// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb');



const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'college';

const id = new ObjectID();

// console.log(id);
// console.log(id.getTimestamp());

MongoClient.connect(connectionURL, { useNewUrlParser: true }, async (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);
    
    //1
    //    const data = await db.collection('resturants')
    //     .find( {$and: [
    //         {"borough":"Bronx"},
    //         { $or: [
    //             {"cuisine":"American "},
    //             {"cuisine":"Chinese dish"}


    //         ]

    //         }

    //     ] }).toArray();

    //     debugger;
    //2
    // const data = await db.collection('resturants')
    //     .findOne({})

    //3
    // const data = await db.collection('resturants')
    // .find({
    //     $and: [
    //         {"borough": {$ne: 'Staten Island'}},
    //         {"borough": {$ne: 'Queens'}},
    //         {"borough": {$ne: 'Bronx'}},
    //         {"borough": {$ne: 'Brooklyn'}}


    //     ]
    // }, {restaurant_id:1,name:1,borough:1,cuisine:1,_id:0,grades:0}
    // ).toArray();



    // console.log(data);

    //4

    db.collection('students').insertMany([
        { name: "Shani Raba", address: "Rishon LeZiyon"},
        { name: "Pinchas Hoddad", address: "Bat Yam" }
    ], (errpr, result)=> {
        if(error){
                    return console.log("Unable to insert user");
        }

                console.log(result.ops);
    })
    //alternatives will be .insert(old will be removed ) || calling .insertOne() multiple times


















    // db.collection('tasks').updateMany({completed: false},{
    //     $set: {
    //         completed: true
    //     }
    // }

    // ,).then(result => {
    //     console.log(result);
    // })
    // .catch(err=> console.log(err))
    // db.collection('users').findOne({name:'Eliran', age:1}, (error,user)=>{
    //     if(error){
    //         return console.error("unable to find");
    //     }

    //     console.log(user);

    // } );

    // db.collection('tasks').find(({$natural:1},(error,task)=>{
    //     if(error){
    //                 return console.error("unable to find");
    //             }

    //             console.log(task);
    // }).sort({_id:1})

    // db.collection('users').insertOne({
    //     _id:id,
    //     name: 'Eliran',
    //     age: 27
    // }, (error,result) => {
    //     if(error){
    //         return console.log("Unable to insert user");
    //     }

    //     console.log(result.ops);
    // });



    // db.collection('tasks').insertMany([
    //     {
    //         description:'task1',
    //         completed: true
    //     },
    //     {
    //         description:'task2',
    //         completed: false
    //     },
    //     {
    //         description:'task3',
    //         completed: true
    //     },
    // ], (error,result) => {
    //     if(error){
    //         return console.error("Unable to insert into tasks");
    //     }

    //     console.log(result.ops);
    // })



});


