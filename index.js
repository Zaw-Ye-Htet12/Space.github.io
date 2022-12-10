const barTag=document.querySelector(".bar")
const toggle_listTag=document.querySelector(".toggle_list")

barTag.addEventListener("click",()=>{
  toggle_listTag.classList.toggle("show")
})

// js for destination
let litag;

const ultag=document.querySelector(".destitab")
const slidetag=document.querySelector(".slidebar")
const tabs=["MOON","MARS","EUROPA","TITAN"]


for (let i=0;i<tabs.length;i++){
  litag=document.createElement("li")
  litag.classList.add("push")
  litag.classList.add("col-3")
  litag.classList.add("text-center")
  litag.append(tabs[i].toUpperCase())
  litag.id=i

 
  
  
  let url;
  litag.addEventListener("click",(event)=>{
    let clickedtabid=event.target.id
    
    // const clicktabofficialid=document.getElementById(clickedtabid)
    // const clicklitagoffsetwidth=clicktabofficialid.offsetWidth
    // slidetag.style.width=clicklitagoffsetwidth+"px"
    // const clicklitagoffsetleft=clicktabofficialid.offsetLeft
    // slidetag.style.transform=`translateX(${clicklitagoffsetleft}px)`
  
    
    if(clickedtabid==0){
      url="destination-moon.html"
      
   }
   if(clickedtabid==1){
     url="destination-mars.html"
     

   }
   if(clickedtabid==2){
     url="destination-europa.html"
   }
   if(clickedtabid==3){
     url="destination-titan.html"
   }

    window.location=url
   
   
   
  })
  
  ultag.append(litag)
  if(i==0){
    slidetag.style.width=litag.offsetWidth+"px"
  }
}








