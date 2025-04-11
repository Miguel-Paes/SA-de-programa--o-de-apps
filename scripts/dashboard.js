const map = document.getElementById("mapa")
const mapImg = document.getElementById("map-image")

const showMap = () => {
  map.classList.toggle("hidden")
  mapImg.classList.add("hidden")
  console.log(map, mapImg)
};

const showMapImage = () => {
  mapImg.classList.toggle("hidden")
}

//pontos da rotas

const points = [
  {
    id: 1,
    name: "Ponto A",
  },

  {
    id: 2,
    name: "Ponto B",
  },

  {
    id: 3,
    name: "Ponto C",
  }
];

for (let i = 0; i <= points.length; i++) {
  document.write(points[i].name)
}