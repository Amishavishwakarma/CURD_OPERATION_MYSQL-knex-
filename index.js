require("dotenv").config({path:"/home/amisha/Desktop/nodejs/OBJECTIONJS/.env"});

const connect = {
    client:process.env.CLINT,
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password:process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
}

const knex = require('knex')(connect);


// Creating Table in database

knex.schema.createTable('Student_Data', (table) => {
    table.increments('id')
    table.string('Name')
    table.string('EmailId')
    table.string('Password')
}).then(() => console.log("table created"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy();
    });

// Insert data inside the table

const data = [
    { Name: 'Amisha', EmailId: 'amisha123@gmail.com', password: "amisha123@4H" },
    { Name: 'Neha', EmailId: 'neha1@gmail.com', password: "neha3@4H" }
]

knex('Student_Data').insert(data).then(() => console.log("data inserted"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy();
    });

// selcting rows from table

knex.from('Student_Data').select("*")
    .then((rows) => {
        for (row of rows) {
            console.log(`${row['id']} ${row['Name']} ${row['EmailId']} ${row['Password']}`);
        }
    }).catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy();
    });

// Delete the element from the table

knex("Student_Data").where("name", "a")
    .del()
    .then(() => console.log("data deleted"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy();
    });
