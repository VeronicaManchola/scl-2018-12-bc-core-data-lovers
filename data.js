const data = POKEMON.pokemon;



function sortedAz(data){ 
  const sortedData = data;
  data.sort(function(a, b){
    if(a.name < b.name){
      return -1;
    }
    if(a.name > b.name){
      return 1;
    }
  })
  return sortedData;
};

function sortedZa(data){
  const sortedData = data;
  data.sort(function(a, b){
    if(b.name < a.name){
      return -1;
    }
    if(b.name > a.name){
      return 1;
    }
  })
  return sortedData;
};

function sortedLower(data){
  const sortedData = data;
  data.sort(function(a, b){
    if(a.num < b.num){
      return -1;
    }
    if(a.num > b.num){
      return 1;
    }
  })
  return sortedData;
};

function sortedHigher(data){
  const sortedData = data;
  data.sort(function(a, b){
    if(b.num < a.num){
      return -1;
    }
    if(b.num > a.num){
      return 1;
    }
  })
  return sortedData;
};


const printId = (newData) => {
  let id = [];
  for(i = 0; i < newData.length; i++){
    id.push(newData[i].id)
  };
  return id;
}

const printNumber = (newData) => {
  let number = [];
  for(i = 0; i < newData.length; i++){
    number.push(newData[i].num)
  };
  return number;
}

const printName = (newData) => {
  let name = [];
  for(i = 0; i < newData.length; i++){
    name.push(newData[i].name)
  };
  return name;
}

const printImage = (newData) => {
  let image = [];
  for(i = 0; i < newData.length; i++){
    image.push(newData[i].img)
  };
  return image;
}

const printType = (newData) => {
  let type = [];
  for(i = 0; i < newData.length; i++){
    type.push(newData[i].type)
  };
  return type;
}