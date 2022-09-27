const span = document.querySelector("#span");

const par = document.querySelector("p");

const dice = document.querySelector(".dice");




const  myAdvice = async ()=>{

    const url ="https://api.adviceslip.com/advice";

    try {
        const response =await fetch(url);

if(!response.ok){
    hata()
    throw new Error("ikaz")
    
}

const data = await response.json();

dice.addEventListener("click", ()=>{
    span.innerHTML =`ADVICE # ${data.slip.id}`
    par.innerHTML = `${data.slip.advice}`
    myAdvice();

})

    
    } catch (error) {console.log(error)
        
    }


}

myAdvice();

const hata = ()=>{
    document.querySelector(".container").innerHTML = `hatali giris`
};

