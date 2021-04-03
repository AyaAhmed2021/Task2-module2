const btn = document.getElementById("abtn")
const div = document.getElementById('main')
const ul =document.createElement("ul")



// fetch todos from my server 
async function fetchTodos() {
    const response = await fetch("http://localhost:4000/todos/") 
    const data = await response.json()
    
    data.forEach((item) => {
        const li =document.createElement("li")
        li.textContent = item
        // document.write("\n");
        // const br =document.createElement("br")
        
        ul.append("li") 

        // ul.append("br")   

    })
    
    div.append("ul")
} 


btn.addEventListener('click',function(){
    fetchTodos()
})
