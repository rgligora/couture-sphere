window.addEventListener('DOMContentLoaded', () => {
    
    var categoryMenu = document.getElementById("category-menu");


    categoryMenu.addEventListener("click", function(event) {
    event.preventDefault();

    var category = event.target.getAttribute("data-category");

    if(category !== "exception"){
        const container = document.querySelector("#import-products");
        var productItems = container.querySelectorAll("div.product");
        
        if(category === "all"){
            document.querySelector('.category-text').textContent = "ALL CATEGORIES"
        }else{
            document.querySelector('.category-text').textContent = category;

        }
        productItems.forEach(function(item) {
            item.classList.add("hide");
            if (category === "all") {
            item.classList.remove("hide");
            } else if(item.getAttribute("data-category") === category) {
                item.classList.remove("hide");
            }
            
        });
    }
    
    });

});

