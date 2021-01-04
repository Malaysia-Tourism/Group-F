function initMapKl() {

  const klcc = { lat: 3.1577322172627578, lng: 101.71217027787905 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: klcc,
  });

  const marker = new google.maps.Marker({
    position: klcc,
    map: map,
  });
}

function initMapSabah() {

  const kinabalu = { lat: 6.0753151, lng: 116.5580435 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: kinabalu,
  });

  const marker = new google.maps.Marker({
    position: kinabalu,
    map: map,
  });
}

function initMapPenang() {

  const penang = { lat: 5.4088486, lng: 100.275157 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: penang,
  });

  const marker = new google.maps.Marker({
    position: penang,
    map: map,
  });
}


function initMapMalacca() {

  const penang = { lat: 2.1917414, lng: 102.2498609 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: penang,
  });

  const marker = new google.maps.Marker({
    position: penang,
    map: map,
  });
}
