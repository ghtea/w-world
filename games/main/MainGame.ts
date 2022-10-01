import * as THREE from 'three';
import { getGrid, getGround } from './objects';

export class MainGame {
  scene: THREE.Scene

  renderer: THREE.WebGLRenderer

  camera: THREE.Camera

  constructor(){
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    this.renderer = new THREE.WebGLRenderer();
  }

  init() {
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( this.renderer.domElement );

    // add objects
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    this.scene.add( cube );

    const ground = getGround()
    this.scene.add( ground );

    const grid = getGrid()
    this.scene.add( grid );

    this.camera.position.set(112, 100, 400);

    window.addEventListener( 'resize', ()=> { this.onWindowResize(); }, false );

    this.animate()
  }

  onWindowResize() {
    this.renderer.setSize( window.innerWidth, window.innerHeight );
  }

  animate() {
    requestAnimationFrame( ()=> { this.animate(); } );
    this.renderer.render( this.scene, this.camera );
  }
}
