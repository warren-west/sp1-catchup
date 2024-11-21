export async function getUserDataAsync() {
    // ES7 Async & Await
    console.log("getUserDataAsync fired")

    const response = await fetch("https://randomuser.me/api/")
    const json = await response.json()

    console.log(json)

    return json.results
}

// ES6 Promises
function getUserDataPromise() {
    fetch("https://randomuser.me/api/")
    .then(resp => resp.json())
    .then(json => {
        console.log(json)
    })
    .catch(error => {
        console.log(error)
    })
}

// JQuery
function getUsersJQuery() {
    $.ajax({
        url: "https://randomuser.me/api/",
        response: () => {},
        error: () => {}
    })
}