const data = POKEMON.pokemon;

window.organize = {
  sortedAz : (data) => {
    const sortedData = data
    data.sort(function(a, b){
      if(a.name < b.name){
        return -1;
      }
      if(a.name > b.name){
        return 1;
      }
    })
    return sortedData;
  },

  sortedZa : (data) => {
    const sortedData = data
    data.sort(function(a, b){
      if(b.name < a.name){
        return -1;
      }
      if(b.name > a.name){
        return 1;
      }
    })
    return sortedData;
  },

  sortedLower : (data) => {
    const sortedData = data
    data.sort(function(a, b){
      if(a.num < b.num){
        return -1;
      }
      if(a.num > b.num){
        return 1;
      }
    })
    return sortedData;
  },

  sortedHigher : (data) => {
    const sortedData = data
    data.sort(function(a, b){
      if(b.num < a.num){
        return -1;
      }
      if(b.num > a.num){
        return 1;
      }
    })
    return sortedData;
  },
}

console.log(organize.sortedAz(data))

const printId = (data) => {
  let id = [];
  for(i = 0; i < data.length; i++){
    id.push(data[i].id)
  };
  return id;
}

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
