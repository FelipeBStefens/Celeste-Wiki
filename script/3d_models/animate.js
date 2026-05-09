let radius = 500;
let targetRadius = 280;

let theta = 1.7;
let phi = Math.PI / 2.2;

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

    if (!mouseDown) {
        return;
    }

    theta += event.movementX * 0.001;
    phi -= event.movementY * 0.001;
    phi = Math.max(0.1, Math.min(Math.PI / 2, phi));
});

document.addEventListener('wheel', (event) => {

    targetRadius += event.deltaY * 0.5;
    targetRadius = Math.max(100, Math.min(1000, targetRadius));
});

export default function animate(camera) {

    camera.position.x = radius/3 * Math.sin(phi) * Math.cos(theta);
    camera.position.y = radius/3 * Math.cos(phi);
    camera.position.z = radius/3 * Math.sin(phi) * Math.sin(theta);

    radius += (targetRadius - radius) * 0.1;
    camera.lookAt(0, 20, 0);
}