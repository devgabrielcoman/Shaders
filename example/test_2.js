// create the scene
var scene = new THREE.Scene();

var WIDTH = 0.8 * window.innerWidth;
var HEIGHT = window.innerHeight;

// create the camera
var camera = new THREE.PerspectiveCamera( 75, WIDTH/HEIGHT, 0.1, 1000 );

// create the controls
var controls = new THREE.OrbitControls( camera );
controls.minDistance = 10;
controls.maxDistance = 30;
controls.noPan = true;

// create the renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(WIDTH, HEIGHT);
var docrend = document.getElementById('renderer');
docrend.appendChild( renderer.domElement );

// define the geometry
var cube1 = new THREE.Mesh(
	new THREE.BoxGeometry(2, 2, 2), 
	new THREE.ShaderMaterial({
		uniforms: {
		    color: { type: "v3", value: new THREE.Vector3(1, 0, 0) }
		},
		vertexShader:  loadShader('shaders/shader_2.vertex'),
	    fragmentShader: loadShader('shaders/shader_2.fragment')
	})
);
var cube2 = new THREE.Mesh(
	new THREE.BoxGeometry(20, 0.1, 20), 
	new THREE.ShaderMaterial({
		uniforms: {
		    color: { type: "v3", value: new THREE.Vector3(0, 1, 0) }
		},
		vertexShader:  loadShader('shaders/shader_2.vertex'),
	    fragmentShader: loadShader('shaders/shader_2.fragment')
	})
);
var cube3 = new THREE.Mesh(
	new THREE.BoxGeometry(20, 10, 0.1), 
	new THREE.ShaderMaterial({
		uniforms: {
		    color: { type: "v3", value: new THREE.Vector3(0, 0, 1) }
		},
		vertexShader:  loadShader('shaders/shader_2.vertex'),
	    fragmentShader: loadShader('shaders/shader_2.fragment')
	})
);

// do some additional setup
cube1.position.set(0, 0, 3);
cube2.position.set(0, -1, 0);
cube3.position.set(0, 4, -10);

// add cubes
scene.add(cube1);
scene.add(cube2);
scene.add(cube3);

// the basic render loop function
var render = function () {
	requestAnimationFrame( render );
	controls.update();
	renderer.render(scene, camera);
};

render();