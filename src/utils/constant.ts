import { MeshStandardMaterial } from "three";

export interface LogoFileInfo {
    name: string;
    texture: { meshName: string; material: MeshStandardMaterial }[];
}

const logoFileList: LogoFileInfo[] = [
    {
        name: "css.fbx",
        texture: [
            {
                meshName: "back",
                material: new MeshStandardMaterial({
                    color: 0xffffff,
                    roughness: 0,
                }),
            },
            {
                meshName: "LOGO",
                material: new MeshStandardMaterial({
                    color: 0x2d53e5,
                    roughness: 0,
                }),
            },
            {
                meshName: "LOGO_1",
                material: new MeshStandardMaterial({
                    color: 0x306af1,
                    roughness: 0,
                }),
            },
            {
                meshName: "LOGO_2",
                material: new MeshStandardMaterial({
                    color: 0xffffff,
                    roughness: 1,
                }),
            },
        ],
    },
    {
        name: "docker.glb",
        texture: [
        ],
    },
    {
        name: "git.fbx",
        texture: [
            {
                meshName: "back",
                material: new MeshStandardMaterial({
                    color: 0xffffff,
                    roughness: 0,
                }),
            },
            {
                meshName: "LOGO",
                material: new MeshStandardMaterial({
                    color: 0xf34f29,
                    roughness: 0,
                }),
            },
        ],
    },
    {
        name: "go.fbx",
        texture: [
            {
                meshName: "back",
                // TODO : shaders
                material: new MeshStandardMaterial({
                    color: 0x30b1aa,
                    roughness: 0,
                }),
            },
            {
                meshName: "LOGO",
                material: new MeshStandardMaterial({
                    color: 0xffffff,
                    roughness: 0,
                }),
            },
        ],
    },
    {
        name: "html5.fbx",
        texture: [
            {
                meshName: "back",
                material: new MeshStandardMaterial({
                    color: 0xffffff,
                    roughness: 0,
                }),
            },
            {
                meshName: "LOGO",
                material: new MeshStandardMaterial({
                    color: 0xe5532d,
                    roughness: 0,
                }),
            },
            {
                meshName: "LOGO_1",
                material: new MeshStandardMaterial({
                    color: 0xf16a30,
                    roughness: 0,
                }),
            },
            {
                meshName: "LOGO_2",
                material: new MeshStandardMaterial({
                    color: 0xffffff,
                    roughness: 0,
                }),
            },
        ],
    },
    {
        name: "NestJS.fbx",
        texture: [
            {
                meshName: "back",
                material: new MeshStandardMaterial({
                    color: 0x000000,
                    roughness: 0,
                }),
            },
            {
                meshName: "LOGO",
                material: new MeshStandardMaterial({
                    color: 0xE0234E,
                    roughness: 0,
                }),
            },
        ],
    },
    {
        name: "React.fbx",
        texture: [
            {
                meshName: "back",
                material: new MeshStandardMaterial({
                    color: 0x000000,
                    roughness: 0,
                }),
            },
            {
                meshName: "LOGO",
                material: new MeshStandardMaterial({
                    color: 0x61dafb,
                    roughness: 0,
                }),
            },
        ],
    },
    {
        name: "Typescript.fbx",
        texture: [
            {
                meshName: "back",
                material: new MeshStandardMaterial({
                    color: 0x377cc8,
                    roughness: 0,
                }),
            },
            {
                meshName: "LOGO",
                material: new MeshStandardMaterial({
                    color: 0xffffff,
                    roughness: 0,
                }),
            },
        ],
    },
    {
        name: "VScode.fbx",
        texture: [
            {
                meshName: "back",
                material: new MeshStandardMaterial({
                    color: 0xffffff,
                    roughness: 0,
                }),
            },
            {
                meshName: "LOGO",
                material: new MeshStandardMaterial({
                    color: 0x087ece,
                    roughness: 0,
                }),
            },
        ],
    },
    {
        name: "Vue.fbx",
        texture: [
            {
                meshName: "back",
                material: new MeshStandardMaterial({
                    color: 0xffffff,
                    roughness: 0,
                }),
            },
            {
                meshName: "LOGO",
                material: new MeshStandardMaterial({
                    color: 0x41b883,
                    roughness: 0,
                }),
            },
            {
                meshName: "LOGO_1",
                material: new MeshStandardMaterial({
                    color: 0x34495e,
                    roughness: 0,
                }),
            },
        ],
    },
    {
        name: "Tailwind.fbx",
        texture: [
            {
                meshName: "back",
                material: new MeshStandardMaterial({
                    color: 0xffffff,
                    roughness: 0,
                }),
            },
            {
                meshName: "LOGO",
                material: new MeshStandardMaterial({
                    color: 0x36b7f0,
                    roughness: 0,
                }),
            },
        ],
    },
    {
        name: "MongoDB.fbx",
        texture: [
            {
                meshName: "back",
                material: new MeshStandardMaterial({
                    color: 0x000000,
                    roughness: 0,
                }),
            },
            {
                meshName: "LOGO",
                material: new MeshStandardMaterial({
                    color: 0xffffff,
                    roughness: 0,
                }),
            },
            {
                meshName: "LOGO_1",
                material: new MeshStandardMaterial({
                    color: 0x8feb74,
                    roughness: 0,
                }),
            },
        ],
    },
];

enum Steps {
    PROFIL = "profil",
    PROEXP = "proExp",
    TRAINING = "training",
    HOBBIES = "hobbies",
}

export { logoFileList, Steps };
