import {useState} from 'react'
import circlePlus from "../assets/images/circle-plus.svg"
import circleMinus from "../assets/images/circle-minus.svg"

type Props = {
    question: string
    answer: string
}

export default function FAQ({question, answer}: Props) {
    const [openFAQ, setOpenFaq] = useState<boolean>(false)

    return (
        <div className='w-[800px] md:w-[700px] sm:w-[500px] xsm:w-[90%] flex flex-col items-center bg-white rounded-md mb-[36px] py-[16px]'>
            <div className='w-[100%] flex justify-between px-[18px]' onClick={() => setOpenFaq(!openFAQ)}>
                <div className='text-xl md:text-lg sm:text-lg xsm:text-lg font-medium'>
                    <h3 className=''>{question}</h3>
                </div>
                {
                    !openFAQ &&
                    <img
                        className='cursor-pointer w-[32px]'
                        src={circlePlus}
                        alt='circle-plus'
                    />
                }
                {
                    openFAQ &&
                    <img
                        className='cursor-pointer w-[32px]'
                        src={circleMinus}
                        alt='circle-minus'
                    />
                }
            </div>

            <div
                className='w-[100%] px-[18px] mt-[6px] transition-[height] duration-300 overflow-hidden flex items-center'
                style={
                    openFAQ
                        ? {height: "60px" }
                        : {height: "0px"}
                }
            >
                <p>{answer}</p>
            </div>
        </div>
    )
}