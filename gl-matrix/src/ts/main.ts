import * as GLMatrix from 'gl-matrix';

const sample = document.getElementById('sample') as HTMLElement;

let i = 0;

sample.style.backgroundColor = '#0fa';
sample.style.fontWeight = '900';
sample.style.fontSize = '30px';
sample.style.padding = '20px';

const mat4 = GLMatrix.mat4.create();
const base = GLMatrix.mat4.create();
let list = [];
let list2 = [];
const translate = GLMatrix.vec3.create()
const rotate = GLMatrix.vec3.create()
for (let i = 0; i < 3; i++ ) {
  list.push(Math.random() * 500 + window.innerWidth);
  list2.push(Math.random() * 50000);
}
translate.set(list);
rotate.set(list2);
GLMatrix.mat4.rotate(mat4, mat4, 1, rotate);
GLMatrix.mat4.translate(mat4, mat4, translate);

sample.animate(
  [
    { transform: `matrix3d(${mat4.toString()})` },
    { transform: `matrix3d(${base.toString()})` }
  ],
  {
    duration: 1000,
    iterations: 1,
  },
);
