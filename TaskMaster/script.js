const TASKLISTBOX = document.querySelector(".taskList");
const TASK = document.querySelector(".task");
const ADDBUTTON = document.querySelector(".addButton");
const INPUTBAR = document.querySelector(".inputBar");

let isDoneChecker=0;
let taskId;
let template=`<div class="task" id="task#id#">

                <div class="status" id="s#id#">
                    <input type="checkbox" class="isdone" id="t#id#">
                    <p class="taskName #color#" id="para#id#">#content#</p>
                    <span class="editButton" id="editButton" ><img id="editButton" src="assets/edit.svg" alt=""></span>
                </div>               
                
                <div class="options">               
                    <span><img src="assets/delete.svg" alt="" id="d#id#" class="deleteButton"></span>              
                    <p class="f-color"id="p#id#">Priority :</p>
                    <select name="choice" id="c#id#" class="choice" >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>;

                    </select>

                </div>
                
            </div>`;

const TASKLISTARRAY = [
  { taskContent: "Go to gym ",
    isCompleted: false,
    priority: "Low",
    taskId: 1 },
  {
    taskContent: "Go to home ",
    isCompleted: false,
    priority: "Medium",
    taskId: 2,
  },
];

function objectCreator(taskId,taskContent,isCompleted,priority){
    return {
      taskContent: taskContent,
      isCompleted: isCompleted,
      priority: priority,
      taskId: taskId,
    };
}

function isCompletedTask(taskId){
    document
       .getElementById(`t${taskId}`)
       .nextElementSibling.classList.toggle("done");

}


function addingTaskDatabase(taskId,taskContent){
    return taskContent!="" ? TASKLISTARRAY.push(objectCreator(taskId,taskContent,false,"low")) : 'hello';


}
function objectFinder(taskID){
    for(let i=0;i<TASKLISTARRAY.length;i++){
        if(TASKLISTARRAY[i].taskId==taskID){
            TASKLISTARRAY.splice(i,1);
        }
    }

}



function render(){   
    let htmlString = "";
    TASKLISTARRAY.forEach(function(task){
        let complete = task.isCompleted ? 'taskName done' : "taskName";
        if(task.isCompleted){
            let str="";
            htmlString += template.replace(/#id#/g,task.taskId)
            .replace(`"t${task.taskId}"`, `"t${task.taskId}" checked`)            
            .replace("#content#",task.taskContent)
            .replace("#color#", `${task.priority}`);
            // .replace("#color#","low")
            
            // console.log("true");

        }
        else{
            htmlString += template.replace(/#id#/g,task.taskId)
            .replace("#content#",task.taskContent)
            .replace("#color#", `${task.priority}`);
        }


        
    });
    
    TASKLISTBOX.innerHTML = htmlString;

}

// function idFinder(event){

// }

document.body.addEventListener("click",function(event){


    if (event.target.id == "addButton") {
        taskId = TASKLISTARRAY.length==0 ? 1:TASKLISTARRAY[TASKLISTARRAY.length-1].taskId+1;
        let newTask = addingTaskDatabase(taskId, INPUTBAR.value);

        INPUTBAR.value = "";
        render();

    } else if (event.target.id == "editButton") {
        event.target.closest(".task").querySelector(".options").classList.toggle("option-visible");

    } else if (event.target.classList.contains("isdone")) {      
   
        event.target.nextElementSibling.classList.toggle("done");

        let getId = parseInt((event.target.id).substring(1,event.target.id.length));

        

        TASKLISTARRAY.forEach(function(task){
            if(task.taskId==getId){
                if(task.isCompleted){
                    task.isCompleted=false;
                }
                else{
                    task.isCompleted=true;
                }
            }
        })       
        

    }else if(event.target.classList.contains("deleteButton")){
    
        let getId = parseInt(event.target.id.replace("d", ""));
        objectFinder(getId);
        render()
        
    }else if(event.target.classList.contains("choice")){
        if(event.target.value=="Low"){
            let getId = parseInt(event.target.id.replace("c", ""));
            
            // objectFinder(getId);
            render()

        }else if(event.target.value=="Medium"){

        }else if(event.target.value=="High"){

        }
    }

});

function renderColor(){
    let l = document.querySelector(".taskList").children;
    l.forEach(function (task){

    });
}


render();
