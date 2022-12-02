import * as THREE from 'three';




const geometry = new THREE.BoxGeometry(1,1,1,10,10);
const material = new THREE.MeshPhongMaterial({color: 0x00ff00,wireframe: true} );
const plane = new THREE.Mesh(geometry, material)
export default plane