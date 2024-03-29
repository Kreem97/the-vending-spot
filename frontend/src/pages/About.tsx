import Header from "../components/Header.tsx"
import Footer from "../components/Footer.tsx"
import Banner from "../components/Banner.tsx"
import {LazyLoadImage} from "react-lazy-load-image-component"
import profile from "../assets/images/profile.jpeg"

export default function About() {
    return (
        <>
            <Header/>
            <Banner heading="ABOUT"/>

            <section className="w-[100%] flex justify-center bg-white">
                <div className="w-[80%] flex flex-row justify-around py-[112px]">
                    <div className="w-[37%]">
                        <LazyLoadImage src={profile}/>
                    </div>
                    <div className="w-[37%] flex flex-col justify-evenly">
                        <div className="text-5xl avenirNextHeavy text-[#ae000d] mb-[24px]">HEADER GOES HERE</div>
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