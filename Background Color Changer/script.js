const button= document.querySelector(".button");


// we need to generate a random hex code value inorder to generate the color

let Color =()=>{
    let answer="#";
    let val = "0123456789ABCDEF"
    for(let i=0;i<6;i++){
        answer+= val[Math.floor(Math.random()*16)];
    }
    console.log(answer);
    return answer;

}

button.addEventListener("click",function(){
document.body.style.backgroundColor= Color();
})

