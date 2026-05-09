import * as THREE from 'https://esm.sh/three@0.180.0';

import { GLTFLoader } from 'https://esm.sh/three@0.180.0/examples/jsm/loaders/GLTFLoader.js';

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
  antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);

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

  // gira cada modelo
  models.forEach(model => {
    model.rotation.y += 0.01;
  });

  renderer.render(scene, camera);

}

animate();