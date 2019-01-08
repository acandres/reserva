var expect = chai.expect;


/*
// con beforeEach se instancia el objeto 1 sola vez y sirve para todos los test (se llama Hook )

describe("reservarHorario",function(){
    var restaurant;

    beforeEach(function(){
    restaurant = new  Restaurant(22, "Byron Hoxton", "Hamburguesa", "Londres", ["14:00", "16:00", "21:30"], "../img/hamburguesa3.jpg", [4, 9, 10, 10, 6]);   
})

*/


//NO OLVIDAR CREAR UN SET DE DATOS EN UN LISTADO PROPIO DEL TEST (NO DEPENDER DEL LISTADO DE listado.js)

describe ("reservarHorario",function(){
    it("reservar un horario", function(){
        var horaReserva="14:00";
        var restaurant = new  Restaurant(22, "Byron Hoxton", "Hamburguesa", "Londres", ["14:00", "16:00", "21:30"], "../img/hamburguesa3.jpg", [4, 9, 10, 10, 6]);
        restaurant.reservarHorario(horaReserva);
       // expect(restaurant.horarios).to.not.have(horaReserva);
        expect(restaurant.horarios).to.eql(["16:00", "21:30"])
    })
})

describe ("si el horario de reserva es incorrecto el arreglo no se modifica",function(){
        it("reservar un horario", function(){
            var horaReserva="15:00";
            var restaurant = new  Restaurant(22, "Byron Hoxton", "Hamburguesa", "Londres", ["14:00", "16:00", "21:30"], "../img/hamburguesa3.jpg", [4, 9, 10, 10, 6]);
            restaurant.reservarHorario(horaReserva);
           // expect(restaurant.horarios).to.not.have(horaReserva);   
            expect(restaurant.horarios).to.eql(["14:00","16:00", "21:30"])   
        })
   })

describe ("si el horario es vacio, no se pasa parametro ",function(){
    it("reservar un horario", function(){
        var horaReserva="15:00";
        var restaurant = new  Restaurant(22, "Byron Hoxton", "Hamburguesa", "Londres", ["14:00", "16:00", "21:30"], "../img/hamburguesa3.jpg", [4, 9, 10, 10, 6]);
        restaurant.reservarHorario();
       // expect(restaurant.horarios).to.not.have(horaReserva);
        expect(restaurant.horarios).to.eql(["14:00","16:00", "21:30"])
       })
   })

describe ("obtener puntuacion",function(){
    it("calcular correctamente la puntuacion (promedio) del restaurant", function(){
        var horaReserva="15:00";
        var restaurant = new  Restaurant(22, "Byron Hoxton", "Hamburguesa", "Londres", ["14:00", "16:00", "21:30"], "../img/hamburguesa3.jpg", [4, 9, 10, 10, 6]);
        var  puntuacion =  restaurant.obtenerPuntuacion();
        expect(puntuacion).to.equal(7.8);
       })
    })

describe ("testear funcion calificar",function(){
    it("teSTEAR LA FUNCION CALIFICAR ", function(){        
        var restaurant = new  Restaurant(22, "Byron Hoxton", "Hamburguesa", "Londres", ["14:00", "16:00", "21:30"], "../img/hamburguesa3.jpg", [4, 9, 10, 10, 6]);
        var calificacionAnterior=restaurant.calificaciones;
        console.log(calificacionAnterior);
        restaurant.calificar(9);
        console.log(restaurant.calificaciones);
       })
    })

