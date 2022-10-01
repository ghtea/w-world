import * as THREE from 'three';

export const getGround = () => {
  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry( 4000, 4000 ),
    new THREE.MeshPhongMaterial( { color: 0x999999, depthWrite: false } )
  );
  mesh.rotation.x = - Math.PI / 2;
  mesh.receiveShadow = true;

  return mesh
}

export const getGrid = () => {
  const grid = new THREE.GridHelper( 4000, 60, 0x000000, 0x000000 );
  if (!Array.isArray(grid.material)){
    grid.material.opacity = 0.2;
    grid.material.transparent = true;
  }

  return grid
}