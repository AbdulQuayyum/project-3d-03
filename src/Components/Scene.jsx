import React, { Suspense } from 'react'
import { OrbitControls, PerspectiveCamera, Environment, Float } from "@react-three/drei";
import { EffectComposer, HueSaturation, ChromaticAberration, GodRays, DepthOfField, BrightnessContrast } from "@react-three/postprocessing";
import { BlendFunction, Resizer, KernelSize } from "postprocessing";
import { Color, CylinderGeometry, Mesh, MeshBasicMaterial } from "three";

export default function Scene() {
    return (
        <Suspense fallback={null}>
            <Environment background={"only"} files={"/assets/Textures/bg.hdr"} />
            <Environment background={false} files={"/assets/Textures/envmap.hdr"} />

            <PerspectiveCamera makeDefault fov={50} position={[-1.75, 10.85, 20.35]} />
            <OrbitControls target={[1, 5, 0]} maxPolarAngle={Math.PI * 0.5} />
        </Suspense>
    )
}
