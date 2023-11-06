let shuffllis=document.querySelectorAll(".shuffl li")
let imgs=Array.from(document.querySelectorAll(".images-container .box img"))
shuffllis.forEach((li)=>{
    li.addEventListener("click",removeactive)
    li.addEventListener("click",manageimgs)

})
function removeactive(){
    shuffllis.forEach((li)=>{
        li.classList.remove("active")
        this.classList.add("active")
    })
}
function manageimgs(){
    imgs.forEach((img)=>{img.style.display="none";})
    document.querySelectorAll(this.dataset.cat).forEach((el)=>{
        el.style.display="block"
    })
}
let section=document.querySelector(".prog-holder")
let spans=document.querySelectorAll(".prog span")
window.onscroll = function () {
    if (window.scrollY >= section.offsetTop-500) {
      console.log("Reached Section Three");
      spans.forEach((span) => {
        span.style.width = span.dataset.width;
      });
    }
  };
