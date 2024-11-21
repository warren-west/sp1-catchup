import { renderMyNumber, myObject } from "./intervals.js"
import { getUserDataAsync } from './usersApiHelper.js'

// DOM Elements
const userFullnameEl = document.getElementById("user-fullname")
const userEmailEl = document.getElementById("user-email")
const userPictureEl = document.getElementById("user-picture")




// Functions
async function getUserData() {
    const results = await getUserDataAsync()

    // render user data into DOM elements:
    userFullnameEl.innerText = `${results[0].name.title} ${results[0].name.first} ${results[0].name.last}`
    userEmailEl.innerText = `${results[0].email}`
    userPictureEl.src = `${results[0].picture.large}`
}

getUserData()





// Date stuff:
const myObj = {
    firstName: "Warren",
    age: 32,
    isMarried: true,
}

let myCurrentDate = new Date() // an instance of the Date class

// let myCustomDate = new Date(1992, 0, 5, 0, 0, 0, 0)

// Logs:
// console.log("Hello world")
// console.log(42)
// console.log(false)
// console.log(myObj)
// console.log(myFirstDate.getFullYear())
// console.log(myFirstDate.getHours())

console.log(myCurrentDate)

myCurrentDate.setMinutes(myCurrentDate.getMinutes() + 10)

console.log(myCurrentDate)



// import / use the module exported from intervals.js:
// renderMyNumber()

function printMyObject() {
    console.log(myObject)
}

// printMyObject()