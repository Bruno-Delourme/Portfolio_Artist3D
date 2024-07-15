// Object3DViewer.jsx
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { useLoader } from '@react-three/fiber';
import PropTypes from 'prop-types';

const Model = ({ path }) => {
  const obj = useLoader(OBJLoader, path);

  // Ajout pour vérifier le chargement du modèle
  console.log(obj);

  return <primitive object={obj} />;
};

Model.propTypes = {
  path: PropTypes.string.isRequired,
};

const Object3DViewer = () => {
  return (
    <Canvas style={{ height: '100vh', width: '100vw' }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />  {/* Ajout d'une lumière ambiante */}
        <directionalLight position={[0, 5, 5]} intensity={1} />  {/* Ajout d'une lumière directionnelle */}
        <Model path="/objet3d/Procedural_Eyes.Obj.obj" />  {/* Chemin vers le modèle 3D */}
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default Object3DViewer;
