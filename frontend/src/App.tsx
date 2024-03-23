import {lazy, Suspense} from 'react'
import {Route, Routes} from 'react-router-dom'

const Home = lazy(() => import("./pages/Home"))
const About = lazy(() => import("./pages/About"))
const Contact = lazy(() => import("./pages/Contact"))

export default function App() {
    return (
        <>
            <main>
                {/*TODO: add fallback animation*/}
                <Suspense>
                    {/*<Suspense fallback={<LoadingAnimation/>}>*/}
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                    </Routes>
                </Suspense>
            </main>
        </>
    )
}
