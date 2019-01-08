
var Reserva = function(horario, cantidadDePersonas, precioPorPersona, codigoDeDescuento) {
    this.horario = horario;
    this.cantidadDePersonas = cantidadDePersonas;
    this.precioPorPersona = precioPorPersona;
    this.codigoDeDescuento = codigoDeDescuento;
  };
  
  Reserva.prototype.precioBase = function() {
       //verificar que sean mayores a 0  
       if(this.cantidadDePersonas<0 || this.precioPorPersona<0){
        return 0;
        }  
        
     return this.cantidadDePersonas * this.precioPorPersona;
  };
  
  // descuento por cantidad de personas
  Reserva.prototype.descuentoPorCantidadDePersonas = function(precioBase) {
    console.log('is NaN', isNaN(precioBase));
    console.log("precio base ",precioBase);
  //  this.cantidadDePersonas = 7;
   if (this.cantidadDePersonas >= 4 && this.cantidadDePersonas <= 6) {
      return (precioBase * 5 / 100);
    } else if (this.cantidadDePersonas >= 7 && this.cantidadDePersonas <= 8) {
        return (precioBase * 0.1);
      } else if (this.cantidadDePersonas > 8) {
          return (precioBase * 15 / 100);
        };
    return 0;
      };
 
  // descuento por codigo
  Reserva.prototype.descuentoCodigoDescuento = function(precioBase) {
    switch (this.codigoDeDescuento) {
      case 'DES15':
        return (precioBase * 0.15);
        break;
      case 'DES200':
        return 200;
        break;
      case 'DES1':
        return this.precioPorPersona;
        break;
      default: return 0;
    };
  };
  
  //adicional horario
  Reserva.prototype.adicionalHorario = function(precioBase) {
    var minutos = (this.horario.getHours() * 60) + this.horario.getMinutes();
    if ((minutos >= 780 && minutos < 840) || (minutos >= 1200 && minutos < 1260)){
      return (precioBase * 0.05);
    } else {
      return 0;
    };
  };
  
  //adicional dia de semana
  Reserva.prototype.adicionalDiaSemana = function(precioBase) {
    var diaSemana = this.horario.getUTCDay();
    if (diaSemana == 0 || diaSemana == 5 || diaSemana == 6) {
      return (precioBase * 10 / 100);
    } else {
      return 0;
    };
  };
  
  Reserva.prototype.precioFinal = function() {
    var precioBase = this.precioBase();
    var descuentos = this.descuentoPorCantidadDePersonas(precioBase) + this.descuentoCodigoDescuento(precioBase);
    var adicionales = this.adicionalHorario(precioBase) + this.adicionalDiaSemana(precioBase);
  
    return precioBase - descuentos + adicionales;
  };

  