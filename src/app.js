require ('./db/connection.js');
const {Person} = require ('./models/person.js')

const app = async () =>{
    const person =new Person({name: 'George', email:'George@email.com',age: 28, likesPizza: true});
}
app();