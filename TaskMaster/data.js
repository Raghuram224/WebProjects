

// // function dataBase(content) {
// //   let id = !TASKLISTARRAY.length
// //     ? 1
// //     : TASKLISTARRAY[TASKLISTARRAY.length - 1].taskId + 1;
// //   let obj = {
// //     taskContent: content,
// //     isCompleted: false,
// //     priority: "low",
// //     taskId: id,
// //   };
// //   TASKLISTARRAY.push(obj);
// //   return obj;
// // }
// // function isCompletedDatabase(id) {
// //   for (let task in TASKLISTARRAY) {
// //     if (task.taskId == id) {
// //       task.isCompleted = true;
// //     }
// //   }
// // }

// const TASKLISTBOX = document.querySelector(".taskList");
// const TASK = document.querySelector(".task");
// const ADDBUTTON = document.querySelector(".addButton");
// const INPUTBAR = document.querySelector(".inputBar");
// const SECTION = document.querySelector(".section1");
// let isDoneChecker=0;
// let taskId=0;
// let template=`<div class="task" id="task#id#">

//                 <div class="status" id="s#id#">
//                     <input type="checkbox" class="isdone" id="t#id#">
//                     <p class="taskName" id="para#id#">#content#</p>
//                     <span class="editButton" id="editButton" ><img id="editButton" src="assets/edit.svg" alt=""></span>
//                 </div>               
                
//                 <div class="options">               
//                     <span  ><img src="assets/delete.svg" alt="" id="d#id#" class="deleteButton"></span>              
//                     <p id="p#id#">Priority :</p>
//                     <select name="choice" id="c#id#">
//                         <option value="Low">Low</option>
//                         <option value="Medium">Medium</option>
//                         <option value="High">High</option>;

//                     </select>

//                 </div>
                
//             </div>`;

// const TASKLISTARRAY = [
//   { taskContent: "Go to gym ",
//     isCompleted: false,
//     priority: "low",
//     taskId: 1 },
//   {
//     taskContent: "Go to home ",
//     isCompleted: false,
//     priority: "medium",
//     taskId: 2,
//   },
// ];

// function objectCreator(taskId,taskContent,isCompleted,priority){
//     return {
//       taskContent: taskContent,
//       isCompleted: isCompleted,
//       priority: priority,
//       taskId: taskId,
//     };
// }

// function isCompletedTask(taskId){
//     document
//        .getElementById(`t${taskId}`)
//        .nextElementSibling.classList.toggle("done");

// }


// function addingTaskDatabase(taskId,taskContent){
//     return taskContent!="" ? TASKLISTARRAY.push(objectCreator(taskId,taskContent,false,"low")) : 'hello';


// }
// function objectFinder(taskId){
//     for(let i=0;i<TASKLISTARRAY.length;i++){
//         if(TASKLISTARRAY[i].taskId==taskId){
//             TASKLISTARRAY.splice(i,1);
//         }
//     }

// }


// function render(){   
//     let htmlString = "";
//     TASKLISTARRAY.forEach(function(task){
//         let complete = task.isCompleted ? 'taskName done' : "taskName";
//         htmlString += template.replace(/#id#/g,task.taskId)
//            .replace("#content#",task.taskContent)
//            .replace("taskName",complete);

//         //    document.getElementsByClassName(".taskName")[indx].classList.add(complete)
//     });
//     TASKLISTBOX.innerHTML = htmlString;

// }


// document.body.addEventListener("click",function(event){
//     console.log(event.target.id);
//     if (event.target.id == "addButton") {
//         taskId ++;
//         let newTask = addingTaskDatabase(taskId, INPUTBAR.value);

//         INPUTBAR.value = "";
//         render();

//     } else if (event.target.id == "editButton") {
//         event.target.closest(".task").querySelector(".options").classList.toggle("option-visible");

//     } else if (event.target.classList.contains("isdone")) {      
//         // console.log(event.target.nextElementSibling);  
//         event.target.nextElementSibling.classList.toggle("done");

//         let getId = parseInt(event.target.id.replace("t", ""));
//         // console.log("t"+getId);
//         // document.getElementById(`t${getId}`).nextElementSibling.classList.toggle("done");

//         if(TASKLISTARRAY[getId - 1].isCompleted != true){
//             TASKLISTARRAY[getId - 1].isCompleted = true;
//         }else{
//             TASKLISTARRAY[getId - 1].isCompleted = false;
//         }       
              

//     }else if(event.target.classList.contains("deleteButton")){
    
//         let getId = parseInt(event.target.id.replace("d", ""));
//         objectFinder(getId);
//         render()
        
//     }

// });


// render();

