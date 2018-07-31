// Initialize and add the map
function initMap() {
    // The location of Uluru
    var home = {lat: 51.208296, lng: -1.516453};
    // The map, centered at home
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 16, center: home});
    // The marker, positioned at home
    var marker = new google.maps.Marker({position: home, map: map});
  }