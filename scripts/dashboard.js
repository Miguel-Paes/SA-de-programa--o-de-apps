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