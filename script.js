var tasks = JSON.parse(localStorage.getItem("tasks")) || []

const taskinput = document.getElementById("taskinput")
const searchinput = document.getElementById("searchinput")
const addbtn = document.getElementById("addbtn")
const result1 = document.getElementById("result1")
const result2 = document.getElementById("result2")


    render()

function del(id)
{
    tasks = tasks.filter((item)=>{
        return item.id != id
    })
    render()
}

function render()
{
    result1.innerHTML = ""
    tasks.forEach((item)=>{
        result1.innerHTML += `<li class="list-group-item mb-2 rounded-1" ondblclick="del(${item.id})"> ${item.task} </li>`
    })
}


addbtn.addEventListener("click", ()=>
{
    addtask()
})

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && taskinput.value != "") {
        addtask();
    }
});
 

function addtask()
{
    tasks.push({ id: Date.now(),
        task: taskinput.value })
    taskinput.value = ""
    render()
}

searchinput.addEventListener("input", ()=>
{
    
    let temp = tasks.filter((item) => {
        return item.task.includes(searchinput.value)
    })

    result2.innerHTML = ""
    
    temp.forEach((item)=>{
        result2.innerHTML += `<li class="list-group-item mb-2 rounded-1"> ${item.task} </li>`
    })
})


window.addEventListener("unload", () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
});
