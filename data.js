window.pokemonData = {
  sortData: (data, selectedOrder) => {
    if (selectedOrder === "0" || selectedOrder === "lower") {
      const sortedData = data;
      data.sort(function (a, b) {
        if (a.num < b.num) {
          return -1;
        }
        if (a.num > b.num) {
          return 1;
        }
      })
      return sortedData;
    } else if (selectedOrder === "higher") {
      const sortedData = data;
      data.sort(function (a, b) {
        if (b.num < a.num) {
          return -1;
        }
        if (b.num > a.num) {
          return 1;
        }
      })
      return sortedData;
    } else if (selectedOrder === "az") {
      const sortedData = data;
      data.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
      })
      return sortedData;
    } else if (selectedOrder === "za") {
      const sortedData = data;
      data.sort(function (a, b) {
        if (b.name < a.name) {
          return -1;
        }
        if (b.name > a.name) {
          return 1;
        }
      })
      return sortedData;
    }
  },

  filterData: (data, selectedType) => {
    if (selectedType === "0") {
      return data;
    }
    const filteredData = data.filter(element => {
      return element.type[0] === selectedType || element.type[1] === selectedType;
    })
    return filteredData;
  },

  computeStats: (data) => {
    return data.length;
  }
}