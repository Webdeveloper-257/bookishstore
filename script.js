// selecting all required elements---
const filterItem = document.querySelector(".items")
const filterImg = document.querySelectorAll(".image")

window.onload = ()=>{ //once window loaded
    filterItem.onclick = (selectedItem)=>{ //when user click on filterItem div 
        if(selectedItem.target.classList.contains("items")){//if user click 
            filterItem.querySelector(".active").classList.remove("active");//remove active class
            selectedItem.target.classList.add("active"); //add that active class
            let filterName = selectedItem.target.getAttribute("data-name");//getting data name 
            filterImg.forEach((image)=>{
                let filterImages = image.getAttribute("data-name");//getting image data name 
                //if user select items data-name is equal to image data-name 
                if((filterImages == filterName) || filterName == "all"){
                    image.classList.remove("hide"); 
                    image.classList.add("show"); 
                }else{
                    image.classList.add("hide"); 
                    image.classList.remove("show"); 
                }
            })
        }
    }
}    