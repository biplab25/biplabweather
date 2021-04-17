const input=document.querySelector("input");
const search=document.querySelector("button");
const show=document.querySelector(".show");
const h1temp=document.querySelector("#temp");
let inputValue = document.querySelector("#myInput");
const h1location=document.querySelector("#location");
const description=document.querySelector('#description');
const icon=document.querySelector('#image');
const error=document.querySelector("#error");
// 
/* Calling the function after search button click*/
search.addEventListener("click",async function(){
      await  getInformation(inputValue.value);
});

/* Start of getInformation of weather function */
async function getInformation(arg){
        try{
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${arg}&units=metric&appid=6a96533f811b24ebc00ff8c9d665e0b4`);
        const data=await response.json();
        console.log(data);
        h1temp.innerHTML=data.main.temp+'°C';
        h1location.innerHTML=data.name;
        description.innerHTML= data.weather[0].main;
        icon.src="https://openweathermap.org/img/w/"+data.weather[0].icon+".png";
        }
        catch(erro){
                alert("Whoops! No City Was Found");
        }
}
/* End of getInformation of weather function */

// var person=function(name){
//     return{
//         name:name
//     }
    
// }
// var sakib= person("sakib");
// console.log(sakib.name);