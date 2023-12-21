var form = document.getElementById('addForm');

var taskList = document.getElementById('items');

form.addEventListener('submit',(e)=>{
    e.preventDefault(); 
 // console.log(e.target.children[0].value);

    var task = e.target.children[0].value

    var li = document.createElement('li')
    li.setAttribute('class', 'list-group-item');
    li.innerText=task;
    var btn = document.createElement('button')
    btn.setAttribute('class','btn list-btn btn-sm float-right delete')
    btn.innerText='X'
    li.append(btn);
    // taskList.append(li);
    taskList.prepend(li);
    console.log(btn);
    console.log(li);
})


// Delete task

    taskList.addEventListener('click',(e)=>{

        var dlt=e.target;
        
        if(dlt.classList.contains('delete')){
            dlt.parentElement.remove();
            
        }
        
    })

    // Search task

    const filter=document.getElementById('filter');
    filter.addEventListener('keyup',(e)=>{
        var Search=e.target.value;
        var tasks = taskList.children;

        for (let task of tasks){
            if(task.innerText.includes(Search)){
                task.style.display="block";
            }

            else{
                task.style.display='none';
            }

        }
        // console.log(taskList.children);

    })

    // Theme

    const theme=document.getElementById('theme');
    const body =document.getElementsByTagName('body')[0];

    theme.addEventListener('click',(e)=>{
        themeColor = e.target.getAttribute('id');
        body.setAttribute('class',themeColor);

        for(let color of theme.children){
            color.setAttribute('class','dropdown-item');
        }

        // adding active class
       
        e.target.classList.add('active');

    })
    






