import * as THREE from 'https://esm.sh/three@0.180.0';
import { GLTFLoader } from 'https://esm.sh/three@0.180.0/examples/jsm/loaders/GLTFLoader.js';

import sceneLights from './light.js';
import cameraLoad from './camera.js';
import loadObjects from './loader.js';

const scene = new THREE.Scene();
const canvasScene = document.getElementById("scene");

const renderer = new THREE.WebGLRenderer({canvas: canvasScene, antialias: true, alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);

sceneLights(scene, renderer, THREE);
const camera = cameraLoad(THREE);

let objects = [];
loadObjects(new GLTFLoader(), scene, (loadedObjects) => {objects = loadedObjects;});

function animate() {

    requestAnimationFrame(animate);

    objects.forEach(object => {
        object.rotation.y += 0.01;
    });

    renderer.render(scene, camera);
}

animate();