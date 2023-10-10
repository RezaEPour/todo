
const btn = document.querySelector("#save-btn")
const title = document.querySelector("#title")
const list = document.querySelector(".list")

const todo_list = []

function makeItem(value){

    const item = document.createElement("div");   
        item.classList.add("item")

        const checkbox = document.createElement("input")
        checkbox.setAttribute("type", "checkbox")

        const span = document.createElement("span")
        span.textContent = value
        
        list.appendChild(checkbox)

        list.appendChild(span)

        list.appendChild(item)


}
function syncStorage(title){

    todo_list.push(title)
    const next_list = JSON.stringify(todo_list)
    localStorage.setItem("my_list", next_list)


}
btn.addEventListener("click", () =>{
    const val = title.value
    

    if (val === ""){
    alert("you should write a title")

    }
    else{

       syncStorage(val)
        
        makeItem(val)
        title.value = ""
       
    }
})



const previous_list = JSON.parse(localStorage.getItem("my_list"))

console.log(previous_list)
for(let i=0; i < previous_list.length ; i++){
 const title = previous_list[i]

 makeItem(title)

}