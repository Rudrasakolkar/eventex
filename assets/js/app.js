
const cl = console.log;

const box = document.getElementById("box");

box.style.width = "300px";
box.style.height = "300px";
box.style.backgroundColor = "red";



// let flag =true;
// let hideShow =()=>{
//     if(flag){
//         box.style.display="none";
//         flag=false;
//     }else{
//         box.style.display="block" ; 
//         flag=true;
//     }
// }




const hideShow = () => {
    let classes = box.classList;
    cl(classes);

    if (classes.contains("d-none")) {
        box.classList.remove("d-none");
    } else {
        box.classList.add("d-none");
    }
};

const btnInfo = document.getElementById("btnInfo");

btnInfo.addEventListener("click", hideShow);
