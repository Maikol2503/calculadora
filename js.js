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