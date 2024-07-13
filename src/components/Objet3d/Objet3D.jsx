// Object3DViewer.jsx
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import PropTypes from 'prop-types';

const Model = ({ path }) => {
  const gltf = useLoader(GLTFLoader, path);
  return <primitive object={gltf.scene} />;
};

Model.propTypes = {
  path: PropTypes.string.isRequired,
};

const Object3DViewer = () => {
  return (
    <Canvas style={{ height: '100vh', width: '100vw' }}>
      <Suspense fallback={null}>
        <Model path="/objet3d/your-model-file.gltf" />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default Object3DViewer;
