// tiles_webgl.js
import * as THREE from "three";

console.log(THREE);

function update() {}

function draw() {
  console.log("draw");
}

function animate() {
  update();
  draw();
  requestAnimationFrame(animate);
}

export default {
  start() {
    animate();
  },
};
