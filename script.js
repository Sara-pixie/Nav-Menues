const listElement_1 = document.querySelectorAll(".listElement_1");
function activeLink1(){
    listElement_1.forEach((element)=>{
        element.classList.remove("active");
    });
    this.classList.add("active");
}
listElement_1.forEach((element)=>{
    element.addEventListener("click", activeLink1);
});
const listElement_2 = document.querySelectorAll(".listElement_2");
function activeLink2(){
    listElement_2.forEach((element)=>{
        element.classList.remove("active");
    });
    this.classList.add("active");
}
listElement_2.forEach((element)=>{
    element.addEventListener("click", activeLink2);
});