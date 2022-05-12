console.log("javascript loaded");

/* ================ CURSOR ================
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
})


let links = Array.from(document.querySelectorAll("a"));
links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    cursor.classList.add("grow");
  });
  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("grow");
  });
});

*/

/*var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px), 0)`*/

/* ================ CURSOR ================ */
const parentContainer = document.getElementsByClassName('read-more-container');

for (let i = 0; i < parentContainer.length; i++) {
  parentContainer[i].addEventListener('click', event=>{
    const current = event.target;
    const isReadMoreBtn = current.className.includes('read-more-button');
    if(!isReadMoreBtn) return;
    const currentText = event.target.parentNode.querySelector('.read-more-text');
    currentText.classList.toggle('read-more-text--show');
    current.textContent = current.textContent.includes('Read More') ? "Read Less..." : "Read More...";
  })
}