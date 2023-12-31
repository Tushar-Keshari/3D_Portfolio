import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'

{/* <div className=' absolute top-28 left-0 right-0 z-10 flex justify-center items-center'>
            POPUP
        </div> */}

const Home = () => {
  return (
    <section className=' w-full h-screen relative'>
        <Canvas 
        className='w-full h-screen bg-transparent'
        camera={{near: 0.1, far: 1000}}
        >
            <Suspense fallback={<Loader/>}>
                <directionalLight/>
                <spotLight/>
                <pointLight/>
                <ambientLight/>
                <hemisphereLight/>
            </Suspense>
        
        </Canvas>
    </section>
  )
}

export default Home