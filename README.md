
This project demonstrates how to load and display a 3D model using Three.js in a React Native application (MOBILE ONLY) as of 2025.
because nothing was working youtube tutorial/ blogs and chatgpt wasn't helpful so i made it myself with documentation

## Overview
- Textures dosen't for this specific model

This is a minimal example of loading a .glb (GLTF binary) model in a React Native app using Expo and Three.js. It avoids unnecessary complexity (like custom textures for now) and focuses on getting a 3D model to render on mobile. If you're new to React Native or Three.js, this might help you avoid some common pitfalls.


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-project.git
   cd project
   npm install
   ```

   if you want to start the project you can type:
   ```npx expo start --clear ```

## If you are new to React native and threeJS please READ THIS

first of all it was my first time using react native and it was really hard when i started maybe i can answer to some question that you re questionning at the same time because chatGPT was REALLY USELESS for this type of project

## How It Works
   - Tech Stack: React Native, Expo, Three.js, and expo-gl for WebGL rendering.
   - What It Does: Fetches a .glb model from a URL, loads it with GLTFLoader, and renders it in a GLView component with basic lighting.
   - Code Highlights:
   - Uses loader.loadAsync instead of parse to handle the model cleanly.
   - Applies a default material to avoid texture-loading issues in Expo.

##  Question I asked myself 

   - What’s the best 3D format?

Use .gltf or .glb (binary GLTF). They’re lightweight, widely supported by Three.js, and work well for mobile. This project uses a .glb fetched from a URL.
 
   - Why are there so many deprecated packages and security warnings?

even me i don't know and I couldn't resolve it for now, (as of 2025). Some Three.js dependencies or Expo packages might throw warnings. I switched to ```yarn``` because npm kept forcing me to use --legacy-peer-deps, which was annoying. If you’re curious why, check this explanation.

 - Can I store my 3D model in the assets folder and import it with require? 

Not in this project as-is. Expo Go (used for quick testing) doesn’t support loading local 3D assets directly from the filesystem. You’d need to eject from Expo or host the model online (like I did here with a CDN). I might add local asset support in the future.

 - Why not use <Canvas> from @react-three/fiber? (I m salty for this one because chatgpt wasn't helpfull for this )
DON'T It’s great for web, but it doesn’t work reliably for mobile in React Native (at least not in my tests). Stick with GLView from expo-gl for mobile 3D rendering.


