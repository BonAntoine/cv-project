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
import { FBXLoader } from "three/examples/jsm/Addons.js";
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

async function importFbx(modelName: string): Promise<Group<Object3DEventMap>> {
    return loader.loadAsync("cv-project/ressources/models/" + modelName);
}

function setModelProperty(
    model: Group<Object3DEventMap>,
    logoFileInfo: LogoFileInfo,
    group: Group
) {
    model.name = logoFileInfo.name;
    model.position.set(-100, -100, -100);
    model.scale.set(0.01, 0.01, 0.01);
    model.children.forEach((child) => {
        child.children.forEach((c) => {
            console.log(c.name)
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
    models.forEach((model, index) => {
        if (model) {
            model.position.set(-100, -100, -100);
        }
    });
}

function animateModels(models: Array<Object3D | undefined>) {
    models.forEach((model, index) => {
        if (model) {
            const time = Date.now() * 0.001;
            model.rotation.y += Math.sin(time) * 0.005;
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
};
