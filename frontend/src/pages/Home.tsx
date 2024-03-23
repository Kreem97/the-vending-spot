import Header from "../components/Header.tsx"
import Footer from "../components/Footer.tsx"
import Banner from "../components/Banner.tsx"
import FAQ from "../components/FAQ.tsx"

const faqs = [
    {
        question: "QUESTION NUMBER 1 CAN GO HERE?",
        answer: "answer1"
    },
    {
        question: "QUESTION NUMBER 2 CAN GO HERE?",
        answer: "answer1"
    },
    {
        question: "QUESTION NUMBER 3 CAN GO HERE?",
        answer: "answer1"
    }
]

export default function Home() {
    return (
        <>
            <Header/>
            <Banner/>

            {/* HOW IT WORKS */}
            <section className="bg-white">
                <div className="pt-[112px] pb-[64px] text-center text-4xl font-extrabold text-[#ae000d]">HOW IT WORKS
                </div>

                <div className="pb-[112px] flex justify-evenly">
                    <div className="w-[14%] text-center">
                        <div className="text-7xl font-bold text-[#ae000d]">1</div>
                        <div className="text-sm font-semibold">
                            Step 1 copy can go here. Instead of the number 1, this can be an icon.
                        </div>
                        <div className="text-sm">Secondary information can go on these next few lines.</div>
                    </div>
                    <div className="w-[14%] text-center">
                        <div className="text-7xl font-bold text-[#ae000d]">2</div>
                        <div className="text-sm font-semibold">
                            Step 2 copy can go here. Instead of the number 2, this can be an icon.
                        </div>
                        <div className="text-sm">Secondary information can go on these next few lines.</div>
                    </div>
                    <div className="w-[14%] text-center">
                        <div className="text-7xl font-bold text-[#ae000d]">3</div>
                        <div className="text-sm font-semibold">
                            Step 3 copy can go here. Instead of the number 3, this can be an icon.
                        </div>
                        <div className="text-sm">Secondary information can go on these next few lines.</div>
                    </div>
                </div>
            </section>

            {/* FREQUENTLY ASKED QUESTIONS */}
            <section>
                <div className="my-[36px] text-center text-4xl font-extrabold text-white">FREQUENTLY ASKED QUESTIONS</div>

                <div className='flex flex-col items-center mb-[18px]'>
                    {faqs.map(d => {
                        return (<FAQ question={d.question} answer={d.answer}/>)
                    })}
                </div>

            </section>

            <Footer/>
        </>
    )
}