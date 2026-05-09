import * as THREE from 'https://esm.sh/three@0.180.0';
import { gsap } from 'https://cdn.jsdelivr.net/npm/gsap@3.12.5/index.js';
import { GLTFLoader } from 'https://esm.sh/three@0.180.0/examples/jsm/loaders/GLTFLoader.js';

//para a main
let radius = 500;
let targetRadius = 500;

let theta = 0;
let phi = Math.PI / 3;
//para a main

const scene = new THREE.Scene();
const canvasScene = document.getElementById("scene");

scene.background = new THREE.Color('#1B1E2E');

const directionalLight = new THREE.DirectionalLight(
  0xffffff,
  3
);

directionalLight.position.set(50, 50, 50);

scene.add(directionalLight);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.set(30, 400, 500);

camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({
  canvas: canvasScene,
  antialias: true,
  alpha: true
});

const loader = new GLTFLoader();

const models = [];

loader.load(
  '../assets/3d_models/mountain.glb',

  function(gltf) {

    const model = gltf.scene;

    model.position.set(0, 0, 0);

    model.scale.set(10, 10, 10);

    scene.add(model);

    models.push(model);

  }
);

loader.load(
  '../assets/3d_models/buildings.glb',

  function(gltf) {

    const model = gltf.scene;

    model.position.set(0, 0, 0);

    model.scale.set(10, 10, 10);

    scene.add(model);

    models.push(model);

  }
);

loader.load(
  '../assets/3d_models/moon.glb',

  function(gltf) {

    const model = gltf.scene;

    model.position.set(0, 0, 0);

    model.scale.set(10, 10, 10);

    scene.add(model);

    models.push(model);

  }
);

function animate() {

  requestAnimationFrame(animate);
  //dentro do animate
  camera.position.x = radius/3 * Math.sin(phi) * Math.cos(theta);

  camera.position.y = radius/3 * Math.cos(phi);

  camera.position.z = radius/3 * Math.sin(phi) * Math.sin(theta);

  radius += (targetRadius - radius) * 0.1;

  camera.lookAt(0, 20, 0);

  renderer.render(scene, camera);
  //dentro do animate

}

animate();
//movimentação da camera
//camera movement//
let mouseDown = false;

let mouseX = 0;
let mouseY = 0;


document.addEventListener('mousedown', () => {

    mouseDown = true;

});

document.addEventListener('mouseup', () => {

    mouseDown = false;

});

document.addEventListener('mousemove', (event) => {

    if (!mouseDown) return;

    theta += event.movementX * 0.001;

    phi -= event.movementY * 0.001;

    
    // LIMIT TO NORTH HEMISPHERE

    phi = Math.max(0.1, Math.min(Math.PI / 2, phi));

});

document.addEventListener('wheel', (event) => {

    targetRadius += event.deltaY * 0.5;

    targetRadius = Math.max(100, Math.min(1000, targetRadius));

});
//movimentação da camera