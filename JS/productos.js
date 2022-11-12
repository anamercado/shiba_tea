var productos = [];
                                            /*Blends */
productos [0] = []
productos [0] ['Nombre'] = [" Té Chai Orgánico"]; 
productos [0] ['Tipo'] = ["Blend"]; 
productos [0] ['Foto'] = ["blendtea1.jpg"]; 
productos [0] ['Precio'] = 680; 
productos [0] ['Caracteristica'] = ["Ingredientes: Trozos de canela, pedacitos de jengibre, pimienta negra entera, clavo entero, hinojo, rodajas de cúrcuma, cardamomo entero, hojas de frambuesa, pétalos de rosa. Producto de cultivo ecológico."];

productos [1] = []
productos [1] ['Nombre'] = [" Té Honey Orgánico"]; 
productos [1] ['Tipo'] = ["Blend"]; 
productos [1] ['Foto'] = ["blendtea2.jpg"]; 
productos [1] ['Precio'] = 780; 
productos [1] ['Caracteristica'] = ["Hecho con el arbursto 'Honeybus' de Sudáfrica, la infusión tiene un sabor agradablemente dulce y aromático. Un té sin teína con gran sabor y aroma sorprendente."];

productos [2] = []
productos [2] ['Nombre'] = [" Té Exótico Orgánico"]; 
productos [2] ['Tipo'] = ["Blend"]; 
productos [2] ['Foto'] = ["blendtea3.jpg"]; 
productos [2] ['Precio'] = 990; 
productos [2] ['Caracteristica'] = ["Ingredientes: Astillas de canela, jengibre, pimienta negra, clavo, pimienta rosa, cardamomo, jengibre molido, cardamomo molido, canela molida, cúrcuma, pétalos de rosa, alcaravea."];

productos [3] = []
productos [3] ['Nombre'] = [" Té Floral Orgánico"]; 
productos [3] ['Tipo'] = ["Blend"]; 
productos [3] ['Foto'] = ["blendtea4.jpg"]; 
productos [3] ['Precio'] = 680; 
productos [3] ['Caracteristica'] = ["Ingredientes: Té verde, manzana, pimpollos de jazmín, pétalos de rosa, caléndula y esencia de jazmín."];

                                        /*BOX */

productos [4] = []
productos [4] ['Nombre'] = [" Natural Box"]; 
productos [4] ['Tipo'] = ["Box"]; 
productos [4] ['Foto'] = ["boxtea1.jpg"]; 
productos [4] ['Precio'] = 1100; 
productos [4] ['Caracteristica'] = ["Incluye 4 blends con base de té verde, lavanda, manzanilla, melisa, cedrón, tilo, menta, caléndula y pétalos de rosas."];

productos [5] = []
productos [5] ['Nombre'] = [" Peace Box"]; 
productos [5] ['Tipo'] = ["Box"]; 
productos [5] ['Foto'] = ["boxtea2.jpg"]; 
productos [5] ['Precio'] = 1150; 
productos [5] ['Caracteristica'] = ["Incluye 4 blends con base de té verde, hierbas, flores y frutas que invitan al relax."];

productos [6] = []
productos [6] ['Nombre'] = [" Love Box"]; 
productos [6] ['Tipo'] = ["Box"]; 
productos [6] ['Foto'] = ["boxtea3.jpg"]; 
productos [6] ['Precio'] = 1150; 
productos [6] ['Caracteristica'] = ["Incluye 4 blends con base de frutas, perfumada y rica en antioxidantes. Contiene lavanda, hibiscus, cedrón y menta."];

productos [7] = []
productos [7] ['Nombre'] = [" Sweet Box"]; 
productos [7] ['Tipo'] = ["Box"]; 
productos [7] ['Foto'] = ["boxtea4.jpg"]; 
productos [7] ['Precio'] = 1150; 
productos [7] ['Caracteristica'] = ["Incluye 4 blends con base de  té verde finamente molido, utilizado en la famosa ceremonia de té japonesa. Energizante y rico en antioxidantes. Aroma intenso a té verde con notas vegetales y dulces."];

                                    /*Essentials */

productos [8] = []
productos [8] ['Nombre'] = [" Earth"]; 
productos [8] ['Tipo'] = ["Essential"]; 
productos [8] ['Foto'] = ["caja1.jpg"]; 
productos [8] ['Precio'] = 1500; 
productos [8] ['Caracteristica'] = ["Té negro. Clásico blend inglés. Robusta mezcla de Assam y Darjeeling. Para disfrutar en cualquier momento del día."];

productos [9] = []
productos [9] ['Nombre'] = [" Aqua"]; 
productos [9] ['Tipo'] = ["Essential"]; 
productos [9] ['Foto'] = ["caja2.jpg"]; 
productos [9] ['Precio'] = 1500; 
productos [9] ['Caracteristica'] = ["Té negro con cardamomo, coriandro, enebro, canela en rama, jengibre, clavo de olor y anís verde."];

