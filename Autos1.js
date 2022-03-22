const autos = require('./autos')
let concesionaria = {
    /* completar */
      autos: autos,
      buscarAuto : function(patente){
      return autos.find(auto => auto[patente] == patente) || null;
      },
      /*venderAuto: function(patente){
      for (let i = 0; i < autos.length; i++){
         let auto  = this.buscarAuto(patente);
         if (!auto){
            return 'El auto no existe, no está registrado'; 
         }
         if (auto.vendido){
            return 'No se puede verder un carro que ya está vendido';  
         }
         auto.vendido =  true;
         return 'El auto fue vendido correctamente';
         }
      }*/   
}
console.log(concesionaria.buscarAuto("A123"));