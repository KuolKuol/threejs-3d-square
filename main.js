// create scene 
var scene = new THREE.Scene();

// create camera 
// perspective camera is designed to mimic the way the human eye sees 
var camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);


// create renderer
var renderer = new THREE.WebGLRenderer({ antialias: true });

// set size of renderer 
renderer.setSize( window.innerWidth, window.innerHeight );

// add renderer to DOM
document.body.appendChild(renderer.domElement)

// adjust canvas size when window is resized 
function onWindowResize(){
    // Camera frustum aspect ratio
	camera.aspect = window.innerWidth / window.innerHeight;
	// After making changes to aspect
	camera.updateProjectionMatrix();
	// Reset size
	renderer.setSize(window.innerWidth, window.innerHeight);

}

window.addEventListener('resize', onWindowResize, false);


// add Orbit controls
// var controls = new OrbitControls( camera, renderer.domElement );
// controls.update();


// create shape
var geometry = new THREE.BoxGeometry( 1, 1, 1 );

// create material, color or image texture
var material = new THREE.MeshBasicMaterial( { color: 0xffffff , wireframe:true } );

// create mesh
var shape = new THREE.Mesh( geometry, material );

// add shape object to scene
scene.add( shape );

// move camera postion from origin
camera.position.z = 3;


// update logic 
var update = function(){
 
	// Rotate cube (Change values to change speed)
	shape.rotation.x += 0.01;
	shape.rotation.y += 0.01;
	
}

// rendering logic
var render = function(){
	renderer.render(scene, camera);
}

// flow of the scene (update,render,repeat)
var sceneLoop = function(){ 
	//equests that the browser calls a specified function to update an animation before the next repaint.
	requestAnimationFrame(sceneLoop);
	update();
	render();
}

// run scene loop
sceneLoop();

