global.window = global;
global.assert = require("chai").assert;
global.POKEMON = require("../src/data/pokemon/pokemon.json");
require('../src/data.js');

const pokemones = global.POKEMON.pokemon;

describe("data", () => {
  it("deberia ser un objeto", () => {
    global.assert.equal(typeof window.POKEMON.pokemon, "object");
  });
});

describe("filterData", () => {
  it("deberia ser una funcion", () => {
    global.assert.equal(typeof window.pokemonData.filterData, "function");
  });

  it(`deberia retornar como primer pokemon de clase Planta a Bulbasaur`, () => {
    global.assert.lengthOf(window.pokemonData.filterData(pokemones, "Grass"), 14);
  });

  it(`deberia retornar todos los pokemones sin importar el orden previamente seleccionado`, () => {
    global.assert.sameDeepOrderedMembers(window.pokemonData.filterData(pokemones, "0"), pokemones);
  });
});

describe("sortData", () => {
  it("deberia ser una funcion", () => {
    global.assert.equal(typeof window.pokemonData.sortData, "function");
  });

  it("deberia retornar el numero 001 como el primer numero ordenado de 1-151", () => {
    global.assert.deepStrictEqual(window.pokemonData.sortData(pokemones, "lower")[0].num, "001");
  });

  it("debería retornar el numero 001 antes de 002 con un orden lower", () => {
    global.assert.operator(window.pokemonData.sortData(pokemones, "lower")[0].num, "<" , pokemones[1].num);
  });

  it("deberia retornar el numero 151 como el primer numero ordenado de 151-1", () => {
    global.assert.deepStrictEqual(window.pokemonData.sortData(pokemones, "higher")[0].num, "151");
  });

  it("debería retornar el numero 151 antes de 150 con un orden higher", () => {
    global.assert.operator(window.pokemonData.sortData(pokemones, "higher")[0].num, ">", pokemones[1].num);
  });

  it("deberia retornar el nombre Abra como el primer nombre ordenado de a-z", () => {
    global.assert.deepStrictEqual(window.pokemonData.sortData(pokemones, "az")[0].name, "Abra");
  });

  it("debería retornar el nombre Abra antes de Aerodactil con un orden a-z", () => {
    global.assert.operator(window.pokemonData.sortData(pokemones, "az")[0].name, "<", pokemones[1].name);
  });

  it("deberia retornar el nombre Zubat como el primer nombre ordenado de z-a", () => {
    global.assert.deepStrictEqual(window.pokemonData.sortData(pokemones, "za")[0].name, "Zubat");
  })

  it("debería retornar el nombre Zubat antes de Zapdos con un orden z-a", () => {
    global.assert.operator(window.pokemonData.sortData(pokemones, "za")[0].name, ">", pokemones[1].name);
  });
});

describe("computeStats", () => {
  it("deberia ser una funcion", () => {
    global.assert.equal(typeof window.pokemonData.computeStats, "function");
  });

  it("debiera retornar el numero de los pokemones en la data", () => {
    global.assert.deepStrictEqual(window.pokemonData.computeStats(pokemones), 151);
  });
});



