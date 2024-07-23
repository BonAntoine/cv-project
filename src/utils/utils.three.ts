import {
    PlaneGeometry,
    MeshStandardMaterial,
    Mesh,
    TextureLoader,
    DirectionalLight,
    DirectionalLightHelper,
} from "three";

function createTerrain(props: any) {
    const loader = new TextureLoader();
    const height = loader.load("cv-project/ressources/height.png");

    const geometry = new PlaneGeometry(150, 150, 64, 64);

    const material = new MeshStandardMaterial({
        color: props.color,
        flatShading: true,
        displacementMap: height,
        displacementScale: 5,
    });

    const plane = new Mesh(geometry, material);
    plane.position.set(0, -20, 0);
    plane.rotation.x -= Math.PI * 0.45;

    return plane;
}

function createLight(color: string) {
    const light = new DirectionalLight(color, 4);
    const lightHelper = new DirectionalLightHelper(light, 0);
    light.position.set(0, 0, 5);
    //  light.tick = (delta) => {

    // };
    return { light, lightHelper };
}

export { createTerrain, createLight };