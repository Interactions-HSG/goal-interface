import * as THREE from 'three';

var drawingSurface = document.getElementById( 'canvas' );
var renderer = new THREE.WebGLRenderer( { antialias: true, canvas: drawingSurface } );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( 400, 400 ); // some width and height values