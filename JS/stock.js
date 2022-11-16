let stockProductos = [
    {
        id: 1,
        nombre: "Te chai orgánico",
        tipo: "blend",
        cantidad: 1,
        desc: "Ingredientes: Trozos de canela, pedacitos de jengibre, pimienta negra entera, clavo entero,cúrcuma y cardamomo.",
        precio: 1200,
        intensidad: "Suave",
        img: 'img/blendtea1.jpg'
    },

    {
        id: 2, nombre: "Té Honey Orgánico",
        tipo: "blend",
        cantidad: 1,
        desc: "Hecho con el arbursto 'Honeybus' de Sudáfrica, la infusión tiene un sabor agradablemente dulce y aromático.",
        precio: 1100,
        intensidad: "Moderado",
        img: 'img/blendtea2.jpg'
    },

    {
        id: 3, nombre: " Té Exótico Orgánico",
        tipo: "blend",
        cantidad: 1,
        desc: "Ingredientes: Astillas de canela, jengibre, pimienta negra, clavo, pimienta rosa y cardamomo.",
        precio: 990,
        intensidad: "Moderado",
        img: 'img/blendtea3.jpg'
    },

    {
        id: 4, nombre: "Té Floral Orgánico",
        tipo: "blend",
        cantidad: 1,
        desc: "Ingredientes: Té verde, manzana, pimpollos de jazmín, pétalos de rosa, caléndula y esencia de jazmín.",
        precio: 680,
        intensidad: "Moderado",
        img: 'img/blendtea4.jpg'
    },

    {
        id: 5, nombre: "Té Floral Orgánico",
        tipo: "blend",
        cantidad: 1,
        desc: "Ingredientes: Té verde, manzana, pimpollos de jazmín, pétalos de rosa, caléndula y esencia de jazmín.",
        precio: 680,
        intensidad: "Moderado",
        img: 'img/blendtea5.jpg'
    },

    {
        id: 6, nombre: "Té Floral Orgánico",
        tipo: "blend",
        cantidad: 1,
        desc: "Ingredientes: Té verde, manzana, pimpollos de jazmín, pétalos de rosa, caléndula y esencia de jazmín.",
        precio: 680,
        intensidad: "Moderado",
        img: 'img/blendtea6.jpg'
    },

    {
        id: 7, nombre: "Té Floral Orgánico",
        tipo: "blend",
        cantidad: 1,
        desc: "Ingredientes: Té verde, manzana, pimpollos de jazmín, pétalos de rosa, caléndula y esencia de jazmín.",
        precio: 680,
        intensidad: "Moderado",
        img: 'img/blendtea7.jpg'
    },

    {
        id: 8, nombre: "Té Floral Orgánico",
        tipo: "blend",
        cantidad: 1,
        desc: "Ingredientes: Té verde, manzana, pimpollos de jazmín, pétalos de rosa, caléndula y esencia de jazmín.",
        precio: 680,
        intensidad: "Moderado",
        img: 'img/blendtea8.jpg'
    },



    /*BOX */
    {
        id: 9, nombre: "Natural Box",
        tipo: "box",
        cantidad: 1,
        desc: "Incluye 4 blends con base de té verde, lavanda, manzanilla, melisa, cedrón, tilo, menta, caléndula y pétalos de rosas.",
        precio: 1100,
        intensidad: "Fuerte",
        img: 'img/boxtea1.jpg'
    },

    {
        id: 10, nombre: "Peace Box",
        tipo: "box",
        cantidad: 1,
        desc: "Incluye 4 blends con base de té verde, hierbas, flores y frutas que invitan al relax.",
        precio: 1150,
        intensidad: "Fuerte",
        img: 'img/boxtea2.jpg'
    },

    {
        id: 11, nombre: "Love Box",
        tipo: "box",
        cantidad: 1,
        desc: "Incluye 4 blends con base de frutas, perfumada y rica en antioxidantes. Contiene lavanda, hibiscus, cedrón y menta.",
        precio: 1150,
        intensidad: "Suave",
        img: 'img/boxtea3.jpg'
    },

    {
        id: 12, nombre: "Sweet Box",
        tipo: "box",
        cantidad: 1,
        desc: "Incluye 4 blends con base de  té verde molido. Energizante y rico en antioxidantes.",
        precio: 1150,
        intensidad: "Moderado",
        img: 'img/boxtea4.jpg'
    },

    {
        id: 13, nombre: "Natural Box",
        tipo: "box",
        cantidad: 1,
        desc: "Incluye 4 blends con base de té verde, lavanda, manzanilla, melisa, cedrón, tilo, menta, caléndula y pétalos de rosas.",
        precio: 1100,
        intensidad: "Fuerte",
        img: 'img/boxtea5.jpg'
    },

    {
        id: 14, nombre: "Peace Box",
        tipo: "box",
        cantidad: 1,
        desc: "Incluye 4 blends con base de té verde, hierbas, flores y frutas que invitan al relax.",
        precio: 1150,
        intensidad: "Fuerte",
        img: 'img/boxtea6.jpg'
    },

    {
        id: 15, nombre: "Love Box",
        tipo: "box",
        cantidad: 1,
        desc: "Incluye 4 blends con base de frutas, perfumada y rica en antioxidantes. Contiene lavanda, hibiscus, cedrón y menta.",
        precio: 1150,
        intensidad: "Suave",
        img: 'img/boxtea7.jpg'
    },

    {
        id: 16, nombre: "Sweet Box",
        tipo: "box",
        cantidad: 1,
        desc: "Incluye 4 blends con base de  té verde  molido. Energizante y rico en antioxidantes.",
        precio: 1150,
        intensidad: "Moderado",
        img: 'img/boxtea8.jpg'
    },

    /*Essentials */

    {
        id: 17,
        nombre: "Earth",
        tipo: "essential",
        cantidad: 1,
        desc: "Té negro. Clásico blend inglés. Robusta mezcla de Assam y Darjeeling. Para disfrutar en cualquier momento del día.",
        precio: 1500,
        intensidad: "Moderado",
        img: 'img/caja1.jpg'
    },

    {
        id: 18,
        nombre: "Aqua",
        tipo: "essential",
        cantidad: 1,
        desc: "Té negro con cardamomo, coriandro, enebro, canela en rama, jengibre, clavo de olor y anís verde.",
        precio: 1500,
        intensidad: "Moderado",
        img: 'img/caja2.jpg'
    },

    {
        id: 19,
        nombre: "Fire",
        tipo: "essential",
        cantidad: 1,
        desc: "Té rojo combinado con una caprichosa mezcla de frutas silvestres. Contiene té rojo, frutilla, frambuesa, grosella y cereza.",
        precio: 1500,
        intensidad: "Moderado",
        img: 'img/caja3.jpg'
    },

    {
        id: 20,
        nombre: "Forest",
        tipo: "essential",
        cantidad: 1,
        desc: "Té rojo, jengibre, naranja deshidratada, pétalos de rosa, enebro y pimpollos de jazmín.",
        precio: 1500,
        intensidad: "Moderado",
        img: 'img/caja4.jpg'
    },

    {
        id: 21,
        nombre: "Earth",
        tipo: "essential",
        cantidad: 1,
        desc: "Té rojo, jengibre, naranja deshidratada, pétalos de rosa, enebro y pimpollos de jazmín.",
        precio: 1500,
        intensidad: "Moderado",
        img: 'img/caja5.jpg'
    },

    {
        id: 22,
        nombre: "Aqua",
        tipo: "essential",
        cantidad: 1,
        desc: "Té rojo, jengibre, naranja deshidratada, pétalos de rosa, enebro y pimpollos de jazmín.",
        precio: 1500,
        intensidad: "Moderado",
        img: 'img/caja6.jpg'
    },
    {
        id: 23,
        nombre: "Fire",
        tipo: "essential",
        cantidad: 1,
        desc: "Té rojo, jengibre, naranja deshidratada, pétalos de rosa, enebro y pimpollos de jazmín.",
        precio: 1500,
        intensidad: "Moderado",
        img: 'img/caja7.jpg'
    },

    {
        id: 24,
        nombre: "Forest",
        tipo: "essential",
        cantidad: 1,
        desc: "Té rojo, jengibre, naranja deshidratada, pétalos de rosa, enebro y pimpollos de jazmín.",
        precio: 1500,
        intensidad: "Moderado",
        img: 'img/caja8.jpg'
    },
]





