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