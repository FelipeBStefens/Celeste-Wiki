const MODEL_PATH = [
    '/assets/3d_models/mountain.glb',
    '/assets/3d_models/buildings.glb',
    '/assets/3d_models/moon.glb'
];

export default function loadObjects(loader, scene, callback) {

    let objects = [];
    let loaded = 0;

    function loadScene(gltf) {

        const model = gltf.scene;
        model.position.set(0, 0, 0);
        model.scale.set(10, 10, 10);

        model.traverse((child) => {

            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });

        scene.add(model);
        objects.push(model);

        loaded++;
        if (loaded === MODEL_PATH.length) {
            callback(objects);
        }
    }

    MODEL_PATH.forEach(path => {

        loader.load(path, loadScene);
    });
}