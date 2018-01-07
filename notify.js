window.onload = function() {
	var uid = [];
	var link = "";
	
	last =  function(array, n) {
		if (array == null) 
			return void 0;
		if (n == null) 
			return array[array.length - 1];
		return array.slice(Math.max(array.length - n, 0));  
		};
	function notifClick(id) {
		var d = document.getElementById(id);
		d.className += "notificationDismiss";
	}
	
	function newNotif(notDesc) {
		var parser = new DOMParser();
		var xmlDoc = parser.parseFromString(notDesc,"text/xml");	
	
		var div = document.createElement('div');
		var h2 = document.createElement('h2');
		var h3 = document.createElement('h3');
		var p = document.createElement('p');
		
		var title = xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
		var appName = xmlDoc.getElementsByTagName("appName")[0].childNodes[0].nodeValue;
		var desc = xmlDoc.getElementsByTagName("description")[0].childNodes[0].nodeValue;
		link = xmlDoc.getElementsByTagName("link")[0].childNodes[0].nodeValue;
		
		h2.innerHTML = title;
		h3.innerHTML = appName;
		p.innerHTML = desc;
		
		div.appendChild(h3);
		div.appendChild(h2);
		div.appendChild(p);
		document.body.appendChild(div);
		
		if (uid.length == 0) {
			div.setAttribute("id", "not0");
			uid.push(0);
		} else {
			var newID = last(uid) + 1;
			var newIdStr = newID.toString();
			div.setAttribute("id", "not" + newIdStr);
			uid.push(newID);
		}
		
		div.setAttribute("class", "notification");
		div.setAttribute("onclick", "notifClick(not" + newIdStr + ")");
	}
	
	newNotif("<notification version='0.1'><title>Alpha</title><appName>notify.js</appName><description>Hello, World!</description><link>index.html</link></notification>");
	newNotif("<notification version='0.1'><title>Beta</title><appName>notify.js</appName><description>It's Alive!</description><link>index.html</link></notification>");
	newNotif("<notification version='0.1'><title>Gamma</title><appName>notify.js</appName><description>Bonj</description><link>index.html</link></notification>");
	newNotif("<notification version='0.1'><title>Delta</title><appName>notify.js</appName><description>ayo wagwan g</description><link>index.html</link></notification>");
}
