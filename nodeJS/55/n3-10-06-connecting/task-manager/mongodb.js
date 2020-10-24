// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb');



const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();

// console.log(id);
// console.log(id.getTimestamp());

MongoClient.connect(connectionURL, { useNewUrlParser: true }, async (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);

    //1
       const data = await db.collection('resturants')
        .find( {$and: [
            {"borough":"Bronx"},
            { $or: [
                {"cuisine":"American "},
                {"cuisine":"Chinese dish"}


            ]

            }

        ] }).toArray();

        debugger;
    //2
    // const data = await db.collection('resturants')
    //     .findOne({})


    console.log(data);
   console.dir(db);
























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

    // db.collection('users').insertMany([
    //     {
    //         name:' Jen',
    //         age: 28
    //     },
    //     {
    //         name: 'Guntar',
    //         age:27
    //     }
    // ], (errpr, result)=> {
    //     if(error){
    //                 return console.log("Unable to insert user");
    //             }

    //             console.log(result.ops);
    // })


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


