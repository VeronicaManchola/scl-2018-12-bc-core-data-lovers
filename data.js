const data = POKEMON.pokemon;

const printId = (data) => {
  let id = [];
  for(i = 0; i < data.length; i++){
    id.push(data[i].id)
  };
  return id;  }

const printNumber = (data) => {
  let number = [];
  for(i = 0; i < data.length; i++){
    number.push(data[i].num)
  };
  return number;
  }

const printName = (data) => {
  let name = [];
  for(i = 0; i < data.length; i++){
    name.push(data[i].name)
  };
  return name;
  }

const printImage = (data) => {
  let image = [];
  for(i = 0; i < data.length; i++){
    image.push(data[i].img)
  };
  return image;
  }

const printType = (data) => {
  let type = [];
  for(i = 0; i < data.length; i++){
    type.push(data[i].type)
  };
  return type;
  }

//Testeando merge de cambios de master a Andrea


//const data = POKEMON.pokemon;

//console.log(data)

//for (let i = 0; i < data.length; i++) {
  //const element = data [index];
  
//}

//const nombrePokemones = (data)=>
//{for (let i = 0; i < data.length; i++) {
 // const element = data [index];
//---------------------------------------------------------------------------------------------------

//PREGUNTAR A MARCIA POR QUE SOLO ME TRAE GRASS Y POISON Y 149 UNDEFINED (VER FOTOS CELULAR)
 //const data = POKEMON.pokemon;
 //for (let i = 0; i < data.length; i++) {
//console.log(data[i].type); 


 //}

 //const data = POKEMON.pokemon;
 //for (let i = 0; i < data.length; i++) {
 //console.log(data[i].egg);
 //}
 

    //const PokemonvsEggs = ["2 km", "5 km", "10 km", "Not in Eggs"];
    //const NotinEggs = PokemonvsEggs.filter(Eggs => Eggs == Not in Eggs);

 //}


  
 
