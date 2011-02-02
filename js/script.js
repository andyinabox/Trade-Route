/* Author: Andy Dayton */
var map;
// function init(){
    map = new OpenLayers.Map('map');

		var ol_wms = new OpenLayers.Layer.WMS( "OpenLayers WMS", "http://vmap0.tiles.osgeo.org/wms/vmap0", {layers: 'basic'} );
		// var jpl_wms = new OpenLayers.Layer.WMS( "NASA Global Mosaic", "http://t1.hypercube.telascience.org/cgi-bin/landsat7", {layers: "landsat7"});
		// var dm_wms = new OpenLayers.Layer.WMS( "DM Solutions Demo", "http://www2.dmsolutions.ca/cgi-bin/mswms_gmap", {layers: "bathymetry,land_fn,park,drain_fn,drainage," + "prov_bound,fedlimit,rail,road,popplace", transparent: "true", format: "image/png" });
		map.addLayers([ol_wms]);
		map.addControl(new OpenLayers.Control.LayerSwitcher());
		map.setCenter(new OpenLayers.LonLat(0, 0), 6);
		map.zoomToMapExtent();
// }