productos [10] = []
productos [10] ['Nombre'] = [" Fire"]; 
productos [10] ['Tipo'] = ["Essential"]; 
productos [10] ['Foto'] = ["caja3.jpg"]; 
productos [10] ['Precio'] = 1500; 
productos [10] ['Caracteristica'] = ["Té rojo combinado con una caprichosa mezcla de frutas silvestres. Contiene té rojo, frutilla, frambuesa, grosella y cereza."];

productos [11] = []
productos [11] ['Nombre'] = [" Forest"]; 
productos [11] ['Tipo'] = ["Essential"]; 
productos [11] ['Foto'] = ["caja4.jpg"]; 
productos [11] ['Precio'] = 1500; 
productos [11] ['Caracteristica'] = ["Té rojo, jengibre, naranja deshidratada, pétalos de rosa, enebro y pimpollos de jazmín. "];


/* 
<script src="./productos.js"> </script>

    <main>
        <script>
            'use strict';
*/
            /*for (let i=0; i < productos.length; i++) {
                document.write ('<article>');
                    document.write ('<figure>');
                        document.write ('<img src="img/' + productos[i]['Foto'] +'" alt="'+ productos[i]['Nombre'] +'" >');
                    document.write ('</figure>');
                document.write ('<h2>' + [i] + '' + productos[i]['Nombre'] + '</h2>');

                document.write ('<p>' + productos[i]['Caracteristica'] + '</p>');
                /*
                document.write ('<ul>');
                    document.write ('<li>Victorias: ' + autos[i]['Victorias'] + '</li>');
                    document.write ('<li>Conductores: ' + autos[i]['Conductor'] + '</li>');
                    document.write ('<li>Presentación: ' + autos[i]['Orden'] + '</li>');
                document.write ('</ul>');
                document.write ('</article>'); 
            }*/
        /*
        </script>
    </main>
    <section>

        <h2>Orden de presentación</h2>

        <script>
            'Use script'
            var presentacion = [];

            for (let x=1; x <= autos.length; x++) {
                for (let y = 0; y < autos.length; y++) {
                    if (x== autos[y]['Orden']) {
                        presentacion.push(autos[y]['Conductor']);
                    }
                }
            }
            document.write ('<ol>');
                for (let z=0; z < presentacion.length; z++) {
                    document.write ('<li>' + presentacion[z] + '</li>');
                }
            document.write ('</ol>');

        </script>
    </section>
    <section>
        <h2>Ganadores</h2>

        <script>
             'Use script'

             var ganadores = [];
             var victoriastotales = 0
             for (let x = 0; x < autos.length; x++) {
                victoriastotales= victoriastotales + autos[x]['Victorias'];
             }

             for (victoriastotales; victoriastotales >= 0 ;victoriastotales--) {
                for (let y = 0; y < autos.length; y++) {
                    if (victoriastotales== autos[y]['Victorias']) {
                        ganadores.push(autos[y]['Conductor']);
                    }                    
                }
             }
             
            document.write ('<ol>');
                for (let e=0; e < ganadores.length; e++) {
                    document.write ('<li>'+ ganadores[e] + '</li>');
                    }     
            document.write ('</ol>');
            
        </script> 


        ///productos///

        

    <script src="./JS/productos.js"> </script>
    <main>
        <script>
            'use strict';
            for (let i=0; i < productos.length; i++) {
                document.write ('<article>');
                    document.write ('<figure>');
                        document.write ('<img src="img/' + productos[i]['Foto'] +'" alt="'+ productos[i]['Nombre'] +'" >');
                    document.write ('</figure>');
                document.write ('<h2>' + [i] + '' + productos[i]['Nombre'] + '</h2>');

                document.write ('<p>' + productos[i]['Caracteristica'] + '</p>');
                /*
                document.write ('<ul>');
                    document.write ('<li>Victorias: ' + autos[i]['Victorias'] + '</li>');
                    document.write ('<li>Conductores: ' + autos[i]['Conductor'] + '</li>');
                    document.write ('<li>Presentación: ' + autos[i]['Orden'] + '</li>');
                document.write ('</ul>');
                document.write ('</article>');
            }
            </script>
      </main>
    </script> */

    /* 
    <script>
           
    for (let i=0; i < productos.length; i++) {
        document.write ('<article>');
            document.write ('<figure>');
                document.write ('<img src="img/' + productos[i]['Foto'] +'" alt="'+ productos[i]['Nombre'] +'" >');
            document.write ('</figure>');
        document.write ('<h2>' + [i] + '' + productos[i]['Nombre'] + '</h2>');

        document.write ('<p>' + productos[i]['Caracteristica'] + '</p>');

        document.write ('<ul>');
            document.write ('<li>Foto: ' + productos[i]['Foto'] + '</li>');
            document.write ('<li>Nombre: ' + productos[i]['Nombre'] + '</li>');
            document.write ('<li>Caracteristica: ' + productos[i]['Caracteristica'] + '</li>');
            document.write ('<li>Precio: ' + productos[i]['Precio'] + '</li>');
        document.write ('</ul>');
        document.write ('</article>'); 
    }

</script>*/