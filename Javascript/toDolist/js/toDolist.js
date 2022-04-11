function newItem(){
    let input=document.querySelector("#task");
    let list=document.querySelector("#list");
    let newList=document.createElement("li");
    let newSpan=document.createElement("span");
    
    if(input.value.trim().length>0){
        newList.innerHTML=input.value;
        newSpan.innerHTML="X";
        newSpan.onclick=function(event){
            event.target.parentElement.remove()
            remove(event.target.parentElement)
        }
        newSpan.classList.add("float-right")
        newList.appendChild(newSpan)
        list.append(newList)
        save(newList)
        successToast()
    }
    else
    {
        errorToast()
    }

}


list.onclick=function(event){
    if(event.target.classList.contains("checked")){
        event.target.classList.remove("checked")
    }
    else{
        event.target.classList.add("checked")
    }
}

let listAfter=[]

function save(item){
    listAfter.push(item.innerText.slice(0,item.innerText.length-1))
    localStorage.setItem("listAfter",JSON.stringify(listAfter))
}

function remove(item){
    listAfter=JSON.parse(localStorage.getItem("listAfter"))
    let li=listAfter.indexOf(item.innerHTML)
    listAfter.splice(li,1)
    localStorage.setItem("listAfter",JSON.stringify(listAfter))
}

function fillList(){
    listAfter=JSON.parse(localStorage.getItem("listAfter"))
    if(items?.length>0){
        for(let a=0;a<items.length;a++){
            let newLi=document.createElement("li")
            let newSpan=document.createElement("span")
            newLi.innerHTML="X"
            newSpan.onclick=function(event){
                event.target.parentElement.remove()
                remove(event.target.parentElement)
            }
            newSpan.classList.add("float-right")
            newLi.appendChild(newSpan)
            list.append(newLi)
        }

    }

}

fillList()

function successToast(){
    let Toast=document.querySelector("#successToast")
    let toastAdd=new bootstrap.Toast(Toast);
    toastAdd.show()
}

function errorToast(){
    let Toast=document.querySelector("#errorToast")
    let toastAdd= new bootstrap.Toast(Toast);
    toastAdd.show()
}














