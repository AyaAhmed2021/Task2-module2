const addButton = document.getElementById("addbtn")
const div = document.getElementById("secondChild")
const ul = document.createElement("ul")
const mainDiv = document.querySelector(".main")
// const form = document.getElementById("firstChild")

// const arr =  [1, 2, 3, 4, 5]

// arr.forEach((ele, i) => console.log(i))


// let li;
let myData ;
// let removeButton= document.createElement("button") ;
let newli = "";
let userInput ;
let myTodos = [];

div.append(ul)

async function fetchTodos() {
    const response = await fetch("http://localhost:4000/todos");
    const data = await response.json()
    // myTodos = data.slice(0, 11)
    for (i = 0; i < 10; i++) {
        myData = data[i].title
        const li = document.createElement("li")
        li.innerText = myData
        let removeButton = document.createElement("button")
        li.append( removeButton)
        removeButton.innerText = "x"
        removeButton.style.color = "white"
        removeButton.style.backgroundColor = "blue"
        removeButton.style.padding = "3px 20px"
        removeButton.style.margin = "5px 10px"
        removeButton.style.border = "none"
        removeButton.style.borderRadius="5px"

        ul.append(li)
        myTodos.push(myData)

        
        removeButton.addEventListener('click', function () {
           ul.removeChild(li)
            // myTodos.forEach((item, i) => {
            //     remove(i)
            // })
        })
    }
}
fetchTodos()
console.log(myTodos)

function add(u) {
    newli = document.createElement("li")
    newli.innerText = u
    ul.append(newli)
    removeButton = document.createElement("button")
    newli.append(removeButton)
    removeButton.innerHTML = "x"
    removeButton.style.color = "white"
    removeButton.style.backgroundColor = "blue"
    removeButton.style.padding = "3px 20px"
    removeButton.style.margin = "5px 10px"
    removeButton.style.border = "none"
    removeButton.style.borderRadius="5px"
    myTodos.push(u)
    console.log(myTodos)

}

function remove(i) {
    myTodos.splice(i, 1)
    console.log(myTodos)

}


addButton.addEventListener('click', function () {
    userInput = document.querySelector("input").value
    add(userInput)
})



