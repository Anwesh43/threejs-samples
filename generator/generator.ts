export const htmlString = () => `
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>My first three.js app</title>
		<style>
			body { margin: 0; }
		</style>
	</head>
	<body>
        <script async src="https://unpkg.com/es-module-shims@1.6.3/dist/es-module-shims.js"></script>

        <script type="importmap">
            {
                "imports": {
                    "three": "https://unpkg.com/three@<version>/build/three.module.js",
                    "three/addons/": "https://unpkg.com/three@<version>/examples/jsm/"
                }
            }
        </script>
	    <script type="module" src="/main.js"></script>
	</body>
</html>
`

export const mainJS = () => `
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
` 