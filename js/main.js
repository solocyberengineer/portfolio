import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const loader = new GLTFLoader();

// The Space
const scene = new THREE.Scene();
// scene.background = new THREE.Color( 0x44aa55 );
scene.background = new THREE.Color( 0x50ff50 );
// scene.fog = new THREE.Fog( 0xffffff, 0.015, 100 );

// The Camera/Viewpoint
const camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 1000 );

// The Graphics Renderer
const renderer = new THREE.WebGLRenderer();

// The Window Size
renderer.setSize( window.innerWidth, window.innerHeight );

// Adding the Window
document.body.appendChild( renderer.domElement );

// Defining the a shape
const geometry = new THREE.BoxGeometry( 2, 2, 2 );

// Defining the a material
const material = new THREE.MeshBasicMaterial( { color: 0xa000ff } );

// Creating a object with defined shape and material
const cube = new THREE.Mesh( geometry, material );

// Adding the Shape to the Space/Scene
// scene.add( cube );

// Positioning the camera on the z-axis
camera.position.set(0.06,0,0.1)
// camera.rotation.set(-0.5,0,0)


const light = new THREE.DirectionalLight(0xffffff, 1)
// const light = new THREE.AmbientLight( 0xffffff, 1 );
light.position.set(0,10,4)
light.rotation.set(1,1,1)
scene.add(light)


loader.load( './3d_Objects/DevRoom.glb', function ( glb ) {
    const obj =  glb.scene;
    obj.rotation.set(0,-0.5,0)
    camera.lookAt(obj.position)
    console.log(obj)
	scene.add( obj );
}, undefined, function ( error ) {
	console.error( error );
} );

function animate() {
	requestAnimationFrame( animate );
    // camera.rotation.x += 0.01
    // camera.position.z -= 0.01
    camera.lookAt(0,0,0)
	renderer.render( scene, camera );
}

animate();