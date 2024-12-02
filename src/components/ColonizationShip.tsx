import React, { useEffect, useRef, useState, memo, useCallback } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const ColonizationShip: React.FC = memo(() => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const sceneRef = useRef<{
    scene?: THREE.Scene,
    camera?: THREE.PerspectiveCamera,
    renderer?: THREE.WebGLRenderer,
    controls?: OrbitControls,
    animationFrameId?: number
  }>({});

  const [modelState, setModelState] = useState({
    loaded: false,
    error: false
  });

  const cleanupScene = useCallback(() => {
    const { scene, renderer, controls, animationFrameId } = sceneRef.current;
    
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }

    if (controls) controls.dispose();
    if (renderer) {
      renderer.dispose();
      renderer.domElement.remove();
    }
    if (scene) {
      scene.clear();
    }

    sceneRef.current = {};
  }, []);

  useEffect(() => {
    if (!mountRef.current) return cleanupScene;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45, 
      mountRef.current.clientWidth / mountRef.current.clientHeight, 
      0.1, 
      1000
    );
    camera.position.set(0, 10, 50);

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0x404040, 1.5);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(ambientLight, directionalLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.3;

    const fallbackGeometry = new THREE.BoxGeometry(20, 10, 5);
    const fallbackMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x64b5f6, 
      transparent: true, 
      opacity: 0.5 
    });
    const fallbackMesh = new THREE.Mesh(fallbackGeometry, fallbackMaterial);

    const loader = new GLTFLoader();
    loader.load(
      '/assets/3d-models/colonization_ship.glb', 
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(10, 10, 10);
        model.position.set(0, 0, 0);
        scene.add(model);

        setModelState({ loaded: true, error: false });

        let frameId = 0;
        const animate = () => {
          frameId = requestAnimationFrame(animate);
          
          model.position.y += Math.sin(Date.now() * 0.001) * 0.02;
          controls.update();
          renderer.render(scene, camera);
        };
        
        sceneRef.current = { 
          scene, 
          camera, 
          renderer, 
          controls, 
          animationFrameId: frameId 
        };
        
        animate();
      },
      undefined,
      (error) => {
        console.error('Model loading error:', error);
        scene.add(fallbackMesh);
        setModelState({ loaded: false, error: true });
      }
    );

    const handleResize = () => {
      if (!mountRef.current) return;
      
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cleanupScene();
    };
  }, [cleanupScene]);

  return (
    <div 
      ref={mountRef} 
      className={`absolute inset-0 -z-20 transition-all duration-500 
        ${modelState.loaded ? 'opacity-50' : 'opacity-30'}
        ${modelState.error ? 'brightness-50 contrast-50' : 'brightness-70 contrast-120'}`}
    >
      {modelState.error && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-blue-300">
          <p>Unable to load 3D model</p>
          <p>Displaying fallback visualization</p>
        </div>
      )}
    </div>
  );
});

ColonizationShip.displayName = 'ColonizationShip';
export default ColonizationShip;
