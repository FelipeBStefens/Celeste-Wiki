const CLICKABLE_AREAS = [];

function portalAreasModel(position, size, url, scene, THREE) {

    const mesh = new THREE.Mesh(
        new THREE.BoxGeometry(size.x, size.y, size.z),
        new THREE.MeshBasicMaterial({transparent: true, opacity: 0})
    );

    mesh.position.set(position.x, position.y, position.z);
    mesh.userData.url = url;

    scene.add(mesh);
    CLICKABLE_AREAS.push(mesh);

    return mesh;
}

export function createPortalAreas(scene, THREE) {

    portalAreasModel(
        { x: -20, y: 55, z: 0 }, { x: 15, y: 15, z: 15 }, 
        './pages/core.html', scene, THREE
    );

    portalAreasModel(
        { x: -50, y: 10, z: -10 }, { x: 20, y: 20, z: 20 },
        './pages/reflection.html', scene, THREE
    );

    portalAreasModel(
        { x: -2.5, y: 125, z: -6 }, { x: 10, y: 10, z: 10 },
        './pages/the_summit.html', scene, THREE
    );

    portalAreasModel(
        { x: -10, y: 7, z: 67 }, { x: 7, y: 7, z: 7 },
        './pages/prologue.html', scene, THREE
    );

    portalAreasModel(
        { x: -22, y: 40, z: 27 }, { x: 10, y: 10, z: 10 },
        './pages/old_site.html', scene, THREE
    );

    portalAreasModel(
        { x: 50, y: 65, z: 15 }, { x: 15, y: 15, z: 15 },
        './pages/celestial_resort.html', scene, THREE
    );

    portalAreasModel(
        { x: 50, y: 55, z: -20 }, { x: 17, y: 17, z: 17 },
        './pages/golden_ridge.html', scene, THREE
    );

    portalAreasModel(
        { x: -3, y: 90, z: -20 }, { x: 15, y: 15, z: 15 },
        './pages/mirror_temple.html', scene, THREE
    );

    portalAreasModel(
        { x: -5, y: 317, z: 9 }, { x: 20, y: 20, z: 20 },
        './pages/farewell.html', scene, THREE
    );

    portalAreasModel(
        { x: 13, y: 8, z: 55 }, { x: 10, y: 10, z: 10 },
        './pages/forsaken_city.html', scene, THREE
    );

    portalAreasModel(
        { x: 13, y: 13, z: 45 }, { x: 10, y: 10, z: 10 },
        './pages/forsaken_city.html', scene, THREE
    );

    portalAreasModel(
        { x: 5, y: 20, z: 35 }, { x: 10, y: 10, z: 10 },
        './pages/forsaken_city.html', scene, THREE
    );
};

export function clickAreas(event, raycaster, mouse, camera) {

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(CLICKABLE_AREAS);

    if (intersects.length > 0) {

        const clicked = intersects[0].object;

        const url = clicked.userData.url;
        window.location.href = url;
    }
}

export function hoverAreas(event, raycaster, mouse, camera) {

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(CLICKABLE_AREAS);

    if (intersects.length > 0) {

        document.body.style.cursor = 'pointer';
    } 
    else {

        document.body.style.cursor = 'default';
    }
}