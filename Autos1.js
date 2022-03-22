const autos = require('./autos')
//Esto fue explicado por Fabio para que visualizara que la función podía funcionar fuera del array de objetos concesionaria
/*buscarAuto = function(patente){ 
   //console.log('patente' + patente);
return autos.find(auto => auto.patente == patente) || null;
}*/
let concesionaria = {
    /* completar */
      autos: autos,
      buscarAuto : function(patente){ 
         //console.log('patente' + patente);
      return autos.find(auto => auto.patente == patente) || null;
      },
      venderAuto: function(patente){
         let auto  = this.buscarAuto(patente);
         if (!auto){
            return 'El auto no existe, no está registrado'; 
         }
         if (auto.vendido){
            return 'No se puede verder un carro que ya está vendido';  
         }
         auto.vendido =  true;
         return 'El auto fue vendido correctamente';
      },
      autosParaLaVenta: () => {
         return autos.filter(auto => auto.vendido == false);
      }      
}   
//console.log(buscarAuto());
console.log(concesionaria.autosParaLaVenta());