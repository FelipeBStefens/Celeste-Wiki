import * as THREE from 'https://esm.sh/three@0.180.0';
import { gsap } from 'https://cdn.jsdelivr.net/npm/gsap@3.12.5/index.js';
import { GLTFLoader } from 'https://esm.sh/three@0.180.0/examples/jsm/loaders/GLTFLoader.js';

import sceneLights from './light.js';
import cameraLoad from './camera.js';
import loadObjects from './loader.js';
import animate from './animate.js';
import { createPortalAreas, clickAreas, hoverAreas } from './redirect.js';

const scene = new THREE.Scene();
const canvasScene = document.getElementById("scene");

const renderer = new THREE.WebGLRenderer({canvas: canvasScene, antialias: true, alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);

sceneLights(scene, renderer, THREE);
const camera = cameraLoad(THREE);

let objects = [];
loadObjects(new GLTFLoader(), scene, (loadedObjects) => {objects = loadedObjects;});

createPortalAreas(scene, THREE);
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

window.addEventListener('click', (event) => { clickAreas(event, raycaster, mouse, camera) });
window.addEventListener('mousemove', (event) => { hoverAreas(event, raycaster, mouse, camera) });

function generate() {

    requestAnimationFrame(generate);

    animate(camera);
    renderer.render(scene, camera);
}

generate();