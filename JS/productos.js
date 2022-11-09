var productos = [];
                                            /*Blends */
productos [0] = []
productos [0] ['Nombre'] = [" Té Chai Orgánico"]; 
productos [0] ['Tipo'] = ["Blend"]; 
productos [0] ['Foto'] = [""]; 
productos [0] ['Precio'] = 680; 
productos [0] ['Caracteristica'] = ["."];

productos [1] = []
productos [1] ['Nombre'] = [" Té Honey Orgánico"]; 
productos [1] ['Tipo'] = ["Blend"]; 
productos [1] ['Foto'] = [""]; 
productos [1] ['Precio'] = 780; 
productos [1] ['Caracteristica'] = ["."];

productos [2] = []
productos [2] ['Nombre'] = [" Té Exótico Orgánico"]; 
productos [2] ['Tipo'] = ["Blend"]; 
productos [2] ['Foto'] = [""]; 
productos [2] ['Precio'] = 990; 
productos [2] ['Caracteristica'] = ["."];

productos [3] = []
productos [3] ['Nombre'] = [" Té Floral Orgánico"]; 
productos [3] ['Tipo'] = ["Blend"]; 
productos [3] ['Foto'] = [""]; 
productos [3] ['Precio'] = 680; 
productos [3] ['Caracteristica'] = ["."];

                                        /*BOX */

productos [4] = []
productos [4] ['Nombre'] = [" Natural Box"]; 
productos [4] ['Tipo'] = ["Box"]; 
productos [4] ['Foto'] = [""]; 
productos [4] ['Precio'] = 1100; 
productos [4] ['Caracteristica'] = ["."];

productos [5] = []
productos [5] ['Nombre'] = [" Peace Box"]; 
productos [5] ['Tipo'] = ["Box"]; 
productos [5] ['Foto'] = [""]; 
productos [5] ['Precio'] = 1150; 
productos [5] ['Caracteristica'] = ["."];

productos [6] = []
productos [6] ['Nombre'] = [" Love Box"]; 
productos [6] ['Tipo'] = ["Box"]; 
productos [6] ['Foto'] = [""]; 
productos [6] ['Precio'] = 1150; 
productos [6] ['Caracteristica'] = ["."];

productos [7] = []
productos [7] ['Nombre'] = [" Sweet Box"]; 
productos [7] ['Tipo'] = ["Box"]; 
productos [7] ['Foto'] = [""]; 
productos [7] ['Precio'] = 1150; 
productos [7] ['Caracteristica'] = ["."];

                                    /*Essentials */

productos [8] = []
productos [8] ['Nombre'] = [" Earth"]; 
productos [8] ['Tipo'] = ["Essential"]; 
productos [8] ['Foto'] = [""]; 
productos [8] ['Precio'] = 1500; 
productos [8] ['Caracteristica'] = ["."];

productos [9] = []
productos [9] ['Nombre'] = [" Aqua"]; 
productos [9] ['Tipo'] = ["Essential"]; 
productos [9] ['Foto'] = [""]; 
productos [9] ['Precio'] = 1500; 
productos [9] ['Caracteristica'] = ["."];

productos [10] = []
productos [10] ['Nombre'] = [" Fire"]; 
productos [10] ['Tipo'] = ["Essential"]; 
productos [10] ['Foto'] = [""]; 
productos [10] ['Precio'] = 1500; 
productos [10] ['Caracteristica'] = ["."];

productos [11] = []
productos [11] ['Nombre'] = [" Forest"]; 
productos [11] ['Tipo'] = ["Essential"]; 
productos [11] ['Foto'] = [""]; 
productos [11] ['Precio'] = 1500; 
productos [11] ['Caracteristica'] = ["."];


/* 
<script src="./productos.js"> </script>

    <main>
        <script>
            'use strict';
*/
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
                document.write ('</article>'); */
            }
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