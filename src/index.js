import * as THREE from 'three'
import {EffectComposer} from 'three/examples/jsm/postprocessing/EffectComposer';
import {CopyShader} from 'three/examples/jsm/shaders/CopyShader';
import  { VerticalBlurShader as Shader} from 'three/examples/jsm/shaders/VerticalBlurShader';
import {RenderPass} from 'three/examples/jsm/postprocessing/RenderPass';
import {ShaderPass} from 'three/examples/jsm/postprocessing/ShaderPass';
import vertex from './components/shaders/vertex'
import fragment from './components/shaders/fragment'
import hydra_ from './components/Hydra'


import camera from "./components/Camera";
import light from "./components/Light";
import renderer from "./components/Renderer";
import resize from "./components/Resize";
import scene from "./components/Scene";
import plane from "./components/three_";
//import * as dat from 'dat.gui'

const helper = new THREE.GridHelper( 50, 50, 0x3b0a70, 0x3b0a70 );
				helper.position.y = 0.1;
				scene.add( helper );




scene.add(plane)
scene.add(light)
camera.position.set(2,2,2)
camera.lookAt(plane.position)
resize.start(renderer)
//const gui = new dat.GUI()

//gui.add(plane.rotation,'x',-10,10,0.1)

const composer = new EffectComposer(renderer)

const renderPass = new RenderPass(scene,camera)
composer.addPass(renderPass)


const customShader = {
    uniforms: {
    "tDiffuse": { type: "t", value: null},
    "scale": { type: "f", value: 1.0 },
    "texSize": { type: "v2", value: new
    THREE.Vector2( 50, 50 ) },
    "center": { type: "v2", value: new
    THREE.Vector2( 0.5, 0.5 ) },
    },
    vertexShader:
    vertex,
    fragmentShader:
    fragment
    };



const effect = new ShaderPass(Shader)
//effect.uniforms['scale'].value =4
effect.renderToScreen = true
composer.addPass(effect)


const animate = function () {
    requestAnimationFrame( animate );
    //camera.position.x =  
    plane.rotation.x += 0.01;
    plane.rotation.z += 0.01;
    plane.rotation.y += 0.01;

    composer.render( scene, camera );
};

animate();