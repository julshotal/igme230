document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname == '/index.html') {
        $(".dropdown").mouseover(function() {
            $("#sub").css("display", "flex");
        });

        $("#sub").mouseleave(function() {
            $(this).css("display", "none");
        });


        //taken from https://stackoverflow.com/questions/20290402/three-js-resizing-canvas
        window.addEventListener( 'resize', onWindowResize, false );

        //page 1
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 110, window.innerWidth / window.innerHeight, 0.1, 10000 );
        var renderer = new THREE.WebGLRenderer({antialias: true});

        var windowH = window.innerHeight;
        var windowW = window.innerWidth;

        renderer.setSize( windowW, windowH );

        document.querySelector('#page1').appendChild(renderer.domElement);

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

        $(".sound").click(function() {
            if(sound.isPlaying == true){
                sound.stop();
                $(".sound").css('textDecoration','line-through');
            } else {
                sound.play();
                $(".sound").css('textDecoration', "none");
            }
        });

        /*---------------------------------------------------skyspere-----------------------------------------------------*/

        createSky("daysky", 0xffffff, scene, 500, 600);

            
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

    } else if (window.location.pathname == '/page2.html') {

        /*-----------------------------------------------------Page 2-----------------------------------------------------*/
        /*-----------------------------------------------------Page 2-----------------------------------------------------*/
        /*-----------------------------------------------------Page 2-----------------------------------------------------*/
        /*-----------------------------------------------------Page 2-----------------------------------------------------*/


        $("body").mousedown(function() {
            $('h2').fadeTo(500, 0);
        });


        //page 2
        var scene2 = new THREE.Scene();
        var camera2 = new THREE.PerspectiveCamera( 110, window.innerWidth / window.innerHeight, 0.1, 10000 );
        var renderer2 = new THREE.WebGLRenderer({antialias: true});

        var windowH = window.innerHeight;
        var windowW = window.innerWidth;

        renderer2.setSize( windowW, windowH );

        document.querySelector('#page2').appendChild(renderer2.domElement);

        //taken from https://stackoverflow.com/questions/20290402/three-js-resizing-canvas
        window.addEventListener( 'resize', onWindowResize, false );

        function onWindowResize(){

            camera2.aspect = window.innerWidth / window.innerHeight;
            camera2.updateProjectionMatrix();

            renderer2.setSize( window.innerWidth, window.innerHeight );

        }

        // create an AudioListener and add it to the camera
        var listener2 = new THREE.AudioListener();
        camera2.add( listener2 );

        // create a global audio source
        var sound2 = new THREE.Audio( listener2 );
        var sound4 = new THREE.PositionalAudio( listener2 );

        // load a sound and set it as the Audio object's buffer
        var audioLoader2 = new THREE.AudioLoader();
        audioLoader2.load( 'music/page2.wav', function( buffer ) {
            sound2.setBuffer( buffer );
            sound2.setLoop( true );
            sound2.setVolume( 0.3 );
            sound2.play();
        });

        audioLoader2.load( 'music/waternoise.wav', function( buffer ) {
            sound4.setBuffer( buffer );
            sound4.setRefDistance( 50 );
            sound4.play();
        });

        $(".sound").click(function() {
            if(sound2.isPlaying == true){
                sound2.stop();
                $(".sound").css('textDecoration','line-through');
            } else {
                sound2.play();
                $(".sound").css('textDecoration', "none");
            }
        });

        /*---------------------------------------------------skyspere-----------------------------------------------------*/

        createSky("dusklight", 0xfff2c1, scene2, 100, 300);


        /*---------------------------------------------------water-------------------------------------------------------*/

        var waterGeo2 = new THREE.PlaneBufferGeometry( 1000, 1000 );
                var water2 = new THREE.Water(
                    waterGeo2,
                    {
                        textureWidth: 1000,
                        textureHeight: 1000,
                        waterNormals: new THREE.TextureLoader().load( 'textures/waternormals.jpg', function ( texture ) {
                            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
                        } ),
                        scale: 10,
                        color: 0xffffff,
                        flowDirection: new THREE.Vector2( -2, 0 )
                    }
                );

                water2.rotation.x = - Math.PI / 2;
                scene2.add( water2 );

                water2.add( sound4 );

                
        /*-----------------------------------------------------Look around-----------------------------------------------------*/

        orbitC( camera2 );
            
        /*-----------------------------------------------------functions and lights-----------------------------------------------------*/

        var ambLight2 = new THREE.AmbientLight( 0xFFAEC2 , .5 ); 
        scene2.add(ambLight2);

        camera2.position.z = 5;

        function animate() {
            requestAnimationFrame( animate );
            renderer2.render( scene2, camera2 );
        }   

        animate();

    } else if (window.location.pathname == '/page3.html') {

    /*-----------------------------------------------------Page 3-----------------------------------------------------*/
    /*-----------------------------------------------------Page 3-----------------------------------------------------*/
    /*-----------------------------------------------------Page 3-----------------------------------------------------*/
    /*-----------------------------------------------------Page 3-----------------------------------------------------*/

    $("body").mousedown(function() {
        $('h2').fadeTo(500, 0);
    });
    
    //taken from https://stackoverflow.com/questions/20290402/three-js-resizing-canvas
    window.addEventListener( 'resize', onWindowResize, false );
    
    //page 3
    var scene3 = new THREE.Scene();
    var camera3 = new THREE.PerspectiveCamera( 110, window.innerWidth / window.innerHeight, 0.1, 10000 );
    renderer3 = new THREE.WebGLRenderer({antialias: true});
    renderer3.setSize( window.innerWidth, window.innerHeight );
    
    document.querySelector('#page3').appendChild(renderer3.domElement);
    
    var listener3 = new THREE.AudioListener();
    camera3.add( listener3 );
    
    // create a global audio source
    var sound3 = new THREE.Audio( listener3 );
    var sound6 = new THREE.PositionalAudio( listener3 );
    
    // load a sound and set it as the Audio object's buffer
    var audioLoader3 = new THREE.AudioLoader();
    audioLoader3.load( 'music/page3.flac', function( buffer ) {
        sound3.setBuffer( buffer );
        sound3.setLoop( true );
        sound3.setVolume( 0.3 );
        sound3.play();
    });      
    
    audioLoader3.load( 'music/waternoise.wav', function( buffer ) {
        sound6.setBuffer( buffer );
        sound6.setRefDistance( 50 );
        sound6.play();
    });      
    
    $(".sound").click(function() {
        if(sound3.isPlaying == true){
            sound3.stop();
            $(".sound").css('textDecoration','line-through');
        } else {
            sound3.play();
            $(".sound").css('textDecoration', "none");
        }
    });
    
    /*---------------------------------------------------skyspere-----------------------------------------------------*/
    
    createSky("duskdark2", 0xCB253E, scene3, 50, 300);
    
    
    /*---------------------------------------------------water-------------------------------------------------------*/
    
    var waterGeo3 = new THREE.PlaneBufferGeometry( 1000, 1000 );
            var water3 = new THREE.Water(
                waterGeo3,
                {
                    textureWidth: 1000,
                    textureHeight: 1000,
                    waterNormals: new THREE.TextureLoader().load( 'textures/waternormals.jpg', function ( texture ) {
                        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
                    } ),
                    scale: 10,
                    color: 0xffffff,
                    flowDirection: new THREE.Vector2( -2, 0 )
                    
                }
            );
    
            water3.rotation.x = - Math.PI / 2;
            scene3.add( water3 );
            
            water3.add( sound6 );
            
    /*-----------------------------------------------------Look around-----------------------------------------------------*/
    
    orbitC( camera3 );
        
    /*-----------------------------------------------------functions and lights-----------------------------------------------------*/
    
    var ambLight3 = new THREE.AmbientLight( 0xc3b4e4 , .5 ); 
    scene3.add(ambLight3);
    
    camera3.position.z = 5;
    function animate() {
        requestAnimationFrame( animate );
        renderer3.render( scene3, camera3 );
    }   
    
    animate();

} else if (window.location.pathname == '/doc.html') {
    /*-----------------------------------------------------documentation-----------------------------------------------------*/
    /*-----------------------------------------------------documentation-----------------------------------------------------*/
    /*-----------------------------------------------------documentation-----------------------------------------------------*/
    /*-----------------------------------------------------documentation-----------------------------------------------------*/
     //taken from https://stackoverflow.com/questions/20290402/three-js-resizing-canvas
     window.addEventListener( 'resize', onWindowResize, false );
     
     //page 4
     var scene4= new THREE.Scene();
     var camera4 = new THREE.PerspectiveCamera( 110, window.innerWidth / window.innerHeight, 0.1, 10000 );
     renderer4 = new THREE.WebGLRenderer({antialias: true});
     renderer4.setSize( window.innerWidth, window.innerHeight );
 
     document.querySelector('#doc').appendChild(renderer4.domElement);
 
     // create an AudioListener and add it to the camera
     var listener4 = new THREE.AudioListener();
     camera4.add( listener4 );
 
     // create a global audio source
     var sound4 = new THREE.Audio( listener4 );
 
     // load a sound and set it as the Audio object's buffer
     var audioLoader4 = new THREE.AudioLoader();
     audioLoader4.load( 'music/underwater.wav', function( buffer ) {
         sound4.setBuffer( buffer );
         sound4.setLoop( true );
         sound4.setVolume( 0.8 );
         sound4.play();
     });
 
 
     $(".sound").click(function() {
         if(sound4.isPlaying == true){
             sound4.stop();
             $(".sound").css('textDecoration','line-through');
         } else {
             sound4.play();
             $(".sound").css('textDecoration', "none");
         }
     });
 
     /*---------------------------------------------------skyspere-----------------------------------------------------*/
 
     var skyGeo = new THREE.SphereGeometry(1000, 50, 50); 
     var loader  = new THREE.TextureLoader(),
     texture = loader.load( "img/" + "night" + ".jpg" );

     var material = new THREE.MeshPhongMaterial({ 
         map: texture,
     });

     var sky = new THREE.Mesh(skyGeo, material);
     sky.material.side = THREE.BackSide;
     scene4.add(sky);
 
     /*---------------------------------------------------water-------------------------------------------------------*/
 
     var waterGeo4 = new THREE.PlaneBufferGeometry( 500, 500 );
             var water4 = new THREE.Water(
                 waterGeo4,
                 {
                     textureWidth: 1000,
                     textureHeight: 1000,
                     waterNormals: new THREE.TextureLoader().load( 'textures/waternormals.jpg', function ( texture ) {
                         texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
                     } ),
                     scale: 15,
                     opacity: .3,
                     color: 0xffffff,
                     flowDirection: new THREE.Vector2( 0, -1 )
                 }
             );
             
             water4.rotation.x = 0;
             scene4.add( water4 );
         
     /*-----------------------------------------------------functions and lights-----------------------------------------------------*/
 
     var ambLight4 = new THREE.AmbientLight( 0x00ffff,  .9 ); 
     scene4.add(ambLight4);
 
     camera4.position.z = 5;
 
     function animate() {
         requestAnimationFrame( animate );
         renderer4.render( scene4, camera4 );
     }   
 
     animate();
}
        
    /*-----------------------------------------------------functions-----------------------------------------------------*/


    function createSky(name, sunColor, sceneNum, sunHeight, sunSize) {
        var skyGeo = new THREE.SphereGeometry(1000, 50, 50); 
        var loader  = new THREE.TextureLoader(),
        texture = loader.load( "img/" + name + ".jpg" );

        var material = new THREE.MeshPhongMaterial({ 
            map: texture,
        });

        var sky = new THREE.Mesh(skyGeo, material);
        sky.material.side = THREE.BackSide;
        sceneNum.add(sky);

        var sun = new THREE.SphereBufferGeometry( sunSize, 30, 100 );

        var light1 = new THREE.PointLight( sunColor , .1 );
        light1.add( new THREE.Mesh( sun, new THREE.MeshBasicMaterial( { color: sunColor } ) ) );
        light1.position.set(1000, sunHeight, 0);
        sceneNum.add( light1);

        var sunRay = new THREE.DirectionalLight(sunColor , .6);
        sunRay.target.position.set(1000, sunHeight, 0);
        sceneNum.add( sunRay, sunRay.target);

    }

    function orbitC(cameraN) {
        var controls = new THREE.OrbitControls( cameraN );
        controls.maxPolarAngle = Math.PI * 0.495;
                controls.target.set( 0, 10, 0 );
                controls.minDistance = 40.0;
                controls.maxDistance = 200.0;
                cameraN.lookAt( controls.target );
    }


    function onWindowResize(){
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

});