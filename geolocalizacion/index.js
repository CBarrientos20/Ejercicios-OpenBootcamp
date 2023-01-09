let map;
let marker;

function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.349650, lng: -3.695202},
        zoom:13
    });

    marker= new google.maps.Marker({
        position: {lat: 51.2, lng: 3.21667 },
        map,
        title:"Brujas,Belgium"
    })
    ;
       marker= new google.maps.Marker({
    position: {lat: 41.390205, lng: 2.154007},
    map,
    title: "Barcelona, Spain"
})
;
    marker= new google.maps.Marker({
        position: {lat: 50.3347, lng: 6.9418},
        map,
         title: "Nürburgring nordschleife, Germany"
    })  
    ;
}    

   