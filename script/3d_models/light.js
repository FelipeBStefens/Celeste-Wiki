export default function sceneLights(scene, renderer, THREE) {

    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(window.devicePixelRatio);

    renderer.shadowMap.enabled = true;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.82;

    const moonLight = new THREE.DirectionalLight(
        0xe8eeff,
        1.75
    );
    moonLight.position.set(190, 50, 80);
    moonLight.castShadow = true;
    scene.add(moonLight);

    const hemi = new THREE.HemisphereLight(
        0x6a52ff, 
        0x101a2e, 
        0.75
    );
    scene.add(hemi);

    const heartLight = new THREE.PointLight(
        0xff3b3b,
        400,
        2500
    );
    heartLight.position.set(-20, 55, 0);
    scene.add(heartLight);

    const caveLight = new THREE.PointLight(
        0x36da95,
        1000,
        10500
    );
    caveLight.position.set(-50, 10, -10);
    scene.add(caveLight);

    const summitLight = new THREE.PointLight(
        0xf532d5,
        400,
        10,
        0.5
    );
    summitLight.position.set(-2.5, 125, -6);
    scene.add(summitLight);

    const houseLight = new THREE.PointLight(
        0xffffff,
        400,
        10
    );
    houseLight.position.set(-10, 7, 67);
    scene.add(houseLight);

    const cityLightOne = new THREE.PointLight(
        0x000357,
        1000,
        30,
        1
    );
    cityLightOne.position.set(13, 8, 55);
    scene.add(cityLightOne);

    const cityLightTwo = new THREE.PointLight(
        0x000357,
        1000,
        30,
        1
    );
    cityLightTwo.position.set(13, 13, 45);
    scene.add(cityLightTwo);

    const cityLightThree = new THREE.PointLight(
        0x000357,
        1000,
        30,
        1
    );
    cityLightThree.position.set(5, 20, 35);
    scene.add(cityLightThree);

    const siteLight = new THREE.PointLight(
        0x31003a,
        1000,
        15,
        0.5
    );
    siteLight.position.set(-22, 40, 27);
    scene.add(siteLight);

    const hotelLight = new THREE.PointLight(
        0x003300,
        1000,
        15,
        0.5
    );
    hotelLight.position.set(50, 65, 15);
    scene.add(hotelLight);

    const goldenLight = new THREE.PointLight(
        0xffd000,
        400,
        3000
    );
    goldenLight.position.set(50, 55, -20);
    scene.add(goldenLight);

    const templeLight = new THREE.PointLight(
        0x4c0000,
        4000,
        15,
        1
    );
    templeLight.position.set(-3, 90, -20);
    scene.add(templeLight);

    const farewellLight = new THREE.PointLight(
        0xffed29,
        500,
        300
    );
    farewellLight.position.set(-5, 317, 9);
    scene.add(farewellLight);   
};