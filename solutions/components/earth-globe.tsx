"use client"

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three-stdlib';
import { Line2 } from 'three-stdlib'
import { LineMaterial } from 'three-stdlib'
import { LineGeometry } from 'three-stdlib'

export default function EarthGlobe() {
  const containerRef = useRef<HTMLDivElement>(null)
  const globeRef = useRef<{
    scene: THREE.Scene
    camera: THREE.PerspectiveCamera
    renderer: THREE.WebGLRenderer
    globe: THREE.Mesh
    calls: Line2[]
  }>({
    scene: new THREE.Scene(),
    camera: new THREE.PerspectiveCamera(),
    renderer: new THREE.WebGLRenderer(),
    globe: new THREE.Mesh(),
    calls: [],
  })

  useEffect(() => {
    if (!containerRef.current) return

    const width = containerRef.current.clientWidth
    const height = containerRef.current.clientHeight

    // Setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

    renderer.setSize(width, height)
    containerRef.current.appendChild(renderer.domElement)

    // Earth
    const textureLoader = new THREE.TextureLoader()
    const earthGeometry = new THREE.SphereGeometry(5, 64, 64)
    const earthMaterial = new THREE.MeshPhongMaterial({
      map: textureLoader.load('/earth-dark.jpg'),
      bumpMap: textureLoader.load('/earth-bump.jpg'),
      bumpScale: 0.1,
      specularMap: textureLoader.load('/earth-specular.jpg'),
      specular: new THREE.Color('grey'),
    })
    const earth = new THREE.Mesh(earthGeometry, earthMaterial)

    // Atmosphere
    const atmosphereGeometry = new THREE.SphereGeometry(5.1, 64, 64)
    const atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
          gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
    })
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial)

    scene.add(earth)
    scene.add(atmosphere)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040)
    const pointLight = new THREE.PointLight(0xffffff, 1)
    pointLight.position.set(10, 10, 10)
    scene.add(ambientLight)
    scene.add(pointLight)

    // Camera position
    camera.position.z = 15

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.rotateSpeed = 0.5
    controls.enableZoom = false

    // Store references
    globeRef.current = {
      scene,
      camera,
      renderer,
      globe: earth,
      calls: [],
    }

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)
      earth.rotation.y += 0.001
      controls.update()
      renderer.render(scene, camera)
    }

    animate()

    // Add random calls
    const addCall = () => {
      const startLat = (Math.random() - 0.5) * Math.PI
      const startLng = Math.random() * Math.PI * 2
      const endLat = 0.7 // Destination latitude (adjust as needed)
      const endLng = -0.3 // Destination longitude (adjust as needed)

      const start = latLngToVector3(startLat, startLng, 5)
      const end = latLngToVector3(endLat, endLng, 5)
      const mid = new THREE.Vector3()
      mid.addVectors(start, end)
      mid.normalize()
      mid.multiplyScalar(7) // Control point for curve height

      const curve = new THREE.QuadraticBezierCurve3(start, mid, end)
      const points = curve.getPoints(50)
      const geometry = new LineGeometry()
      geometry.setPositions(points.flatMap(p => [p.x, p.y, p.z]))

      const material = new LineMaterial({
        color: 0x00ff00,
        linewidth: 0.001,
        transparent: true,
        opacity: 0.5,
      })
      material.resolution.set(width, height)

      const call = new Line2(geometry, material)
      scene.add(call)
      globeRef.current.calls.push(call)

      // Animate call line
      let progress = 0
      const animateCall = () => {
        progress += 0.02
        material.opacity = Math.max(0, 1 - progress)

        if (progress < 2) {
          requestAnimationFrame(animateCall)
        } else {
          scene.remove(call)
          globeRef.current.calls = globeRef.current.calls.filter(c => c !== call)
        }
      }
      animateCall()
    }

    // Add new calls periodically
    const callInterval = setInterval(addCall, 2000)

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return
      const width = containerRef.current.clientWidth
      const height = containerRef.current.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
      globeRef.current.calls.forEach(call => {
        call.material.resolution.set(width, height)
      })
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      clearInterval(callInterval)
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={containerRef} className="w-full h-[600px]" />
}

// Helper function to convert latitude/longitude to 3D coordinates
function latLngToVector3(lat: number, lng: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lng + 180) * (Math.PI / 180)
  const x = -(radius * Math.sin(phi) * Math.cos(theta))
  const z = radius * Math.sin(phi) * Math.sin(theta)
  const y = radius * Math.cos(phi)
  return new THREE.Vector3(x, y, z)
}

