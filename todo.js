const addbutton=document.getElementById('add-button')
const todovalue=document.getElementById('todo-input')

const containeritem=document.getElementById('todo-item-container')

addbutton.addEventListener('click',()=>{
    const value=todovalue.value

    const li=document.createElement('li')
    li.innerText=value

  
    
    const delbutton=document.createElement('button')
    delbutton.innerText='X'
    delbutton.addEventListener('click',()=>{
        li.remove()
    })
    li.appendChild(delbutton)
      containeritem.appendChild(li)
    todovalue.value=''
    
})
