import {
    PlaneGeometry,
    MeshStandardMaterial,
    Mesh,
    TextureLoader,
    DirectionalLight,
    DirectionalLightHelper,
    Scene,
    Object3DEventMap,
    Group,
    Object3D,
    MeshToonMaterial,
} from "three";
import { FBXLoader, GLTF, GLTFLoader } from "three/examples/jsm/Addons.js";
import { LogoFileInfo, logoFileList } from "./constant";

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
    return { light, lightHelper };
}

const loader = new FBXLoader();
const loaderGlb = new GLTFLoader();

async function importFbx(modelName: string): Promise<Group<Object3DEventMap>> {
    return loader.loadAsync("cv-project/ressources/models/" + modelName);
}
async function importGlb(modelName: string): Promise<GLTF> {
    return loaderGlb.loadAsync("cv-project/ressources/models/" + modelName);
}

function setModelProperty(
    model: Group<Object3DEventMap>,
    logoFileInfo: LogoFileInfo,
    group: Group,
    scale: number
) {
    model.name = logoFileInfo.name.slice(0, logoFileInfo.name.lastIndexOf("."));
    model.position.set(-100, -100, -100);
    model.scale.set(scale, scale, scale);
    model.children.forEach((child) => {
        child.children.forEach((c) => {
            logoFileInfo.texture.forEach((texture) => {
                    if (c.name === texture.meshName) {
                        (c as Mesh).material = texture.material;
                    }
                });
        });
    });
    group.add(model);
}

function setModelsInGrid(
    models: Array<Object3D | undefined>,
    objectPerLine: number
) {
    let lineCount = 0;
    models.forEach((model, index) => {
        if (model) {
            if (index % objectPerLine === 0) {
                lineCount += 1;
            }
            model.position.set(
                (index - lineCount * objectPerLine) * 0.2,
                -(lineCount * 0.2),
                0
            );
        }
    });
}

function getOutModels(models: Array<Object3D | undefined>) {
    models.forEach((model) => {
        if (model) {
            model.position.set(-100, -100, -100);
        }
    });
}

function animateModels(models: Array<Object3D | undefined>) {
    models.forEach((model) => {
        if (model) {
            const time = Date.now() * 0.001; // time in seconds
            const oscillation = Math.sin(time); // oscillates between -1 and 1
            // Define yRotation a value osciallating between -0.4 and 0.4 with the oscillation value + gap
            const yRotation = oscillation * 0.4 + 0.2;
            
            model.rotation.y = yRotation;
        }
    });
}

export {
    createTerrain,
    createLight,
    importFbx,
    setModelProperty,
    setModelsInGrid,
    getOutModels,
    animateModels,
    importGlb,
};
