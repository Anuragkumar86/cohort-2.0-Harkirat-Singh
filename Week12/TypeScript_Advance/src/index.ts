// interface.......................................... 
interface User {
    firstname: string,
    lastname: string,
    age: number,
    email: string,
    password: string

}

// PICK...................................
type Updateuser = Pick<User, 'firstname' | 'email' | 'password'>;

// PARTIAL..................................
type optionalUpadte = Partial<Updateuser>

function displayUser(user: optionalUpadte){
    console.log(`Name: ${user.firstname} Email: ${user.email}, Password: ${user.password}`)
}

// displayUser({
//     firstname: "ANURAG",
//     password: "12345"
    
// })

// READONLY................................
const user1 : Readonly <User> = {
    firstname : "Anand",
    lastname: "Yadav",
    email: "anand@gmail.com",
    password: "12345",
    age: 23
}
// user1.age = 34;
// console.log(user1);


// MAP.......................................... 
interface Userr{
    name: string,
    age: number
}
const mapUser = new Map<string, Userr>()

mapUser.set("ansh", {name: "ANSH", age: 34});
mapUser.set("anu", {name: "ANURAG_YADAV", age: 24});
mapUser.set("utkarsh", {name: "UTKARSH", age: 14});

// console.log(mapUser.get("anu"));
// console.log(mapUser.get("utkarsh"));



// EXCLUDE.................................... 
type Events = 'click' | 'scroll' | "mousemove";

type ExcludeEven = Exclude<Events, 'scroll' | 'click'>;

function handleEvent(events: ExcludeEven){
    console.log(`Handling the event ${events}`)
}

// handleEvent('click')
// handleEvent('scroll')
handleEvent('mousemove')




// TYPE INFERENCE IN ZOD..................................