describe ("buscarRestaurante",function(){


    it("Verifica que cada restaurant tenga rubro asignado", function(){        
        var listaRestaurant = listadoDeRestaurantes;
        var rubroVacio = false;
        for (var i = 0 ; i < 2 ; i++) {
            expect(listaRestaurant[i].rubro).to.be.a("string")
            expect(listaRestaurant[i].rubro.length).to.be.greaterThan(0) 
        }
      })

    it("devuelve el restaurant correcto si el  id es valido", function(){        
        var restaurant = new  Restaurant(22, "Byron Hoxton", "Hamburguesa", "Londres", ["14:00", "16:00", "21:30"], "../img/hamburguesa3.jpg", [4, 9, 10, 10, 6]);
      // var restaurant = listado.buscarRestaurante(22);
      expect(restaurant.id).to.equal(22);
      expect(restaurant.nombre).to.equal("Byron Hoxton");
       })

    it("Dado un Id que se paso como valor vacio, se busca en el listado de restaurant un restaurant que no existe.", function () {
        var restaurant= listado.buscarRestaurante("");
        expect(restaurant.id).to.not.eql("");
    })
    
    it("que si existe lo retorne", function () {
        var restaurant = listado.buscarRestaurante(1);
        expect(restaurant).to.include({ id: 1 });
    })

    })

    describe("obtenerRestaurantes()",function (){
        beforeEach(function () {
            listado = new Listado([
                new Restaurant(21, "Trattoria La Cenetta", "Pizza", "Berlín", ["12:00", "15:00", "17:30"], "../img/pizza4.jpg", [8, 4, 6, 2, 5, 7]),
                new Restaurant(22, "Byron Hoxton", "Hamburguesa", "Londres", ["14:00", "16:00", "21:30"], "../img/hamburguesa3.jpg", [4, 9, 10, 10, 6]),
                new Restaurant(23, "Chez Moi", "Ensalada", "París", ["11:00", "12:00", "14:30"], "../img/ensalada1.jpg", [8, 4, 5, 5, 5, 5]),
                new Restaurant(24, "Maison Kayser", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", [9, 5, 7, 6, 7]),
            ]);
        });
    
        it(" rubro, ciudad y horario existente me devuelve un restaurant", function(){
            var restObtenido = listado.obtenerRestaurantes("Pizza", "Berlín","12:00")
            //validar rubro
            console.log (restObtenido);
            expect(restObtenido[0].rubro).to.eql("Pizza")
            //validar ciudad
            expect(restObtenido[0].ubicacion).to.eql("Berlín")
            //valido el horario
            expect(restObtenido[0].horarios).to.eql(["12:00", "15:00","17:30"])
        })

        it("Dado un rubro, cuidad y horario igual a vacio no devuelve un restaurant", function(){
            var restObtenido = listado.obtenerRestaurantes(" ", " "," ");
            expect(restObtenido).to.eql([]);
            
        })
        it("Dado rubro que no existe no devuelve coincidencia", function(){
            var restObtenido = listado.obtenerRestaurantes(" ","Berlín","15:00");
            expect(restObtenido).to.eql([]);
            
        })

        it("Dado ciudad que no existe no devuelve coincidencia", function(){
            var restObtenido = listado.obtenerRestaurantes("Pizza","","15:00");
            expect(restObtenido).to.eql([]);
            
        })

        it("Dado horario que no existe no devuelve coincidencia", function(){
            var restObtenido = listado.obtenerRestaurantes("Pizza ","Berlín","");
            expect(restObtenido).to.eql([]);
            
        })

        it("Dado  rubro que no esta asociado al restaurant no devuelve nada", function(){
            var restObtenido = listado.obtenerRestaurantes("Pizza","Nueva York","21:00");
            expect(restObtenido).to.eql([]);
            
        })
    })

    describe("Funcinalidad Reservas", function() {
      
     var reserva1;
     var reserva2;
     beforeEach(function () {
         reserva1 = new Reserva (new Date(2018, 7, 24, 11, 00), 8, 350, "DES1");
         reserva2 = new Reserva (new Date(2018, 7, 27, 14, 100), 2, 150, "DES200");
         reservaCon2 = new Reserva (new Date(2018, 7, 27, 14, 100), 2, 150, "DES200");
         reservaCon5 = new Reserva (new Date(2018, 7, 27, 14, 100), 5, 150, "DES200");
         reservaCon7 = new Reserva (new Date(2018, 7, 27, 14, 100), 7, 150, "DES200");
         reservaCon9 = new Reserva (new Date(2018, 7, 27, 14, 100), 9, 150, "DES200");
     });

        describe('Test precioBase -> reserva', function() {
          it('Calcula correctamente el precio base', function() {
            expect(reserva1.precioBase()).to.equal(2800);
            expect(reserva2.precioBase()).to.equal(300);
          });
        });
   /// funcion descuentoPorCantidadDePersonas
        describe('Test descuentoPorCantidadDePersonas -> reserva', function() {
            it('Calcula correctamente el descuento si son 8 o mas personas', function() {
             expect(reservaCon9.descuentoPorCantidadDePersonas(150)).to.equal(1350);
            });
          });

          describe('Test descuentoPorCantidadDePersonas -> reserva', function() {
            it('Calcula correctamente el descuento si son entre 7 y 8  personas', function() {
             expect(reservaCon7.descuentoPorCantidadDePersonas(150)).to.equal(1050);
            });
          });

          describe('Test descuentoPorCantidadDePersonas -> reserva', function() {
            it('Calcula correctamente el descuento si son entre 4 y 6  personas', function() {
             expect(reservaCon5.descuentoPorCantidadDePersonas(150)).to.equal(950);
            });
          });


          describe('Test descuentoPorCantidadDePersonas -> reserva', function() {
            it('Calcula correctamente el descuento si menos de 4 personas', function() {
              expect(reservaCon2.descuentoPorCantidadDePersonas(150)).to.equal(0);
            });
          });


      
        describe('Test precioFinal -> reserva', function() {
          it('Calcula correctamente el precio final', function() {
            expect(reserva1.precioFinal()).to.equal(2450); //no es 2310
            expect(reserva2.precioFinal()).to.equal(100);
          });
        });
      });

      