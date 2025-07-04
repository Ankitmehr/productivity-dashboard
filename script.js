function openfeatures(){
    var allelems = document.querySelectorAll('.elem');
var fullelempage = document.querySelectorAll('.fullelem')
var fullelempageBackBtn = document.querySelectorAll('.fullelem .back')
allelems.forEach(function (elem) {
      elem.addEventListener('click', function () {                         //use to get the card details by id 
        fullelempage[elem.id].style.display = 'block';
    })
})
fullelempageBackBtn.forEach(function (back) {
    back.addEventListener('click', function () {
        fullelempage[back.id].style.display = 'none';
    })       
})

}
openfeatures()


var curentTask = []
if(localStorage.getItem('curentTask')){
    curentTask=JSON.parse(localStorage.getItem('curentTask'))
console.log('task is empty')
}
else{
}


function rendertask() {
            localStorage.setItem('curentTask',JSON.stringify(curentTask) )

    var allTask = document.querySelector('.alltask')
    var sum = ''
    curentTask.forEach(function (elem,idx) {
        sum = sum + `<div class="task">
                    <h5>${elem.task} <span class=${elem.imp}>imp</span></h5>
                    <button id=${idx}>Mark as Completed</button>
                </div>`
    })
    allTask.innerHTML = sum

}
rendertask()

let form = document.querySelector('.addtask form')
let taskinput = document.querySelector('.addtask form #task-input')
let taskDetailsInput = document.querySelector('.addtask form textarea')
let taskcheckbox = document.querySelector('.addtask form #check')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    
    curentTask.push({
        
        task: taskinput.value,
        details: taskDetailsInput.value,
        imp: taskcheckbox.checked,
  
    })
    taskinput.value=''
    taskDetailsInput.value=''
    taskcheckbox.checked=false
rendertask()
})

var markcombtn =document.querySelectorAll('.task button')
markcombtn.forEach(function(btn){
    btn.addEventListener('click',function(){

        curentTask.splice(btn.id)
    })
})