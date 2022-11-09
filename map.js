require(["esri/config",
      "esri/Map", 
      "esri/views/MapView",
      "esri/Graphic",
      "esri/layers/GraphicsLayer"], 
      function (esriConfig, Map, MapView, Graphic, GraphicsLayer) {

        esriConfig.apiKey = "AAPK1550f34207864f2a8f9273b9a37b15788B4ZVaD5IrgZxoA79p_A05Gp1JrYyYJDjHfwtoqkBZpLSbe1_QSCIDpOBzCy5zGv";

        const map = new Map({
          basemap: "arcgis-topographic" 
        });

        const view = new MapView({
          map: map,
          center: [-158.0241216, 21.3351203], 
          zoom: 14, 
          container: "mapDiv" 
        });

        const graphicsLayer = new GraphicsLayer();
        map.add(graphicsLayer);

        const point1 = { 
        type: "point",
        longitude: -158.017868,
        latitude: 21.310190
        };

        const point2 = { 
        type: "point",
        longitude: -158.001175,
        latitude: 21.322782
        };

        const point3 = { 
        type: "point",
        longitude: -158.121315,
        latitude: 21.328213
        };

        const point4 = { 
        type: "point",
        longitude: -158.012838,
        latitude: 21.317252
        };

        const point5 = { 
        type: "point",
        longitude: -158.030327,
        latitude: 21.305228
        };

        const point6 = { 
        type: "point",
        longitude: -158.009711,
        latitude: 21.317199
        };

        const point7 = { 
        type: "point",
        longitude: -158.020440,
        latitude: 21.339210
        };

        const point8 = { 
        type: "point",
        longitude: -158.027640,
        latitude: 21.306845
        };

        const point9 = { 
        type: "point",
        longitude: -157.931378,
        latitude: 21.647049
        };

        const point10 = { 
        type: "point",
        longitude: -158.073695,
        latitude: 21.298075, 
        };

        const point11 = { 
        type: "point",
        longitude: -157.702332,
        latitude: 21.345517
        };

        const point12 = { 
        type: "point",
        longitude: -157.861656,
        latitude: 21.339478
        };

        const point13 = { 
        type: "point",
        longitude: -158.066974,
        latitude: 21.639024
        };

        const point14 = { 
        type: "point",
        longitude: -157.929807,
        latitude: 21.372672
        };

        const point15 = { 
        type: "point",
        longitude: -158.0838044,
        latitude: 21.3307539
        };

        const point16 = { 
        type: "point",
        longitude: -157.8528249,
        latitude: 21.2989251
        };

        const point17 = { 
        type: "point",
        longitude: -157.822855,
        latitude: 21.269679
        };

        const point18 = { 
        type: "point",
        longitude: -157.812819,
        latitude: 21.330423
        };

        const point19 = { 
        type: "point",
        longitude: -158.214448,
        latitude: 21.580228
        };

        const point20 = { 
        type: "point",
        longitude: -158.051921,
        latitude: 21.333431
        };

        const simpleMarkerSymbol = {
        type: "simple-marker",
        color: [206, 19, 40],  
        outline: {
            color: [0, 255, 255], 
            width: 1
        }};

        const popupTemplate = {
            title: "{Name}",
            content: "{Description}"
        }
        const attributes1 = {
            Name: "My House",
            Description: "This is the house I grew up in and where I live when I am not at college in Rexburg."
        }
        const attributes2 = {
            Name: "Church",
            Description: "This is the bulding where I had church growing up."
        }
        const attributes3 = {
            Name: "Koolina",
            Description: "A nice and relaxing beach that I'd always go to with my cousins."
        }
        const attributes4 = {
            Name: "Fight Central",
            Description: "This is where all the kids go to fight after school, from middle school all the way to high school."
        }
        const attributes5 = {
            Name: "Hau Bush",
            Description: "This is the beach that only locals to Ewa Beach Mostly Know. It is known for parties and drug addict homeless people."
        }
        const attributes6 = {
            Name: "James Campbell High School",
            Description: "This is the local high school in my hometown."
        }
        const attributes7 = {
            Name: "Holomua Elementary School",
            Description: "This is the elementary school that I attended. It was fun most fun when I got to walk to my cousin's house on certain days after school."
        }
        const attributes8 = {
            Name: "The Wall",
            Description: "This is a spot I found during quarantine. A new neighborhood was being built and there was a wall over looking the beach and downtown, my go to chill spot."
        }
        const attributes9 = {
            Name: "Laie Hawaii Temple",
            Description: "The lord's house, built in Laie on the north shore. It's always a blessing having the temple close to where I live."
        }
        const attributes10 = {
            Name: "Barbers Point Beach",
            Description: "This is another beach that my family and I liked to go to. It would mostly just be my immediate family though."
        }
        const attributes11 = {
            Name: "Sherwoods",
            Description: "This is probably my favorite beach of all time. It's really nice and sandy but can get big enough during the summer to catch some shorebreak."
        }
        const attributes12 = {
            Name: "The field",
            Description: "This is where I suffered for six years during the summer. If you played football you'd know."
        }
        const attributes13 = {
            Name: "Waimea Rock",
            Description: "A famous spot on the north shore where tourists and locals go to jump off the rock. It's about 40 feet and a lot scarier when you're at the top."
        }
        const attributes14 = {
            Name: "Aloha Stadium",
            Description: "This is where I played most of my varsity football games. I also spent years beforehand watching my older brothers play football here."
        }
        const attributes15 = {
            Name: "Kapolei Hale",
            Description: "This is where I got my first job. It was during the mask mandate so it was really pesky cleaning the voting stations right after each use."
        }
        const attributes16 = {
            Name: "Blaisdell Arena",
            Description: "My high school had a thing called song contest where we sang Hawaiian songs and this is where we had the competition."
        }
        const attributes17 = {
            Name: "Waikiki Beach",
            Description: "This is the beach that we'd go to whenever my family from the mainland came to Hawaii. It was like a tradition at this point."
        }
        const attributes18 = {
            Name: "Tantalus",
            Description: "This is the mountain where my grandparents live. I had the best memories going up there for sleep overs and for Christmas."
        }
        const attributes19 = {
            Name: "Mokuleia",
            Description: "This is also one of my favorite beaches to take a drive to. It is mostly worth it for the views."
        }
        const attributes20 = {
            Name: "Ka Makana Alii",
            Description: "The mall built on the west side of the island. It is fairly new and I'm glad it's there because it's super close to my house."
        }

        const pointGraphic1 = new Graphic({
        geometry: point1,
        symbol: simpleMarkerSymbol,
        attributes: attributes1,
        popupTemplate: popupTemplate
        });
        graphicsLayer.add(pointGraphic1);

        const pointGraphic2 = new Graphic({
        geometry: point2,
        symbol: simpleMarkerSymbol,
        attributes: attributes2,
        popupTemplate: popupTemplate
        });
        graphicsLayer.add(pointGraphic2);

        const pointGraphic3 = new Graphic({
        geometry: point3,
        symbol: simpleMarkerSymbol,
        attributes: attributes3,
        popupTemplate: popupTemplate
        });
        graphicsLayer.add(pointGraphic3);

        const pointGraphic4 = new Graphic({
        geometry: point4,
        symbol: simpleMarkerSymbol,
        attributes: attributes4,
        popupTemplate: popupTemplate
        });
        graphicsLayer.add(pointGraphic4);

        const pointGraphic5 = new Graphic({
        geometry: point5,
        symbol: simpleMarkerSymbol,
        attributes: attributes5,
        popupTemplate: popupTemplate
        });
        graphicsLayer.add(pointGraphic5);

        const pointGraphic6 = new Graphic({
        geometry: point6,
        symbol: simpleMarkerSymbol,
        attributes: attributes6,
        popupTemplate: popupTemplate
        });
        graphicsLayer.add(pointGraphic6);

        const pointGraphic7 = new Graphic({
        geometry: point7,
        symbol: simpleMarkerSymbol,
        attributes: attributes7,
        popupTemplate: popupTemplate
        });
        graphicsLayer.add(pointGraphic7);

        const pointGraphic8 = new Graphic({
        geometry: point8,
        symbol: simpleMarkerSymbol,
        attributes: attributes8,
        popupTemplate: popupTemplate
        });
        graphicsLayer.add(pointGraphic8);

        const pointGraphic9 = new Graphic({
        geometry: point9,
        symbol: simpleMarkerSymbol,
        attributes: attributes9,
        popupTemplate: popupTemplate
        });
        graphicsLayer.add(pointGraphic9);

        const pointGraphic10 = new Graphic({
        geometry: point10,
        symbol: simpleMarkerSymbol,
        attributes: attributes10,
        popupTemplate: popupTemplate
        });
        graphicsLayer.add(pointGraphic10);

        const pointGraphic11 = new Graphic({
        geometry: point11,
        symbol: simpleMarkerSymbol,
        attributes: attributes11,
        popupTemplate: popupTemplate
        });
        graphicsLayer.add(pointGraphic11);

        const pointGraphic12 = new Graphic({
        geometry: point12,
        symbol: simpleMarkerSymbol,
        attributes: attributes12,
        popupTemplate: popupTemplate
        });
        graphicsLayer.add(pointGraphic12);

        const pointGraphic13 = new Graphic({
        geometry: point13,
        symbol: simpleMarkerSymbol,
        attributes: attributes13,
        popupTemplate: popupTemplate
        });
        graphicsLayer.add(pointGraphic13);

        const pointGraphic14 = new Graphic({
        geometry: point14,
        symbol: simpleMarkerSymbol,
        attributes: attributes14,
        popupTemplate: popupTemplate
        });
        graphicsLayer.add(pointGraphic14);

        const pointGraphic15 = new Graphic({
        geometry: point15,
        symbol: simpleMarkerSymbol,
        attributes: attributes15,
        popupTemplate: popupTemplate
        });
        graphicsLayer.add(pointGraphic15);

        const pointGraphic16 = new Graphic({
        geometry: point16,
        symbol: simpleMarkerSymbol,
        attributes: attributes16,
        popupTemplate: popupTemplate
        });
        graphicsLayer.add(pointGraphic16);

        const pointGraphic17 = new Graphic({
        geometry: point17,
        symbol: simpleMarkerSymbol,
        attributes: attributes17,
        popupTemplate: popupTemplate
        });
        graphicsLayer.add(pointGraphic17);

        const pointGraphic18 = new Graphic({
        geometry: point18,
        symbol: simpleMarkerSymbol,
        attributes: attributes18,
        popupTemplate: popupTemplate
        });
        graphicsLayer.add(pointGraphic18);

        const pointGraphic19 = new Graphic({
        geometry: point19,
        symbol: simpleMarkerSymbol,
        attributes: attributes19,
        popupTemplate: popupTemplate
        });
        graphicsLayer.add(pointGraphic19);

        const pointGraphic20 = new Graphic({
        geometry: point20,
        symbol: simpleMarkerSymbol,
        attributes: attributes20,
        popupTemplate: popupTemplate
        });
        graphicsLayer.add(pointGraphic20);

        
    })