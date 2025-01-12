"use client"

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three-stdlib'

export function GlobeVisualization() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const segments = 128 // Declare segments once
const radius = 100 // Declare radius only once
const geometry = new THREE.SphereGeometry(radius, segments, segments)

    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      45,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 300

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    containerRef.current.appendChild(renderer.domElement)

    // Ocean sphere (slightly larger than the globe)
// Declare radius and segments first
// const radius = 100
// const segments = 128

// Ocean sphere (slightly larger than the globe)
const oceanGeometry = new THREE.SphereGeometry(radius * 0.995, segments, segments)
    const oceanMaterial = new THREE.MeshPhongMaterial({
      color: 0x001133,
      transparent: true,
      opacity: 0.6,
      shininess: 100
    })
    const ocean = new THREE.Mesh(oceanGeometry, oceanMaterial)
    scene.add(ocean)

    // Globe
    // const geometry = new THREE.SphereGeometry(radius, segments, segments)
// 
    // Load Earth texture with visible countries
    const textureLoader = new THREE.TextureLoader()
    const earthTexture = textureLoader.load('/earth-blue-marble.jpg')
    earthTexture.anisotropy = renderer.capabilities.getMaxAnisotropy()

    // Create base globe material
    const globeMaterial = new THREE.MeshPhongMaterial({
      map: earthTexture,
      transparent: true,
      opacity: 1
    })

    const globe = new THREE.Mesh(geometry, globeMaterial)
    scene.add(globe)

    // Add boundary sphere
    // const boundaryGeometry = new THREE.SphereGeometry(radius * 1.001, segments, segments)
    // const boundaryMaterial = new THREE.MeshBasicMaterial({
    //   color: 0xffffff,
    //   transparent: true,
    //   opacity: 0.1,
    //   // wireframe: true
    // })
    // const boundary = new THREE.Mesh(boundaryGeometry, boundaryMaterial)
    // scene.add(boundary)

    // Add country borders
    fetch('/countries.geojson')
      .then(response => response.json())
      .then(data => {
        const countryLines = new THREE.Object3D()
        
        data.features.forEach((feature: any) => {
          if (feature.geometry.type === 'Polygon') {
            feature.geometry.coordinates.forEach((coordinates: number[][]) => {
              addCountryLine(coordinates, countryLines)
            })
          } else if (feature.geometry.type === 'MultiPolygon') {
            feature.geometry.coordinates.forEach((polygon: number[][][]) => {
              polygon.forEach((coordinates: number[][]) => {
                addCountryLine(coordinates, countryLines)
              })
            })
          }
        })

        scene.add(countryLines)
      })

    function addCountryLine(coordinates: number[][], parent: THREE.Object3D) {
      const points: THREE.Vector3[] = []
      
      coordinates.forEach(([lng, lat]) => {
        const phi = (90 - lat) * (Math.PI / 180)
        const theta = (lng + 180) * (Math.PI / 180)
        
        const x = -(radius * Math.sin(phi) * Math.cos(theta))
        const y = radius * Math.cos(phi)
        const z = radius * Math.sin(phi) * Math.sin(theta)
        
        points.push(new THREE.Vector3(x, y, z))
      })

      const geometry = new THREE.BufferGeometry().setFromPoints(points)
      const material = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.3,
        linewidth: 1
      })
      
      const line = new THREE.Line(geometry, material)
      parent.add(line)
    }

    // Create point light for twinkling effect
    function createTwinkle(position: THREE.Vector3) {
      const light = new THREE.PointLight(0x9933ff, 2, 10)
      light.position.copy(position)
      scene.add(light)

      // Animate the light
      let intensity = 2
      const animateLight = () => {
        intensity *= 0.95
        light.intensity = intensity * (0.5 + 0.5 * Math.sin(Date.now() * 0.01))

        if (intensity > 0.1) {
          requestAnimationFrame(animateLight)
        } else {
          scene.remove(light)
        }
      }
      animateLight()
    }
    function latLngToVector3(lat: number, lng: number, sphereRadius: number): THREE.Vector3 {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);
    
      const x = -(sphereRadius * Math.sin(phi) * Math.cos(theta));
      const y = sphereRadius * Math.cos(phi);
      const z = sphereRadius * Math.sin(phi) * Math.sin(theta);
    
      return new THREE.Vector3(x, y, z);
    }
    

    // Connection line creation with enhanced effects
    const createConnection = (start: { lat: number; lng: number }, end: { lat: number; lng: number }) => {
      const startVec = latLngToVector3(start.lat, start.lng, radius)
      const endVec = latLngToVector3(end.lat, end.lng, radius)
      
      // Create twinkling effect at start and end points
      createTwinkle(startVec)
      createTwinkle(endVec)
      
      const mid = new THREE.Vector3()
      mid.addVectors(startVec, endVec)
      mid.normalize()
      mid.multiplyScalar(radius * 1.5)

      const curve = new THREE.QuadraticBezierCurve3(startVec, mid, endVec)
      const points = curve.getPoints(50)
      const geometry = new THREE.BufferGeometry().setFromPoints(points)
      
      const material = new THREE.LineBasicMaterial({
        color: new THREE.Color(0x9933ff),
        opacity: 0,
        transparent: true,
        linewidth: 2
      })

      const line = new THREE.Line(geometry, material)
      scene.add(line)

      // Animate line with glow
      let progress = 0
      const animate = () => {
        progress += 0.02
        material.opacity = Math.sin(progress) * 0.8

        if (progress < Math.PI) {
          requestAnimationFrame(animate)
        } else {
          scene.remove(line)
        }
      }
      animate()
    }

    // Enhanced lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0xffffff, 1.5)
    pointLight.position.set(200, 100, 150)
    scene.add(pointLight)

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.rotateSpeed = 0.5
    controls.enableZoom = false
    controls.autoRotate = true
    controls.autoRotateSpeed = -0.5 // Negative for correct rotation direction

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    const connectionPoints = [
      { lat: 40.7128, lng: -74.0060 },  // New York
      { lat: 51.5074, lng: -0.1278 },   // London
      { lat: 35.6762, lng: 139.6503 },  // Tokyo
      { lat: 22.3193, lng: 114.1694 },  // Hong Kong
      { lat: 1.3521, lng: 103.8198 },   // Singapore
      { lat: -33.8688, lng: 151.2093 }, // Sydney
      { lat: 19.0760, lng: 72.8777 },   // Mumbai
      { lat: 55.7558, lng: 37.6173 },   // Moscow
      { lat: -23.5505, lng: -46.6333 }, // São Paulo
      { lat: 25.2048, lng: 55.2708 },   // Dubai
      { lat: 48.8566, lng: 2.3522 },    // Paris
      { lat: 52.5200, lng: 13.4050 },   // Berlin
      { lat: -34.6037, lng: -58.3816 }, // Buenos Aires
      { lat: 37.7749, lng: -122.4194 }, // San Francisco
      { lat: 31.2304, lng: 121.4737 },  // Shanghai
      { lat: -26.2041, lng: 28.0473 },  // Johannesburg
      { lat: 41.0082, lng: 28.9784 },   // Istanbul
      { lat: 13.7563, lng: 100.5018 },  // Bangkok
      { lat: -37.8136, lng: 144.9631 }, // Melbourne
      { lat: 43.6532, lng: -79.3832 },  // Toronto
    ]
    

    // Create connections periodically
    const createRandomConnection = () => {
      const start = connectionPoints[Math.floor(Math.random() * connectionPoints.length)]
      const end = connectionPoints[Math.floor(Math.random() * connectionPoints.length)]
      if (start !== end) {
        createConnection(start, end)
      }
    }

    setInterval(createRandomConnection, 450)

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/5 to-transparent pointer-events-none" />
      <div ref={containerRef} className="w-full h-[600px] border border-white/10 rounded-lg backdrop-blur-sm" />
    </div>
  )
}

