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

camera.position.set(0, 20, 120);

camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({
  canvas: canvasScene,
  antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);

const loader = new GLTFLoader();
loader.load(
  '../assets/3d_models/celeste_mountain.glb',

  function(gltf) {

    const model = gltf.scene;

    scene.add(model);

    const helper = new THREE.BoxHelper(model, 0xff0000);

    scene.add(helper);

  }
);

function animate() {

  requestAnimationFrame(animate);

  scene.rotation.y += 0.01;

  renderer.render(scene, camera);

}

animate();