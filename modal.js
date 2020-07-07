const modalOverlay = document.querySelector('.modal-overlay');
const recipes = document.querySelectorAll('.recipe')


for (let recipe of recipes){
    recipe.addEventListener("click", function (){   
        const imageId = recipe.querySelector("img").getAttribute("alt")
        const foodId = recipe.querySelector("p.food").textContent
        const authorId = recipe.querySelector("p.author").textContent


        modalOverlay.querySelector('img').src=`/Public/assets/${imageId}.png`
        modalOverlay.querySelector('p.foodModal').innerHTML = foodId
        modalOverlay.querySelector('p.authorModal').innerHTML = authorId
        modalOverlay.classList.add('active')
    })
}


    

document.querySelector('.close-modal').addEventListener("click",function(){
    modalOverlay.classList.remove('active')
})

