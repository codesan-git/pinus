'use client'
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations, Environment, OrbitControls } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Canvas } from '@react-three/fiber'
import * as THREE from "three";

type GLTFResult = GLTF & {
    nodes: {
        Cube000: THREE.SkinnedMesh;
        Cube000_1: THREE.SkinnedMesh;
        Cube000_2: THREE.SkinnedMesh;
        Cube000_3: THREE.SkinnedMesh;
        Cube000_4: THREE.SkinnedMesh;
        Body: THREE.Bone;
        Head: THREE.Bone;
    };
    materials: {
        Ninja_Main: THREE.MeshStandardMaterial;
        Ninja_Secondary: THREE.MeshStandardMaterial;
        Eye_Black: THREE.MeshStandardMaterial;
        Eye_White: THREE.MeshStandardMaterial;
        Gold: THREE.MeshStandardMaterial;
    };
    animations: GLTFActions[];
};

type ActionName =
    | "Bite_Front"
    | "Dance"
    | "Death"
    | "HitRecieve"
    | "Idle"
    | "Jump"
    | "No"
    | "Walk"
    | "Yes";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

function NinjaModel(props: JSX.IntrinsicElements["group"]) {
    const group = useRef<THREE.Group>(null);
    const { nodes, materials, animations } = useGLTF("/models/Ninja.gltf") as GLTFResult;
    const { actions } = useAnimations(animations, group);
    const [animationName, setAnimationName] = useState("Jump");
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const action = actions[animationName];

        if (action) {
            if (isHovered) {
                action.reset().fadeIn(0.5).play();
            } else {
                action.fadeOut(0.5).stop();
            }
        }
    }, [animationName, isHovered, actions]);

    const handleClick = () => {
        setAnimationName((prevAnimation) =>
            prevAnimation === "Jump" ? "Dance" : "Jump"
        );
    };

    const handlePointerOver = () => {
        setIsHovered(true);
    };

    const handlePointerOut = () => {
        setIsHovered(false);
    };

    console.log(animationName)
    console.log(isHovered)

    return (
        <group
            ref={group}
            {...props}
            dispose={null}
            onClick={handleClick}
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
        >
            <group name="Scene">
                <group
                    name="CharacterArmature"
                    userData={{ name: "CharacterArmature" }}
                >
                    <group name="Ninja_Blob001" userData={{ name: "Ninja_Blob.001" }}>
                        <skinnedMesh
                            name="Cube000"
                            geometry={nodes.Cube000.geometry}
                            material={materials.Ninja_Main}
                            skeleton={nodes.Cube000.skeleton}
                        />
                        <skinnedMesh
                            name="Cube000_1"
                            geometry={nodes.Cube000_1.geometry}
                            material={materials.Ninja_Secondary}
                            skeleton={nodes.Cube000_1.skeleton}
                        />
                        <skinnedMesh
                            name="Cube000_2"
                            geometry={nodes.Cube000_2.geometry}
                            material={materials.Eye_Black}
                            skeleton={nodes.Cube000_2.skeleton}
                        />
                        <skinnedMesh
                            name="Cube000_3"
                            geometry={nodes.Cube000_3.geometry}
                            material={materials.Eye_White}
                            skeleton={nodes.Cube000_3.skeleton}
                        />
                        <skinnedMesh
                            name="Cube000_4"
                            geometry={nodes.Cube000_4.geometry}
                            material={materials.Gold}
                            skeleton={nodes.Cube000_4.skeleton}
                        />
                    </group>
                    <primitive object={nodes.Body} />
                    <primitive object={nodes.Head} />
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/models/Ninja.gltf");

export default function Ninja() {
    return (
        <>
            <Canvas className="py-20">
                <NinjaModel />
                <Environment preset="sunset" />
                <OrbitControls enableZoom={false} />
            </Canvas>
        </>
    )
}