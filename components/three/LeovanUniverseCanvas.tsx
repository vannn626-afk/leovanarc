'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { LvMonogram } from '@/components/ui/LvLogo';

interface LeovanUniverseCanvasProps {
  activeSection?: 'home' | 'about' | 'stack' | 'projects' | 'achievements' | 'contact';
  className?: string;
}

export function LeovanUniverseCanvas({
  activeSection = 'home',
  className = '',
}: LeovanUniverseCanvasProps) {
  const canvasMountRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(activeSection);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    sectionRef.current = activeSection;
  }, [activeSection]);

  useEffect(() => {
    const container = canvasMountRef.current;
    if (!container) return;

    // 1. Detect software WebGL (SwiftShader / llvmpipe) or missing WebGL
    let isSoftwareGl = false;
    try {
      const probeCanvas = document.createElement('canvas');
      const gl =
        probeCanvas.getContext('webgl2') ||
        probeCanvas.getContext('webgl') ||
        probeCanvas.getContext('experimental-webgl');
      if (!gl) {
        queueMicrotask(() => setWebglSupported(false));
        return;
      }
      const glCtx = gl as WebGLRenderingContext;
      const ext = glCtx.getExtension('WEBGL_debug_renderer_info');
      const param = ext ? ext.UNMASKED_RENDERER_WEBGL : glCtx.RENDERER;
      const gpu = String(glCtx.getParameter(param));
      glCtx.getExtension('WEBGL_lose_context')?.loseContext();
      isSoftwareGl = /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
    } catch {
      queueMicrotask(() => setWebglSupported(false));
      return;
    }

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: !isSoftwareGl,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      queueMicrotask(() => setWebglSupported(false));
      return;
    }

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = !isSoftwareGl;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030303, 0.045);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.2, 8.5);

    // 2. Studio PBR Environment Reflection
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    pmremGenerator.dispose();

    // 3. 3-Point Warm/Cool & Crimson Rim Studio Lighting Rig
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x1a0004, 0.8);
    scene.add(hemiLight);

    const keyLight = new THREE.DirectionalLight(0xfff5f5, 2.2);
    keyLight.position.set(5, 6, 6);
    scene.add(keyLight);

    const rimLight = new THREE.PointLight(0xe60023, 6.5, 18);
    rimLight.position.set(-4, 2, -2);
    scene.add(rimLight);

    const bottomRedLight = new THREE.PointLight(0x990019, 4.0, 14);
    bottomRedLight.position.set(3, -4, 3);
    scene.add(bottomRedLight);

    // 4. Composite 8-Part 3D LV Monogram Sculpture (THREE.Group)
    const lvGroup = new THREE.Group();
    scene.add(lvGroup);

    const obsidianMetalMat = new THREE.MeshStandardMaterial({
      color: 0x111111,
      metalness: 0.92,
      roughness: 0.18,
    });

    const crimsonAnodizedMat = new THREE.MeshStandardMaterial({
      color: 0xe60023,
      emissive: 0x3a0008,
      emissiveIntensity: 0.45,
      metalness: 0.78,
      roughness: 0.22,
    });

    const chromeTrimMat = new THREE.MeshStandardMaterial({
      color: 0xf5f5f5,
      metalness: 0.95,
      roughness: 0.12,
    });

    const extrudeSettings: THREE.ExtrudeGeometryOptions = {
      steps: 1,
      depth: 0.36,
      bevelEnabled: true,
      bevelThickness: 0.06,
      bevelSize: 0.05,
      bevelSegments: 2,
    };

    // Part 1: L Vertical Stem
    const lShape = new THREE.Shape();
    lShape.moveTo(-1.55, 1.15);
    lShape.lineTo(-1.05, 1.25);
    lShape.lineTo(-1.25, -0.85);
    lShape.lineTo(-0.25, -0.85);
    lShape.lineTo(-0.38, -1.28);
    lShape.lineTo(-1.72, -1.28);
    lShape.closePath();
    const lGeo = new THREE.ExtrudeGeometry(lShape, extrudeSettings);
    lGeo.center();
    const lMesh = new THREE.Mesh(lGeo, chromeTrimMat);
    lMesh.position.set(-0.65, 0, 0.12);
    lvGroup.add(lMesh);

    // Part 2: V Left & Right Interlocking Blade
    const vShape = new THREE.Shape();
    vShape.moveTo(-0.2, 1.2);
    vShape.lineTo(0.32, 1.2);
    vShape.lineTo(0.68, -0.45);
    vShape.lineTo(1.22, 1.2);
    vShape.lineTo(1.72, 1.2);
    vShape.lineTo(0.88, -1.28);
    vShape.lineTo(0.35, -1.28);
    vShape.closePath();
    const vGeo = new THREE.ExtrudeGeometry(vShape, extrudeSettings);
    vGeo.center();
    const vMesh = new THREE.Mesh(vGeo, crimsonAnodizedMat);
    vMesh.position.set(0.62, 0, 0.22);
    lvGroup.add(vMesh);

    // Part 3: Diagonal Red Slash Bar
    const slashGeo = new THREE.BoxGeometry(3.9, 0.18, 0.48);
    const slashMesh = new THREE.Mesh(slashGeo, crimsonAnodizedMat);
    slashMesh.rotation.z = Math.PI / 5.5;
    slashMesh.position.set(0, -0.05, 0.02);
    lvGroup.add(slashMesh);

    // Part 4: Angular Hexagonal Outer Shield Ring
    const shieldGeo = new THREE.RingGeometry(2.05, 2.32, 6);
    const shieldMesh = new THREE.Mesh(shieldGeo, obsidianMetalMat);
    shieldMesh.rotation.z = Math.PI / 6;
    shieldMesh.position.set(0, 0, -0.25);
    lvGroup.add(shieldMesh);

    // Part 5: Inner Crimson Wireframe Ring
    const innerRingGeo = new THREE.RingGeometry(1.68, 1.74, 6);
    const innerRingMesh = new THREE.Mesh(innerRingGeo, crimsonAnodizedMat);
    innerRingMesh.rotation.z = -Math.PI / 6;
    innerRingMesh.position.set(0, 0, -0.15);
    lvGroup.add(innerRingMesh);

    // Part 6 & 7: Orbiting Angular Corner Fin Blades
    const finGeo = new THREE.OctahedronGeometry(0.28, 0);
    const topFin = new THREE.Mesh(finGeo, crimsonAnodizedMat);
    topFin.scale.set(1.8, 0.45, 0.45);
    topFin.position.set(-1.9, 1.6, 0.4);
    topFin.rotation.z = Math.PI / 4;
    lvGroup.add(topFin);

    const bottomFin = new THREE.Mesh(finGeo, chromeTrimMat);
    bottomFin.scale.set(1.8, 0.45, 0.45);
    bottomFin.position.set(1.9, -1.6, 0.4);
    bottomFin.rotation.z = Math.PI / 4;
    lvGroup.add(bottomFin);

    // 5. InstancedMesh of Floating Angular Shards (36 instances)
    const shardCount = isSoftwareGl ? 24 : 36;
    const shardGeo = new THREE.OctahedronGeometry(0.16, 0);
    const shardInstanced = new THREE.InstancedMesh(shardGeo, obsidianMetalMat, shardCount);
    const dummy = new THREE.Object3D();
    const shardData: Array<{
      radius: number;
      angle: number;
      y: number;
      speed: number;
      scale: number;
    }> = [];

    for (let i = 0; i < shardCount; i++) {
      const radius = 3.2 + (i % 5) * 0.85;
      const angle = (i / shardCount) * Math.PI * 2;
      const y = ((i % 7) - 3) * 0.9;
      const scale = 0.65 + (i % 4) * 0.25;
      shardData.push({
        radius,
        angle,
        y,
        speed: 0.15 + (i % 3) * 0.08,
        scale,
      });

      dummy.position.set(Math.cos(angle) * radius, y, Math.sin(angle) * radius - 1.5);
      dummy.rotation.set(i * 0.4, i * 0.7, 0);
      dummy.scale.set(scale * 1.6, scale * 0.5, scale * 0.5);
      dummy.updateMatrix();
      shardInstanced.setMatrixAt(i, dummy.matrix);
      shardInstanced.setColorAt(
        i,
        i % 3 === 0 ? new THREE.Color(0xe60023) : new THREE.Color(0x262626)
      );
    }
    shardInstanced.instanceMatrix.needsUpdate = true;
    if (shardInstanced.instanceColor) shardInstanced.instanceColor.needsUpdate = true;
    shardInstanced.computeBoundingSphere();
    scene.add(shardInstanced);

    if (!isSoftwareGl) {
      renderer.compile(scene, camera);
    }

    // Section camera & monogram target configurations
    const isMobileViewport = width < 768;
    const sectionTargets: Record<
      string,
      { camPos: [number, number, number]; lvPos: [number, number, number]; lvRotY: number }
    > = {
      home: { 
        camPos: isMobileViewport ? [0, 0, 11.2] : [0, 0.1, 8.8], 
        lvPos: isMobileViewport ? [0, 2.6, -3.8] : [0.35, 0.35, -1.6], 
        lvRotY: -0.28 
      },
      about: { 
        camPos: isMobileViewport ? [0, 0, 11.5] : [0.6, 0.2, 9.2], 
        lvPos: isMobileViewport ? [0, 3.0, -4.0] : [2.2, 0.6, -2.0], 
        lvRotY: -0.45 
      },
      stack: { 
        camPos: isMobileViewport ? [0, 0, 12.0] : [0, 0.5, 9.6], 
        lvPos: isMobileViewport ? [0, 3.2, -4.2] : [0, 1.8, -2.6], 
        lvRotY: 0.0 
      },
      projects: { 
        camPos: isMobileViewport ? [0, 0, 11.5] : [-0.6, 0.0, 9.0], 
        lvPos: isMobileViewport ? [0, 2.8, -4.0] : [-2.4, -0.4, -2.0], 
        lvRotY: 0.45 
      },
      achievements: { 
        camPos: isMobileViewport ? [0, 0, 11.2] : [0, -0.2, 8.6], 
        lvPos: isMobileViewport ? [0, 2.6, -3.8] : [2.0, 0.2, -1.6], 
        lvRotY: -0.35 
      },
      contact: { 
        camPos: isMobileViewport ? [0, 0, 11.5] : [0, 0.0, 8.8], 
        lvPos: isMobileViewport ? [0, 2.8, -4.0] : [1.8, 0.4, -2.0], 
        lvRotY: -0.25 
      },
    };

    let mouseX = 0;
    let mouseY = 0;
    let scrollProgress = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const onScroll = () => {
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      scrollProgress = window.scrollY / maxScroll;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // 6. Render Loop with Software-WebGL `afterDraw` Pacing
    const startTime = performance.now();
    let lastTime = startTime;
    let frameId = 0;
    let unmounted = false;

    function afterDraw(cb: () => void) {
      const gl = renderer.getContext() as WebGL2RenderingContext;
      if (gl && typeof gl.fenceSync === 'function') {
        const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
        gl.flush();
        const poll = () => {
          if (unmounted) return;
          const state = sync && gl.getSyncParameter(sync, gl.SYNC_STATUS);
          if (state === gl.UNSIGNALED) {
            frameId = window.setTimeout(poll, 5);
          } else {
            if (sync) gl.deleteSync(sync);
            frameId = window.setTimeout(cb, 80);
          }
        };
        frameId = window.setTimeout(poll, 5);
      } else {
        frameId = window.setTimeout(cb, 80);
      }
    }

    function tick() {
      if (unmounted) return;
      if (document.hidden) {
        frameId = window.setTimeout(tick, 250);
        return;
      }

      const now = performance.now();
      const delta = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;
      const elapsed = (now - startTime) / 1000;

      const target = sectionTargets[sectionRef.current] || sectionTargets.home;

      // Exponential damping for camera and LV monogram
      camera.position.x = THREE.MathUtils.damp(
        camera.position.x,
        target.camPos[0] + mouseX * 0.45,
        3.5,
        delta
      );
      camera.position.y = THREE.MathUtils.damp(
        camera.position.y,
        target.camPos[1] - mouseY * 0.35 - scrollProgress * 0.8,
        3.5,
        delta
      );
      camera.position.z = THREE.MathUtils.damp(camera.position.z, target.camPos[2], 3.5, delta);
      camera.lookAt(0, 0, 0);

      lvGroup.position.x = THREE.MathUtils.damp(lvGroup.position.x, target.lvPos[0], 4, delta);
      lvGroup.position.y = THREE.MathUtils.damp(
        lvGroup.position.y,
        target.lvPos[1] + Math.sin(elapsed * 1.6) * 0.16,
        4,
        delta
      );
      lvGroup.position.z = THREE.MathUtils.damp(lvGroup.position.z, target.lvPos[2], 4, delta);

      lvGroup.rotation.y = THREE.MathUtils.damp(
        lvGroup.rotation.y,
        target.lvRotY + mouseX * 0.35 + scrollProgress * Math.PI * 0.65,
        4,
        delta
      );
      lvGroup.rotation.x = THREE.MathUtils.damp(
        lvGroup.rotation.x,
        -mouseY * 0.22 + Math.cos(elapsed * 1.1) * 0.08,
        4,
        delta
      );

      // Update instanced shards gently
      for (let i = 0; i < shardCount; i++) {
        const item = shardData[i];
        const a = item.angle + elapsed * item.speed * 0.35;
        dummy.position.set(
          Math.cos(a) * item.radius,
          item.y + Math.sin(elapsed + i) * 0.12,
          Math.sin(a) * item.radius - 1.5
        );
        dummy.rotation.set(elapsed * 0.3 + i, elapsed * 0.4 + i, 0);
        dummy.scale.set(item.scale * 1.6, item.scale * 0.5, item.scale * 0.5);
        dummy.updateMatrix();
        shardInstanced.setMatrixAt(i, dummy.matrix);
      }
      shardInstanced.instanceMatrix.needsUpdate = true;

      renderer.render(scene, camera);

      if (isSoftwareGl) {
        afterDraw(tick);
      } else {
        frameId = requestAnimationFrame(tick);
      }
    }

    tick();

    return () => {
      unmounted = true;
      cancelAnimationFrame(frameId);
      clearTimeout(frameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);

      lGeo.dispose();
      vGeo.dispose();
      slashGeo.dispose();
      shieldGeo.dispose();
      innerRingGeo.dispose();
      finGeo.dispose();
      shardGeo.dispose();
      obsidianMetalMat.dispose();
      crimsonAnodizedMat.dispose();
      chromeTrimMat.dispose();
      renderer.dispose();
    };
  }, []);

  if (!webglSupported) {
    return (
      <div
        className={`pointer-events-none fixed inset-0 z-0 flex items-center justify-center opacity-20 ${className}`}
        aria-hidden="true"
      >
        <LvMonogram size={280} />
      </div>
    );
  }

  return (
    <div
      ref={canvasMountRef}
      data-testid="three-universe-canvas"
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-20 md:opacity-45 ${className}`}
    />
  );
}
