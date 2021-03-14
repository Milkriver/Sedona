const myButton = document.querySelector('.appointment-search-button') 

myButton.addEventListener("click", function() {
     const modalViewList = document.querySelector(".modal-appointment").classList;
        
    if(modalViewList.contains("visually-hidden")) {
        modalViewList.remove("visually-hidden")
        modalViewList.add("animated")
    } else { 
        modalViewList.add("visually-hidden");
        modalViewList.remove("animated")
    }
})

document.querySelector(".modal-appointment").classList.add("visually-hidden")