var map = L.map('mapid').setView([38.611, -90.272], 13);

L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 18,
	ext: 'png'
}).addTo(map);

var marker_mailee = L.marker([38.627,-90.337]).addTo(map);
marker_mailee.bindPopup("<b>Mai Lee</b><br>Best Vietnamese</b><br>8396 Musick Memorial Dr</b><br>  Brentwood, MO 63144").openPopup();

var marker_thai = L.marker([38.613,-90.32]).addTo(map);
marker_thai.bindPopup("<b>Thai Table</b><br>Best Thai</b><br>7403 Manchester Rd</b><br> Maplewood, MO 63143").openPopup();

var marker_balk = L.marker([38.592,-90.338]).addTo(map);
marker_balk.bindPopup("<b>Balkan Treat Box</b><br>Best European/Ethnic</b><br>8103 Big Bend Blvd</b><br>  Webster Groves, MO 63119").openPopup();

var marker_chris = L.marker([38.609,-90.289]).addTo(map);
marker_chris.bindPopup("<b>Chris' Pancakes and Dining</b><br>Best Breakfast</b><br>5980 Southwest Ave</b><br>  St. Louis, MO 63139").openPopup();

var marker_tree = L.marker([38.600,-90.243]).addTo(map);
marker_tree.bindPopup("<b>Tree House Restaurant</b><br>Best Vegan/Vegetarian</b><br>3177 S Grand Blvd</b><br>St. Louis, MO 63118").openPopup();

var marker_bbq = L.marker([38.611,-90.203]).addTo(map);
marker_bbq.bindPopup("<b>Bogart's Smokehouse</b><br>Best Barbeque</b><br>1627 S 9th St</b><br>St. Louis, MO 63104").openPopup();

var marker_mex = L.marker([38.584,-90.292]).addTo(map);
marker_mex.bindPopup("<b>La Catrina</b><br>Best Mexican</b><br>5220 Hampton Ave</b><br>St. Louis, MO 63109").openPopup();
