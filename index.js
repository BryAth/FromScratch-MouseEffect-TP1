// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)


const box1 = document.querySelector(".box1")
const box2 = document.querySelector(".box2")
const box3 = document.querySelector(".box3")

console.log(box1);
console.log(box2);
console.log(box3);

window.addEventListener("mousemove",(e) => {
   console.log(e.clientX);
   console.log(e.clientY);
   box1.style.left = e.clientX + "px"
   box1.style.top = e.clientY + "px"
   box1.style.transfrom = 'translate(-50%,-50%)'

   box2.style.left = e.clientX + "px"
   box2.style.top = e.clientY + "px"
   box2.style.transfrom = 'translate(-50%,-50%)'

   box3.style.left = e.clientX + "px"
   box3.style.top = e.clientY + "px"
   box3.style.transfrom = 'translate(-50%,-50%)'
})