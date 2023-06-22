const personas = [
    { nombre: "Juan", edad: 25, ciudad: "Madrid" },
    { nombre: "María", edad: 30, ciudad: "Barcelona" },
    { nombre: "Pedro", edad: 35, ciudad: "Madrid" },
    { nombre: "Laura", edad: 28, ciudad: "Valencia" },
    { nombre: "Carlos", edad: 32, ciudad: "Barcelona" }
];
//obtener un array de nombres
//personas mayores de 30 años 
//encontrar la persona de Madrid (solo la primera) 
  //obtener un array de nombres  
  console.log(personas.map(persona => persona.nombre))
  //personas mayores de 30 años 
  console.log(personas.filter(persona => persona.edad > 30))
  //encontrar la persona de Madrid (solo la primera) 
  console.log(personas.find(persona =>persona.ciudad === "Madrid"))

  const empleados = [
    { id: 1, nombre: "Juan", salario: 3000 },
    { id: 2, nombre: "María", salario: 4000 },
    { id: 3, nombre: "Pedro", salario: 3500 },
    { id: 4, nombre: "Laura", salario: 2500 },
    { id: 5, nombre: "Carlos", salario: 5000 }
  ];


  //encontrar el empleado con el ID 3
  // Mostrar empleados con salarios superiores a 4000
  //incrementar el salario de todos los empleados en un 10%

  
    console.log(empleados.filter(empleado => empleado.salario > 4000))
    //incrementar el salario de todos los empleados en un 10%
    /* const empleadosConIncremento = empleados.map(empleado => (
        { ...empleado, salario: empleado.salario * 1.1 }
        )
    ); */

    const empleadosConIncremento = empleados.map(empleado =>{
        empleado.salario = empleado.salario * 1.1
        return empleado
    })

    console.log(empleadosConIncremento);
    //encontrar el empleado con el ID 3
    console.log(empleados.find(empleado => empleado.id == 3))


    
    const estudiantes = [
        { id: 1, nombre: "Juan", edad: 18, promedio: 85 },
        { id: 2, nombre: "María", edad: 20, promedio: 90 },
        { id: 3, nombre: "Pedro", edad: 19, promedio: 95 },
        { id: 4, nombre: "Laura", edad: 21, promedio: 88 },
        { id: 5, nombre: "Carlos", edad: 18, promedio: 92 }
      ];

    // encontrar el promedio de los estudiantes menores de 20 años
    
    // Generar un array de nombres de los estudiantes con promedio mayor o igual a 90 