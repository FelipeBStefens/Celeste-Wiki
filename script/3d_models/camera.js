
export default function cameraLoad(THREE) {

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    camera.position.set(100, 30, 10);
    camera.lookAt(0, 0, 0);

    return camera;
}