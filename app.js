// let btn=document.querySelector("button");
// btn.addEventListener("click",function(){
//     console.log(this);
// })
let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");
btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;
    ul.appendChild(item);

    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("del");
    item.appendChild(delbtn);
    
    inp.value="";
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName="BUTTON"){
        let listitem=event.target.parentElement;
        listitem.remove();
    }

})


// let btndel=document.querySelectorAll(".del");
//     for(delbtn of btndel){
//         delbtn.addEventListener("click",function(){
//             let pnt=this.parentElement;
//             pnt.remove();
//         });
//     }