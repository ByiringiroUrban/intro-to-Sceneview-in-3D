var map;

require(["esri/Maap", "esri/viewMap"],
  function (Map, viewMap){
    map = new Map("viewDiv", {
      basemap: "topo",
    });
    map = new viewMap("viewDiv", {
      container: "viewDiv",
      zoom: 13,
      center: [-118.805, 34.027],
      map: map
    });
  }
)