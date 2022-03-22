const autos = require('./autos')
let concesionaria = {
    /* completar */
      autos: autos,
      buscarAuto : function(patente, valor){
      return autos.find(auto => auto[patente] == valor) || null;
      },   
      //buscarAutoPatente: function(patente){
      //return this.buscarAuto('patente', patente);
      //},
      venderAuto: function(patente){
      let auto  = this.buscarAuto(patente);
      if (!auto){
      return 'El auto no existe, no está registrado'; 
      }
      if (auto.vendido){
      return 'No se puede verder un carro que ya está vendido';  
      }
      auto.vendido = true;
      return 'El auto fue vendido correctamente';
   },
      autosParaLaVenta: function(vendido){
      let lista = this.autos.filter(function(vendido){
         return autos.vendido = false;
      });  
   }
}
console.log(autosParaLaVenta);