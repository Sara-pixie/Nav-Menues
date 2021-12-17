const listElement = document.querySelectorAll(".listElement");
function activeLink(){
    listElement.forEach((element)=>{
        element.classList.remove("active");
    });
    this.classList.add("active");
}
listElement.forEach((element)=>{
    element.addEventListener("click", activeLink);
});