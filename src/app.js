//MENU DE VARIABLES
const menuButton = document.querySelector("#menu-button");
const menuItems = document.querySelector("#menu");
const menuButtonSpans = document.querySelectorAll("#menu-button span");
const links = document.querySelectorAll("#menu a");

//ABRE MENU
menuButton.addEventListener("click", ()=>{
  menuItems.classList.toggle("hidden");

  menuButtonSpans.forEach((span) => {
    span.classList.toggle("animado");
  });
});
links.forEach((link)=>{
  link.addEventListener("click", () => {
    menuItems.classList.add("hidden");
    menuButtonSpans.forEach((span)=>{
      span.classList.remove("animado")
    })
  })
});

//CERRAR MENU AL CAMBIAR TAMAÑO
window.onresize = function () {
  let w = window.outerWidth;
  if (w > 768) {
    menuItems.classList.add("hidden");
    menuButtonSpans.forEach((span)=>{
      span.classList.remove("animado")
    });
  }
};

//MODO OSCURO
const darkButton = document.querySelector("#darkButton");
darkButton.addEventListener('click', function() {
  // si se configuró previamente a través del almacenamiento local
  if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-theme', 'dark');
      } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('color-theme', 'light');
      }
      
  // si NO se configuró previamente a través del almacenamiento local
  } else {
      if (document.documentElement.classList.contains('dark')) {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('color-theme', 'light');
      } else {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-theme', 'dark');
      }
  }  
});

// variables seccion de trabajo

//en esta linea se seleciona el id "jobSection" y se 
//almacena en la variable "jobSection"
const jobSection = document.querySelector('#jobSection');
const articles = document.querySelectorAll('#jobSection article');

jobSection.addEventListener('click', (event) => {
  const id = event.target.dataset.id;

  if(id){
    articles.forEach((article)=>{
      article.classList.add('hidden');
    })
    const element = document.getElementById(id);
    element.classList.remove('hidden');
  }
})

//en esta linea se selecciona los botones dentro del 
//elemento id "jonSection" y se almacena en la variable
// "jobLinks"
const jobLinks = document.querySelectorAll('#jobSection button');
//en esta linea se selecciona el elemento con el id
//"link1" y se almacena en la variable "firstLink"
const firstLink = document.querySelector('#link1');
//en esta linea se inicia el bucle que recorre todos los
//elementos almacenados en "jobLinks"
jobLinks.forEach((link)=>{
  //en esta linea se agrega el evento click a cada boton 
  //dentro de "jobLinks"
  link.addEventListener('click', ()=>{
    //dentro de la función click se utiliza "firstLink"
    //que accede a la lista de id "link1" y remueve 
    //las tres clases que se definen en los parentesis
    firstLink.classList.remove('border-sky-500',
    'bg-white',
    'dark:bg-slate-700')
  })
})

