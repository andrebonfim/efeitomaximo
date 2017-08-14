function initMap() {
        var sbs = {lat: -26.199379, lng: -49.390372};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: sbs
        });
        var marker = new google.maps.Marker({
          position: sbs,
          map: map
        });
      }
