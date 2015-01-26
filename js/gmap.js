var Riga = new google.maps.LatLng(56.925449, 24.105624);
var GalerijaRiga = new google.maps.LatLng(56.925449, 24.105624);
var marker;
var map;

function initialize() {
    var mapOptions = {
        zoom: 15,
        center: Riga,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        scrollwheel: false
    };

    map = new google.maps.Map(document.getElementById('google_map'),
        mapOptions);

    marker = new google.maps.Marker({
        map:map,
        draggable:true,
        animation: google.maps.Animation.DROP,
        position: GalerijaRiga
    });
    google.maps.event.addListener(marker, 'click', toggleBounce);
}

function toggleBounce() {

    if (marker.getAnimation() != null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}

google.maps.event.addDomListener(window, 'load', initialize);
