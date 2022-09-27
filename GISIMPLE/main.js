var mapView = new ol.View ({
    // assign the center point
    center: ol.proj.frontLonLat([117.585717, 31.021245]),
    zoom: 8,
});

var map = new ol.Map ({
    target: 'map',
    view: mapView,
});

var osmTile = new ol.layer.Tile ({
    title: 'Open Street Map',
    visible: true,
    source: new ol.source.OSM()
});

map.addLayer(osmTile);
var IndiaStTile = new ol.layer.Tile({
    title: "India States",
    source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/tiger/wms',
        params: {'LAYERS': }
    })
})