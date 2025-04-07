import React, { useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { GLView } from 'expo-gl';
import * as THREE from 'three';
import { Renderer } from 'expo-three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function App() {
  const glViewRef = useRef(null);
  const cameraRef = useRef();
  const [lastTouch, setLastTouch] = useState();
  const [distance, setDistance] = useState(50);
  
    const onContextCreate = async (gl: any) => {
      // scene
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        gl.drawingBufferWidth / gl.drawingBufferHeight,
        0.1,
        1000
      );
      cameraRef.current = camera;
  
      const renderer = new Renderer({ gl });
      renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);
  
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
      scene.add(ambientLight);
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
      directionalLight.position.set(0, 1, 1);
      scene.add(directionalLight);
  
      camera.position.set(0, 0, 5); // camera positon
  
      // READ ME I used free version of tinyglb if you download my repo and see nothing it's because this link is no longer available
      try {
        const response = await fetch('https://cdn.tinyglb.com/models/e9f964261548481299912e70b8282ae2.glb');
        console.log('Fetch OK :', response.ok);
        const arrayBuffer = await response.arrayBuffer();
        console.log('ArrayBuffer :', arrayBuffer.byteLength);
  
        const loader = new GLTFLoader();
        loader.parse(
          arrayBuffer,
          '',
          (gltf) => {
            console.log('GLTF parsé avec succès');
            const model = gltf.scene;
            model.position.set(0, 0, 0);
            model.scale.set(0.1, 0.1, 0.1);
            scene.add(model);
            console.log('Modèle chargé !');
          },
          (error) => console.error('Erreur GLTF :', error)
        );
        console.log('Après parse');
      } catch (error) {
        console.error('Erreur globale :', error);
      }
        const animate = () => {
        requestAnimationFrame(animate);
        if (cameraRef.current) {
          cameraRef.current.position.z = 20;
          cameraRef.current.position.y = 10;

        }
        renderer.render(scene, camera);
        gl.endFrameEXP();
      };
      animate();
    };
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      glView: {
        flex: 1,
      },
    });
    
  return (
<View
    style={styles.container}
  >
    <GLView
      ref={glViewRef}
      style={styles.glView}
      onContextCreate={onContextCreate}
    />
  </View>
  );


}