const btn = document.getElementById("abtn")
const div = document.getElementById('main')
const ul =document.createElement("ul")



// fetch todos from my server 
async function fetchTodos() {
    const response = await fetch("http://localhost:4000/todos/") 
    const data = await response.json()
    
} 


btn.addEventListener('click',function(){
    fetchTodos()
})
