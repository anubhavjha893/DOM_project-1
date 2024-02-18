var h6 = document.querySelector("h6")
var friend = document.querySelector("#btn")
console.log(friend);
var flag = 0
friend.addEventListener("click",function(){
    if(flag == 0){
    h6.textContent = "Friends" 
    h6.style.color = "green"
    friend.textContent = "Remove"
    
    flag = 1
    }else{
        h6.textContent = "Strangers" 
        h6.style.color = "red"
        friend.innerHTML = "Add Friend"
    flag = 0
    }
    
    
    
    
    })