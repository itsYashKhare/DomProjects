var stus = document.querySelector("h5")

var btn = document.querySelector("#add")

var check = 0

btn.addEventListener("click",function(){
    if(check === 0){
        stus.innerHTML = "Friends"
        stus.style.color = "green"
        btn.innerHTML = "Remove Friend"
        check = 1
    }else{
        stus.innerHTML = "Stranger"
        stus.style.color = "red"
        btn.innerHTML = "Add Friend"
        check = 0
    }
    
})
