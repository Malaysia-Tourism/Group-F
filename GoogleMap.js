// Initialize and add the map
function initMap() {
  // The location of KL
  const KL = { lat: 3.140853, lng: 101.693207 };
  // The map, centered at KL
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: KL,
  });
  // The marker, positioned at KL
  const marker = new google.maps.Marker({
    position: KL,
    map: map,
  });
}
