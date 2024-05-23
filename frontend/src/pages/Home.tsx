import Header from "../components/Header.tsx"
import Footer from "../components/Footer.tsx"
import Banner from "../components/Banner.tsx"
import FAQ from "../components/FAQ.tsx"
import Item from "../components/Item.tsx"
import atmImg from "../assets/images/services/atm.jpeg"
import standardVendingImg from "../assets/images/services/standard-vending.jpeg"
import coffeeImg from "../assets/images/services/coffee.jpeg"
import arcadeImg from "../assets/images/services/arcade.jpeg"

const services = [
    {
        title: "ATM",
        image: atmImg
    },
    {
        title: "Standard Vending",
        image: standardVendingImg
    },
    {
        title: "Coffee",
        image: coffeeImg
    },
    {
        title: "Arcades",
        image: arcadeImg
    }
]

const faqs = [
    {
        question: "How much does the vending machine placement cost?",
        answer: "Absolutely free, zero cost to you."
    },
    {
        question: "Who handles stocking and maintaining the machine?",
        answer: "Your vending provider will maintain and keep the machine stocked with your desired product. All for free."
    },
    {
        question: "How long does it take to get a vending machine installed?",
        answer: "Less than a week!"
    }
]

export default function Home() {
    return (
        <>
            <Header/>
            <Banner preHeading="WELCOME TO" heading="THE VENDING SPOT"/>

            {/* SERVICES WE OFFER */}
            <section className={"bg-white mb-[24px]"}>
                <div
                    className="pt-[112px] md:pt-[52px] sm:pt-[92px] xsm:pt-[50px] text-center text-4xl sm:text-3xl avenirNextHeavy text-[#ae000d]">
                    SERVICES WE OFFER
                </div>

                <div className={"pt-[20px] italic"}>
                    <p className={"text-center text-lg sm:text-base"}>
                        We offer quality machines with free delivery and installation. We have all your vending
                        needs including but not limited to Arcades, ATMs, Coffee, Snacks, and healthy options.
                    </p>
                </div>

                <div className="pb-[132px] mt-[24px] flex flex-wrap justify-center items-end">
                    {services.map((service, index) => (
                        <Item key={index} image={service.image} alt={service.title} title={service.title}/>
                    ))}
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="bg-white">
                <div
                    className="pt-[112px] md:pt-[52px] sm:pt-[92px] xsm:pt-[50px] pb-[64px] text-center text-4xl avenirNextHeavy text-[#ae000d]">
                    HOW IT WORKS
                </div>

                <div className="pb-[112px] sm:pb-[80px] flex flex-row flex-wrap justify-evenly">
                    <div className="w-[215px] mx-[20px] my-[20px] text-center">
                        <div className="text-7xl avenirNextHeavy text-[#ae000d]">1</div>
                        <div className="text font-semibold">
                            Hit the request button and answer a few questions about your vending needs.
                        </div>
                        {/*<div className="text-sm">Secondary information can go on these next few lines.</div>*/}
                    </div>

                    <div className="w-[215px] mx-[20px] my-[20px] text-center">
                        <div className="text-7xl avenirNextHeavy text-[#ae000d]">2</div>
                        <div className="text font-semibold">
                            Our team will reach out and schedule a site inspection.
                        </div>
                        {/*<div className="text-sm">Secondary information can go on these next few lines.</div>*/}
                    </div>

                    <div className="w-[215px] mx-[20px] my-[20px] text-center">
                        <div className="text-7xl avenirNextHeavy text-[#ae000d]">3</div>
                        <div className="text font-semibold">
                            Get your vending machine installed in less than a week for free!
                        </div>
                        {/*<div className="text-sm">Secondary information can go on these next few lines.</div>*/}
                    </div>
                </div>
            </section>

            {/* FREQUENTLY ASKED QUESTIONS */}
            <section>
                <div
                    className="my-[36px] text-center text-4xl md:text-3xl sm:text-2xl xsm:text-2xl avenirNextHeavy text-white">
                    FREQUENTLY ASKED QUESTIONS
                </div>

                <div className='flex flex-col items-center mb-[18px]'>
                    {faqs.map((d, idx) => {
                        return (<FAQ key={idx} question={d.question} answer={d.answer}/>)
                    })}
                </div>

            </section>

            <Footer/>
        </>
    )
}