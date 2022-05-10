function obtener(){ 
                   var boletos = document.getElementById("cantidad").value;
                   var categoria=document.getElementById("categoria").value;
if (boletos >= 1) {
                  switch (categoria) {
                        case "1": 
                          verFueraDeLaFuncion = boletos*40 ;
                          document.getElementById('apagar').innerHTML = "Total a Pagar: $ " +verFueraDeLaFuncion ;      
                          break;
                        case "2":
                          verFueraDeLaFuncion = boletos*100 ;
                          document.getElementById('apagar').innerHTML = "Total a Pagar: $ " +verFueraDeLaFuncion ;
                          break;
                        case "3":
                            verFueraDeLaFuncion = boletos*170 ;
                            document.getElementById('apagar').innerHTML = "Total a Pagar: $ " +verFueraDeLaFuncion ;
                       break;
                      }                    
 } else {


         swal({
          title: "Atención",
          text: "No ingresó cantidad de tickets, no se tomarán solicitudes sin este dato. Gracias!",
          icon: "warning",
          button: "Ok",
          });
  }
};
function vaciar(){
var limpiar="Total a Pagar: $ "

document.getElementById('apagar').innerHTML = limpiar ;
};
