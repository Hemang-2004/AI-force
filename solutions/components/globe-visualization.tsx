"use client"

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three-stdlib'

export function GlobeVisualization() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
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

    // Globe
    const radius = 100
    const segments = 128
    const geometry = new THREE.SphereGeometry(radius, segments, segments)

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

    // Enhanced lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0xffffff, 1)
    pointLight.position.set(200, 100, 150)
    scene.add(pointLight)


    // Connection points
    const connectionPoints = [
      { lat: 40.7128, lng: -74.0060 }, // New York
      { lat: 51.5074, lng: -0.1278 },  // London
      { lat: 35.6762, lng: 139.6503 }, // Tokyo
      { lat: 22.3193, lng: 114.1694 }, // Hong Kong
      { lat: 1.3521, lng: 103.8198 },  // Singapore
      { lat: -33.8688, lng: 151.2093 }, // Sydney
      { lat: 19.0760, lng: 72.8777 },  // Mumbai
      { lat: 55.7558, lng: 37.6173 },  // Moscow
      { lat: -23.5505, lng: -46.6333 }, // São Paulo
      { lat: 25.2048, lng: 55.2708 },  // Dubai
    ]

    // Connection line creation
    const createConnection = (start: { lat: number; lng: number }, end: { lat: number; lng: number }) => {
      const startVec = latLngToVector3(start.lat, start.lng, radius)
      const endVec = latLngToVector3(end.lat, end.lng, radius)
      
      const mid = new THREE.Vector3()
      mid.addVectors(startVec, endVec)
      mid.normalize()
      mid.multiplyScalar(radius * 1.5)

      const curve = new THREE.QuadraticBezierCurve3(startVec, mid, endVec)
      const points = curve.getPoints(50)
      const geometry = new THREE.BufferGeometry().setFromPoints(points)
      
      const material = new THREE.LineBasicMaterial({
        color: new THREE.Color(0.5 + Math.random() * 0.5, 0.2, 1),
        opacity: 0,
        transparent: true,
        linewidth: 2
      })

      const line = new THREE.Line(geometry, material)
      scene.add(line)

      // Animate line
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

    // Create connections periodically
    const createRandomConnection = () => {
      const start = connectionPoints[Math.floor(Math.random() * connectionPoints.length)]
      const end = connectionPoints[Math.floor(Math.random() * connectionPoints.length)]
      if (start !== end) {
        createConnection(start, end)
      }
    }

    setInterval(createRandomConnection, 450)

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.rotateSpeed = 0.5
    controls.enableZoom = false
    controls.autoRotate = true
    controls.autoRotateSpeed = 0.5

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

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

  return <div ref={containerRef} className="w-full h-[600px]" />
}

// Helper function to convert latitude/longitude to 3D coordinates
function latLngToVector3(lat: number, lng: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lng + 180) * (Math.PI / 180)

  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  )
}

