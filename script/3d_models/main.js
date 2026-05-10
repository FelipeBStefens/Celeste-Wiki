import * as THREE from 'https://esm.sh/three@0.180.0';
import { gsap } from 'https://cdn.jsdelivr.net/npm/gsap@3.12.5/index.js';
import { GLTFLoader } from 'https://esm.sh/three@0.180.0/examples/jsm/loaders/GLTFLoader.js';

import sceneLights from './light.js';
import cameraLoad from './camera.js';
import loadObjects from './loader.js';
import animate from './animate.js';

const scene = new THREE.Scene();
const canvasScene = document.getElementById("scene");

const renderer = new THREE.WebGLRenderer({canvas: canvasScene, antialias: true, alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);

sceneLights(scene, renderer, THREE);
const camera = cameraLoad(THREE);

let objects = [];
loadObjects(new GLTFLoader(), scene, (loadedObjects) => {objects = loadedObjects;});

const clickableAreas = [];

function createPortalArea({
    position,
    size,
    url,
    scene,
    THREE
}) {

    const mesh = new THREE.Mesh(

        new THREE.BoxGeometry(
            size.x,
            size.y,
            size.z
        ),

        new THREE.MeshBasicMaterial({
            transparent: true,
            opacity: 0
        })
    );

    mesh.position.set(
        position.x,
        position.y,
        position.z
    );

    mesh.userData.url = url;

    scene.add(mesh);

    clickableAreas.push(mesh);

    return mesh;
}

createPortalArea({
    position: { x: -20, y: 55, z: 0 },
    size: { x: 15, y: 15, z: 15 },
    url: '/pages/core.html',
    scene,
    THREE
});

createPortalArea({
    position: { x: -50, y: 10, z: -10 },
    size: { x: 20, y: 20, z: 20 },
    url: '/pages/reflection.html',
    scene,
    THREE
});

createPortalArea({
    position: { x: -2.5, y: 125, z: -6 },
    size: { x: 10, y: 10, z: 10 },
    url: '/pages/the_summit.html',
    scene,
    THREE
});

createPortalArea({
    position: { x: -10, y: 7, z: 67 },
    size: { x: 7, y: 7, z: 7 },
    url: '/pages/prologue.html',
    scene,
    THREE
});

createPortalArea({
    position: { x: -22, y: 40, z: 27 },
    size: { x: 10, y: 10, z: 10 },
    url: '/pages/old_site.html',
    scene,
    THREE
});

createPortalArea({
    position: { x: 50, y: 65, z: 15 },
    size: { x: 15, y: 15, z: 15 },
    url: '/pages/celestial_resort.html',
    scene,
    THREE
});

createPortalArea({
    position: { x: 50, y: 55, z: -20 },
    size: { x: 17, y: 17, z: 17 },
    url: '/pages/golden_ridge.html',
    scene,
    THREE
});

createPortalArea({
    position: { x: -3, y: 90, z: -20 },
    size: { x: 15, y: 15, z: 15 },
    url: '/pages/mirror_temple.html',
    scene,
    THREE
});

createPortalArea({
    position: { x: -5, y: 317, z: 9 },
    size: { x: 20, y: 20, z: 20 },
    url: '/pages/farewell.html',
    scene,
    THREE
});

createPortalArea({
    position: { x: 13, y: 8, z: 55 },
    size: { x: 10, y: 10, z: 10 },
    url: '/pages/forsaken_city.html',
    scene,
    THREE
});

createPortalArea({
    position: { x: 13, y: 13, z: 45 },
    size: { x: 10, y: 10, z: 10 },
    url: '/pages/forsaken_city.html',
    scene,
    THREE
});

createPortalArea({
    position: { x: 5, y: 20, z: 35 },
    size: { x: 10, y: 10, z: 10 },
    url: '/pages/forsaken_city.html',
    scene,
    THREE
});

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

window.addEventListener('click', (event) => {

    mouse.x =
        (event.clientX / window.innerWidth) * 2 - 1;

    mouse.y =
        -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects =
        raycaster.intersectObjects(clickableAreas);

    if (intersects.length > 0) {

        const clicked = intersects[0].object;

        const url = clicked.userData.url;

        window.location.href = url;
    }

});

window.addEventListener('mousemove', (event) => {

    mouse.x =
        (event.clientX / window.innerWidth) * 2 - 1;

    mouse.y =
        -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects =
        raycaster.intersectObjects(clickableAreas);

    if (intersects.length > 0) {

        document.body.style.cursor = 'pointer';

    } else {

        document.body.style.cursor = 'default';
    }

});


function generate() {

    requestAnimationFrame(generate);

    animate(camera);
    renderer.render(scene, camera);
}

generate();