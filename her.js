let button = document.getElementById("random");
 let container = document.querySelector("body");
 let Container = document.querySelector(".container");
 let yesBtn = document.querySelector("#random1")
 let afterYes =document.querySelector(".afterYes")

  yesBtn.addEventListener("click",()=>{
   Container.classList.add("hidden") 
   afterYes.classList.remove("hidden")  
 })
 
 button.addEventListener('click', () => {
 const containerWidth = container.clientWidth;
 const containerHeight = container.clientHeight;
 const buttonWidth = button.offsetWidth;
 const buttonHeight = button.offsetHeight;

 const randomX = Math.random() * (containerWidth - buttonWidth);
 const randomY = Math.random() * (containerHeight - buttonHeight);

 button.style.left = `${randomX}px`;
 button.style.top = `${randomY}px`;
        });
