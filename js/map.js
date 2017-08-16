function initMap() {
        var sbs = {lat: -26.234430, lng: -49.390721};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: sbs
        });
        var marker = new google.maps.Marker({
          position: sbs,
          map: map
        });
      }
