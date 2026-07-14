/**
 * canvas.js
 * Three.js animated background – particle field + wireframe objects.
 * Requires Three.js r128 to be loaded before this script.
 */

(function initCanvas() {
  const canvas   = document.getElementById('canvas3d');
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    60, window.innerWidth / window.innerHeight, 0.1, 1000
  );
  camera.position.z = 30;

  /* ── Particle field ── */
  const COUNT     = 2000;
  const positions = new Float32Array(COUNT * 3);
  const colors    = new Float32Array(COUNT * 3);

  for (let i = 0; i < COUNT; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 100;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 60;

    const t = Math.random();
    colors[i * 3]     = 0;
    colors[i * 3 + 1] = t < 0.5 ? 0.9 : 0.5;
    colors[i * 3 + 2] = 1.0;
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('color',    new THREE.BufferAttribute(colors, 3));

  const mat = new THREE.PointsMaterial({
    size: 0.18,
    vertexColors: true,
    transparent: true,
    opacity: 0.7,
    blending: THREE.AdditiveBlending,
  });

  const particles = new THREE.Points(geo, mat);
  scene.add(particles);

  /* ── Wireframe helper ── */
  function createWireObj(geometry, color, x, y, z) {
    const m = new THREE.MeshBasicMaterial({
      color,
      wireframe: true,
      opacity: 0.15,
      transparent: true,
    });
    const mesh = new THREE.Mesh(geometry, m);
    mesh.position.set(x, y, z);
    scene.add(mesh);
    return mesh;
  }

  const torus1 = createWireObj(new THREE.TorusGeometry(6, 1.5, 12, 40), 0x00f5ff, -20,  8, -10);
  const torus2 = createWireObj(new THREE.TorusGeometry(4, 1,   10, 30), 0x0066ff,  22, -5, -15);
  const octa   = createWireObj(new THREE.OctahedronGeometry(5),          0x00c8d4,  10, 15, -20);
  const cube   = createWireObj(new THREE.BoxGeometry(6, 6, 6),           0x00f5ff, -15,-12, -18);
  const icosa  = createWireObj(new THREE.IcosahedronGeometry(4),         0x0af0ff,   0,-18,  -8);

  /* ── Mouse parallax ── */
  let mx = 0, my = 0;
  document.addEventListener('mousemove', e => {
    mx = (e.clientX / window.innerWidth  - 0.5) * 2;
    my = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  /* ── Render loop ── */
  const clock = new THREE.Clock();
  function animate() {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();

    particles.rotation.y = t * 0.03;
    particles.rotation.x = t * 0.01;

    torus1.rotation.x = t * 0.30; torus1.rotation.y = t * 0.20;
    torus2.rotation.y = t * 0.25; torus2.rotation.z = t * 0.15;
    octa.rotation.x   = t * 0.40; octa.rotation.y   = t * 0.30;
    cube.rotation.x   = t * 0.20; cube.rotation.z   = t * 0.25;
    icosa.rotation.x  = t * 0.35; icosa.rotation.y  = t * 0.28;

    camera.position.x += (mx * 3  - camera.position.x) * 0.04;
    camera.position.y += (-my * 2 - camera.position.y) * 0.04;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
  }
  animate();

  /* ── Resize ── */
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
})();
