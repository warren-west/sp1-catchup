// Totally unrelated: setInterval()


let myNumber = 1

export function renderMyNumber() {

    const intervalCounterId = setInterval(() => {
        console.log(myNumber)
        myNumber++


        if (myNumber == 10) {
            clearInterval(intervalCounterId)
        }
    }, 1000);

    console.log(intervalCounterId)
}

export const myObject = {property: "value"}
export let myArray = [1, 2, 3]