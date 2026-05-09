
export default function sceneLights(scene, renderer, THREE) {

    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(window.devicePixelRatio);

    renderer.shadowMap.enabled = true;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    const moonLight = new THREE.DirectionalLight(0x7aa2ff, 2);
    moonLight.position.set(200, 200, 150);
    moonLight.castShadow = true;
    scene.add(moonLight);
    
    const ambientLight = new THREE.AmbientLight(0x4b3f72, 1.2);
    scene.add(ambientLight);
    
    const rimLight = new THREE.DirectionalLight(0xffb36b, 0.4);
    rimLight.position.set(-200, 100, -100);
    scene.add(rimLight);
}