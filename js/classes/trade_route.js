var TradeRoute = new Class({
	
	// initialization
	Implements: Options,
	jquery: 'trade_route',
	
	// constants
	DEFAULT_LAYER_NAME: "OpenStreetMap (Tiles@Home)",
	DEFAULT_LAYER_SOURCE: "http://tah.openstreetmap.org/Tiles/tile/${z}/${x}/${y}.png",
	
	// public vars
	
	// private vars
	_ol_map: null,
	
	// options
	options: {
		map_layer: false,
		
	},
	
	// ignition key
	initialize: function(selector, options){
	    this.setOptions(options);
	    this.jqueryObject = jQuery(selector);
			if(!this.map_layer) {
				this.load_default_map();
			}
	},
	
	// map initialization
	load_default_map: function() {
		var layer = new OpenLayers.Layer.OSM(this.DEFAULT_LAYER_NAME, this.DEFAULT_LAYER_SOURCE);
		var map_id = this.jqueryObject.attr('id');
		
		this._ol_map = new OpenLayers.Map(map_id, {controls: []});
		this._ol_map.removeControl(new OpenLayers.Control.PanZoomBar());
		this._ol_map.addLayer(layer);
		this._ol_map.zoomTo(2);
	},
	
	// loading data
	
	
	// item navigation
	next: function() {
		console.log("Next");
	},
	
	previous: function() {
		console.log("Previous");
	}
	
});