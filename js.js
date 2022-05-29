
//animacion de la barra de menu
document.querySelector(".bars__menu").addEventListener("click", animateBars );
let line1__bars = document.querySelector(".line1__bars-menu");
let line2__bars = document.querySelector(".line2__bars-menu");
let line3__bars = document.querySelector(".line3__bars-menu");
function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu")
    line2__bars.classList.toggle("activeline2__bars-menu")
    line3__bars.classList.toggle("activeline3__bars-menu")
}

//menu visible
const botonBar = document.querySelector(".bars__menu")
const item = document.querySelector(".menu-menu")
botonBar.addEventListener("click" , () => {
    item.classList.toggle("visible")
})


window.addEventListener("load" , () =>{

  const display = document.querySelector(".calculadora-display");
  const patBoton = document.getElementsByClassName("pat-boton");

  const patBotonArray = Array.from(patBoton);
  patBotonArray.forEach( (botones) => {

    botones.addEventListener("click" , ()=> {

        calculadora(botones , display)

    })
      
  })
});


   function calculadora(botones , display){

            switch (botones.innerHTML) {
                case "Borrar":
                    borrar(display);
                    break;
            
                case "=":
                calcular(display);
                    break;

                default:
                    actualizar(display , botones);
                break;
            }

   }
  
  function calcular(display){
       
     display.innerHTML = eval(display.innerHTML)
  }


  function actualizar(display , botones ){
        if(display.innerHTML == 0){
            display.innerHTML = "";  

        }

         display.innerHTML += botones.innerHTML;

  }

  function borrar(display){
      display.innerHTML = 0

  }
