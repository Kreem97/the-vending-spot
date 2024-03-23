import {LazyLoadImage} from "react-lazy-load-image-component"
import {Button} from "react-bootstrap"

export default function Banner() {
    const openModal = () => {

    }

    return (
        <>
            <div className="w-[100%] h-[30vw] relative">
                <div className="w-[90%] absolute top-[50px] left-[5%]">
                    <LazyLoadImage src="banner.png" className="h-[100%]"/>
                    <Button
                        title="Request Vending Machine"
                        className="absolute w-[140px] h-[60px] bottom-[32px] left-[32px] bg-[#ae000d] rounded-md text-white"
                        onClick={openModal}
                    >Request Vending Machine</Button>
                </div>
                <div
                    className="w-[80%] absolute top-[10vw] left-[10%] text-center text-white text-6xl font-bold italic">
                    WELCOME TO
                </div>
                <div className="w-[80%] absolute top-[20vw] left-[10%] text-center text-white text-8xl font-bold">
                    THE VENDING SPOT
                </div>
            </div>
            <div className="bg-white h-[16vh]"></div>
        </>
    )
}