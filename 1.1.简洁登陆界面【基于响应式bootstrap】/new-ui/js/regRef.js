(function() {
	var referSite = document.referrer.toLowerCase();
	
	var cookieSite = getCookie("site_to_sendcloud") ;
	if( !cookieSite || referSite.search("sendcloud.sohu.com") == -1) { // first time visit or from other site into sendcloud, resetting site_to_sendcloud
		if(!referSite) referSite = window.location.href ; // direct visit sendcloud
		setCookie("site_to_sendcloud", referSite);
	}
	
	function setCookie(name, value) {
		document.cookie = name + "=" + value + ";";
	}

	// copy from http://www.w3schools.com/js/js_cookies.asp
	function getCookie(c_name) {
			var c_value = document.cookie;
			var c_start = c_value.indexOf(" " + c_name + "=");
			if (c_start == -1) {
				c_start = c_value.indexOf(c_name + "=");
			}
			if (c_start == -1) {
				c_value = null;
			} else {
				c_start = c_value.indexOf("=", c_start) + 1;
				var c_end = c_value.indexOf(";", c_start);
				if (c_end == -1) {
					c_end = c_value.length;
				}
				c_value = c_value.substring(c_start, c_end);
			}
			return c_value;
	}
	
})();