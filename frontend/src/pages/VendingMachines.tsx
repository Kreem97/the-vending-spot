import Header from "../components/Header.tsx"
import Footer from "../components/Footer.tsx"
import Banner from "../components/Banner.tsx"
import {LazyLoadImage} from "react-lazy-load-image-component"
import profile from "../assets/images/profile.jpeg"

export default function VendingMachines() {
    return (
        <>
            <Header/>
            <Banner heading="VENDING MACHINES"/>

            <section className="w-[100%] flex justify-center bg-white">
                <div
                    className="w-[90%] flex flex-row flex-wrap justify-evenly py-[112px] md:py-[72px] sm:py-[52px] xsm:py-[52px]"
                >
                    <div className="w-[500px] lg:w-[40%]">
                        <LazyLoadImage src={profile}/>
                    </div>

                    <div
                        className="w-[500px] lg:w-[40%] lg:mt-0 md:mt-[60px] sm:mt-[60px] xsm:mt-[60px] flex flex-col justify-evenly"
                    >
                        <div
                            className="text-5xl lg:text-4xl md:text-4xl sm:text-4xl xsm:text-3xl avenirNextHeavy text-[#ae000d] mb-[24px]"
                        >
                            HEADER GOES HERE
                        </div>
                        <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                            nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel
                            illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
                            blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem
                            ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                            ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
                            exerci tation ullamcorper
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    )
}