

function createSky(name, sunColor, sceneNum, sunHeight) {
    var skyGeo = new THREE.SphereGeometry(1000, 50, 50); 
    var loader  = new THREE.TextureLoader(),
    texture = loader.load( "img/" + name + ".jpg" );

   var material = new THREE.MeshPhongMaterial({ 
        map: texture,
    });

    var sky = new THREE.Mesh(skyGeo, material);
    sky.material.side = THREE.BackSide;
    sceneNum.add(sky);

    var sun = new THREE.SphereBufferGeometry( 600, 30, 100 );

    var light1 = new THREE.PointLight( sunColor , .1 );
    light1.add( new THREE.Mesh( sun, new THREE.MeshBasicMaterial( { color: sunColor } ) ) );
    light1.position.set(1000, sunHeight, 0);
    sceneNum.add( light1);

    var sunRay = new THREE.DirectionalLight(sunColor , .5);
    sunRay.target.position.set(1000, sunHeight, 0);
    sceneNum.add( sunRay, sunRay.target);

}

