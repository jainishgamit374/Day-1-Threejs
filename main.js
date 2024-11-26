import * as THREE from "three";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
   75,
   window.innerWidth / window.innerHeight,
   0.1,
   100
);

camera.position.z = 5;

const sphereGeometry = new THREE.SphereGeometry(2, 32, 16);
const sphereMaterial = new THREE.MeshBasicMaterial({
  color: "blue",
  wireframe: true,
});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const boxMaterial = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
});
const cube = new THREE.Mesh(boxGeometry, boxMaterial);

const group = new THREE.Group();
group.add(cube);
group.add(sphere);
scene.add(group);

const canvas = document.querySelector("#draw");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

let clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  let delta = clock.getDelta();
  let rotateSpeed = 1; 
  cube.rotation.x += rotateSpeed * delta;
  cube.rotation.y += rotateSpeed * delta;

  sphere.rotation.x += rotateSpeed * delta;
  sphere.rotation.y += rotateSpeed * delta;
  renderer.render(scene, camera);
}

animate();
