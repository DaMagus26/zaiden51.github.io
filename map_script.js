function initMap() {
  const house = {lat: 55.870157, lng: 37.481415}
  const shelter1 = {lat: 55.772213, lng: 37.622890}
  const ranepa = {lat: 55.665137, lng: 37.478603}
  const shelter2 = {lat: 55.812312, lng: 37.631990}
  const shelter3 = {lat: 55.667711, lng: 37.702787}
 map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 55.753215, lng: 37.622504 },
    zoom: 10,
  });
  const marker = new google.maps.Marker({
	position: house,
	map: map,
  });
  const marker1 = new google.maps.Marker({
	position: shelter1,
	map: map,
  });
  const marker2 = new google.maps.Marker({
	position: ranepa,
	map: map,
  });
  const marker3 = new google.maps.Marker({
	position: shelter2,
	map: map,
  });
  const marker4 = new google.maps.Marker({
	position: shelter3,
	map: map,
  });
}