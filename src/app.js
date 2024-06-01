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

//Boton ocuro

if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark')
}

//Direccionamiento del boton contratame 

document.getElementById('button-contratame').onclick = function() {
  window.location.href = 'https://api.whatsapp.com/send?phone=%2B573246100564&context=ARB6MsF9Tf5J6DKG7O-Y7ls-_8eFF-Z1gjHWUSa11M12yuJNavU6W6fEbaPLt88r4pmOMTJJn_B7hgsOQGXzjaPdrzSym1j-OO-vZ0wehapd7fvoEubSlxgQBOI1s5bvVC4SvORZjyeC7Ok7hoIp5ow&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwZXh0bgNhZW0CMTAAAR1WmgIo4nKl0CArEb1knmJ-ODOz4AuiG4q0yyyyNXeQVfWSNfyMk3PTNvA_aem_AaBZ8w2kQ3KUeptfQ3LtN-F2wWQeWHIXLuGjcXlE3Y9UGpGla_SPmKBoc1SdZhju6XMu3HMt0c38rPrgz5RsgU8j';
};

