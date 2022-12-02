import * as THREE from 'three'
const myCanvas = document.getElementById('myCanvas_')

const renderer = new THREE.WebGLRenderer({canvas: myCanvas, antialias:true})
renderer.setSize(window.innerWidth,window.innerHeight)



export default renderer