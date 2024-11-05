+++
title = 'Twinnings'
date = 2024-08-24
tags = ['twinnings', 'project']
+++

{{< rawhtml >}}
<script>
    (g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
      v: "weekly",
      // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
      // Add other bootstrap parameters as needed, using camel case.
    });
</script>
<script>
    async function initialize(twinnings) {
        const { Map, Polyline } = await google.maps.importLibrary("maps");
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
        const infowindow = new google.maps.InfoWindow();

        const drawCityBond = async (city, otherCity, map) => {
            const polyLine = new Polyline({
                path: [city.latlng, otherCity.latlng],
                geodesic: true
            });
            polyLine.setMap(map);

            await addMarker(city, map);
            await addMarker(otherCity, map);
        }

        const addMarker = async (city, map) => {
            const marker = new AdvancedMarkerElement({
                position: city.latlng,
                title: city.name,
                map: map,
                gmpClickable: true,
            });

            marker.addListener("click", ({ domEvent, latLng }) => {
                const { target } = domEvent;

                infowindow.close();
                infowindow.setContent(marker.title);
                infowindow.open(marker.map, marker);
            });
        }

        var mapOptions = {
            center: new google.maps.LatLng(50.929729, 5.338230),
            zoom: 3,
            mapId: "twinnings"
        };
        const map = new Map(document.getElementById("map"), mapOptions);
        
        for(const twinning of twinnings) {
            const city = {
                latlng: new google.maps.LatLng(twinning.city.lat, twinning.city.lng),
                name: twinning.city.name,
                url: twinning.url
            }
            const otherCity = {
                latlng: new google.maps.LatLng(twinning.otherCity.lat, twinning.otherCity.lng),
                name: twinning.otherCity.name,
                url: twinning.url
            }
            await drawCityBond(city, otherCity, map)
        }
    }

    const request = new XMLHttpRequest();
    request.overrideMimeType("application/json");
    request.open("GET", "/data/blog/2024/8/twinnings/partner-cities.json", true);
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status == "200") {
            initialize(JSON.parse(request.responseText));
        }
    }
    request.send(null);
</script>

<div id="map" style="height:60vh;"></div>
{{< /rawhtml >}}