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
         alert("NO INGRESO CANTIDAD DE BOLETOS, NO SE TOMARAN SOLICITUDES SIN ESTE DATO." );
        }
};
