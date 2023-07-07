import React, { Suspense } from 'react'
import { OrbitControls, PerspectiveCamera, Environment, Float } from "@react-three/drei";
import { EffectComposer, HueSaturation, ChromaticAberration, GodRays, DepthOfField, BrightnessContrast } from "@react-three/postprocessing";
import { BlendFunction, Resizer, KernelSize } from "postprocessing";
import { Color, CylinderGeometry, Mesh, MeshBasicMaterial } from "three";

import { FloatingIsland, FloatingRocks, Grass, Particles, Rocks, Trees, Words } from "./Index"

export default function Scene() {
    let lightColor = new Color(1, 0.2, 0.1);
    let mesh = new Mesh(
        new CylinderGeometry(0.3, 0.3, 0.2, 20),
        new MeshBasicMaterial({
            color: lightColor,
            transparent: true,
            opacity: 1,
        })
    );
    mesh.rotation.x = Math.PI * 0.5;
    mesh.position.set(1.17, 10.7, -4.1);
    mesh.scale.set(1.5, 1, 1);

    return (
        <Suspense fallback={null}>
            <Environment background={"only"} files={"/assets/Textures/bg.hdr"} />
            <Environment background={false} files={"/assets/Textures/envmap.hdr"} />

            <PerspectiveCamera makeDefault fov={50} position={[-1.75, 10.85, 20.35]} />
            <OrbitControls target={[1, 5, 0]} maxPolarAngle={Math.PI * 0.5} />

            <Float
                speed={0.5}
                rotationIntensity={0.6}
                floatIntensity={0.6}
            >
                <primitive object={mesh} />
                <spotLight
                    penumbra={1}
                    distance={500}
                    angle={60.65}
                    attenuation={1}
                    anglePower={3}
                    intensity={0.3}
                    color={lightColor}
                    position={[1.19, 10.85, -4.45]}
                    target-position={[0, 0, -1]}
                />

                <FloatingIsland />
                <Trees />
                <Rocks />
                <Grass />
                <Particles />
                <Words />
            </Float>

            <FloatingRocks />
        </Suspense>
    )
}
