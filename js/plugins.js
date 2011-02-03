
// remap jQuery to $
(function($){
	var map = new TradeRoute('#map', {scroll_selector:'#main'});
	$('body').keypress(function(event){
		// console.log(event);
		if(event.charCode == '107') {
			map.next();
		}
		if(event.charCode == '106') {
			map.previous();
		}
	});
})(this.jQuery);



// usage: log('inside coolFunc',this,arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console){
    console.log( Array.prototype.slice.call(arguments) );
  }
};



// catch all document.write() calls
(function(doc){
  var write = doc.write;
  doc.write = function(q){ 
    log('document.write(): ',arguments); 
    if (/docwriteregexwhitelist/.test(q)) write.apply(doc,arguments);  
  };
})(document);


