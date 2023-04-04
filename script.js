

const getDogData = async() => {

  document.querySelector(".dog").style.display="none";
  document.querySelector(".left-loading").style.display="block";

  let link="";
  await fetch("https://dog.ceo/api/breeds/image/random")
  .then((response)=>{
    return response.json()
  }).then((data)=>{
    link = data;
  })

  if(link){
    
    document.querySelector(".left-img").innerHTML = `<img src=${link.message} />`
    document.querySelector(".left-loading").style.display="none";
    document.querySelector(".dog").style.display="block";
  }
  
};


const getCatData =async()=>{

  document.querySelector(".cat").style.display="none";
  document.querySelector(".right-loading").style.display="block";
  let catLink="";

  await fetch("https://cataas.com/cat/cute")
  .then((response)=>{
    catLink = response.url;
  })

  if(catLink){
   
    document.querySelector(".right-img").innerHTML = `<img src=${catLink} />`
    document.querySelector(".right-loading").style.display="none";
    document.querySelector(".cat").style.display="block";
  }

}