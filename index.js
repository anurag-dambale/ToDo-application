var todoArray = []

function addTodo() {
    var title = document.getElementById("title").value;
    todoArray.push(title);
    localStorage.setItem("my-item", todoArray.toString());
    document.getElementById("title").value= "";

if(title != "" && title != null){
    fetchTodo();
}
else{
    alert("please enter something!!")
}
}

function fetchTodo() {

    var str = localStorage.getItem("my-item");
    todoArray = str.split(",");
    var htmlString = `
        <tr>
        <td>SR.No</td>
        <td>Title</td>
        <td>Action</td>
        </tr>
      `
    var counter = 0;
    todoArray.forEach((ele) => {
        counter++;
        htmlString += `
    <tr>
        <td>${counter}</td>
        <td>${ele}</td>
        <td>
            <button class="btn btn-outline-primary" onclick="editTodo(${counter-1})" >Edit</button> 
            <button class="btn btn-outline-danger" onclick="deleteTodo(${counter-1})" >Delete</button>
        </td>
    </tr>
        `
    })
    document.getElementById("todo-table").innerHTML = htmlString;

}

function editTodo(index){
   var newValue = prompt("Do you want to edit", todoArray[index])
   if(newValue !="" && newValue != null){
    todoArray[index]=newValue;
    localStorage.setItem("my-item", todoArray.toString());
    fetchTodo()
   }
}

function deleteTodo(index){
    if(confirm("Are you sure want to DELETE?")){
        todoArray.splice(index,1)
        localStorage.setItem("my-item", todoArray.toString());
        fetchTodo()
    }
}

function reset(){
   if(confirm("Do you want to RESET?")){
    document.getElementById("todo-table").innerText="";
    localStorage.removeItem("my-item",todoArray.toString()); 
    todoArray=[];
   }
  
  }