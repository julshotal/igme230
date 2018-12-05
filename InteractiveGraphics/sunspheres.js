/*---------------------------------------------------Page 1-----------------------------------------------------*/

$(".dropdown").hover(function() {
    $("#sub").slideDown("slow");
});

$("#sub").mouseleave(function() {
    $(this).slideUp("slow");
})

//page 1
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 110, window.innerWidth / window.innerHeight, 0.1, 10000 );
renderer = new THREE.WebGLRenderer({antialias: true});

var windowH = window.innerHeight;
var windowW = window.innerWidth;

renderer.setSize( windowW, windowH );

let container1 = document.querySelector('#page1');
container1.appendChild(renderer.domElement);

camera.lookAt(1000, 500, 0);

// create an AudioListener and add it to the camera
var listener = new THREE.AudioListener();
camera.add( listener );

// create a global audio source
var sound = new THREE.Audio( listener );

// load a sound and set it as the Audio object's buffer
var audioLoader = new THREE.AudioLoader();
audioLoader.load( 'music/index.wav', function( buffer ) {
    sound.setBuffer( buffer );
    sound.setLoop( true );
    sound.setVolume( 0.5 );
    sound.play();
});

/*---------------------------------------------------skyspere-----------------------------------------------------*/
/*https://gist.github.com/rlama/04d6413f7ce7f621d20b*/

createSky("daysky", 0xffffff, scene, 500);

    
/*-----------------------------------------------------functions and lights-----------------------------------------------------*/

var ambLight = new THREE.AmbientLight( 0xd3f2ff , .6 ); 
scene.add(ambLight);

camera.position.z = 5;
function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}   

animate();

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

