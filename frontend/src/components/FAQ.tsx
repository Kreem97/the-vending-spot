import {useState} from 'react'

type Props = {
    question: string
    answer: string
}

export default function FAQ({question, answer}: Props) {
    const [openFAQ, setOpenFaq] = useState<boolean>(false)

    return (
        <div className='w-[800px] flex flex-col items-center bg-white rounded-md mb-[36px] py-[16px]'>
            <div className='w-[100%] flex justify-between px-[18px]'>
                <div className='text-xl font-medium'>
                    <h3 className=''>{question}</h3>
                </div>
                {
                    !openFAQ &&
                    <img
                        className='cursor-pointer w-[32px]'
                        src='circle-plus.svg'
                        alt='circle-plus'
                        onClick={() => setOpenFaq(true)}
                    />
                }
                {
                    openFAQ &&
                    <img
                        className='cursor-pointer w-[32px]'
                        src='circle-minus.svg'
                        alt='circle-minus'
                        onClick={() => setOpenFaq(false)}
                    />
                }
            </div>
            <div
                className='w-[100%] px-[18px] mt-[6px] transition-[height] duration-300'
                style={
                    openFAQ
                        ? {height: "30px", overflow: "auto"}
                        : {height: "0px", overflow: "hidden"}
                }
            >
                <p>{answer}</p>
            </div>
        </div>
    )
}