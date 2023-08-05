import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "./ThreeScene.css";
const MyThreeComponent = ({ speedValue, colorValue }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Set up the Three.js scene
    const scene = new THREE.Scene();

    // Set up the camera
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 10);

    // Set up the renderer
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Create the Sphere
    const geometry = new THREE.SphereGeometry(3, 64, 64);
    const material = new THREE.MeshPhongMaterial({ color: colorValue });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Add lights to the scene
    const ambientLight = new THREE.AmbientLight(0xffffff, 0);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(1, 10, 10);
    scene.add(pointLight);

    // Add the camera and the controls to the scene
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed += speedValue;

    // Render the scene HERE
    const render = () => {
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    };
    render();
  }, [speedValue, colorValue]);

  return <canvas ref={canvasRef} className="canvas" />;
};

export default MyThreeComponent;
