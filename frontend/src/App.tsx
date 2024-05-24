import {lazy, Suspense} from 'react'
import {Route, Routes} from 'react-router-dom'

const Home = lazy(() => import("./pages/Home"))
const VendingMachines = lazy(() => import("./pages/VendingMachines"))
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
                        <Route path="/vending-machines" element={<VendingMachines/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                    </Routes>
                </Suspense>
            </main>
        </>
    )
}
