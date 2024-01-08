const starsEl = document.querySelectorAll(".fa-star");
const emojisEl = document.querySelectorAll(".fa-regular")
const colorsArray = ["red","orange","blue","green","darkgreen"]
starsEl.forEach((starEl, index )=>  {
updateRating(0);

    starEl.addEventListener("click", () => {
        updateRating(index);
    });
});

function updateRating(index){
    starsEl.forEach ((starsEl, idx )=>{
        if(idx < index + 1){
         starsEl.classList.add("active");
        } else {
            starsEl.classList.remove("active");
        }
});


emojisEl.forEach((emojiEl)=>{
    emojiEl.style.transform = `translateX(-${index * 50}px)`;
 emojiEl.style.color = colorsArray[index]   

});
}