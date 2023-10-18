const input = document.getElementById("numberofwords");
const container = document.querySelector(".container")

const generateword = (n)=>{
    const letter ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let text=""; 
    for (let i=0;i<n;++i){
       
     const random = (Math.random()*(letter.length-1)).toFixed(0);
    text  += letter(random)
    
 }
 return text;
}


const generatepara = () => {
    let numberofwords;
    numberofwords = (Number(input.value));

const para = document.createElement("p");
para.setAttribute("class","paras");
 let data="";
for(let i=0;i<numberofwords;++i){
    let randomNum = ((Math.random()*15).toFixed(0))
    data += generateword(randomNum);
    data += " ";
}

 
para.innerHTML= data.toLowerCase();

container.append(para);


};

