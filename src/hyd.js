await loadScript("https://threejs.org/build/three.js")

scene = new THREE.Scene()
camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

renderer = new THREE.WebGLRenderer()
renderer.setSize(width, height)
geometry = new THREE.BoxGeometry(1,10,1,10,10)
material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true})
cube = new THREE.Mesh(geometry, material);
scene.add(cube)
helper = new THREE.GridHelper( 50, 50, 0x3b0a70, 0x3b0a70 );
				helper.position.y = 0.1;
				scene.add( helper );
camera.position.z = 1.5

// 'update' is a reserved function that will be run every time the main hydra rendering context is updated
update = () => {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  camera.rotation.z += Math.random() *0.1;
  renderer.render( scene, camera );
  
}

s1.initStream("zaraza")
s0.init({ src: renderer.domElement })

src(s0).modulate(noise(20,0.5)).blend(noise(5).kaleid(5),0.1).modulateScale(osc(50)).modulateScale(src(s1).invert().shift(0.1,0,0.1),1).out()

