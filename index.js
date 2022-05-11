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
          icon: "info",
          button: "Ok",
          });
//          document.getElementById('cantidad').focus();
  }
};
function vaciar(){
var limpiar="Total a Pagar: $ "
document.getElementById('apagar').innerHTML = limpiar ;
//document.getElementById('sitiar').focus();
};

function seleccionar() {
  swal({
    title: "Mensaje Enviado",
    text: "Gracias por colaborar y formar parte de nuestra comunidad.",
    icon: "success",
    button: "Ok",
    
    });
}