import * as THREE from 'three'
const light= new THREE.AmbientLight(0x4fffff,0.9)
const directionalLight = new THREE.DirectionalLight(0x4fffff,0.5)
light.add(directionalLight)
directionalLight.position.set(0,4,3)

export default light