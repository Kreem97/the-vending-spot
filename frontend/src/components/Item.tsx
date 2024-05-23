import {LazyLoadImage} from "react-lazy-load-image-component"
import {useState} from "react"
import Modal from "./Modal.tsx"

type Props = {
    image: string
    alt: string
    title: string
    summary?: string
    description?: string
}

export default function Item({image, alt, title, summary, description}: Readonly<Props>) {
    const [showVendingMachineInfoModal, setShowVendingMachineInfoModal] = useState<boolean>(false)

    return (
        <>
            <div
                className={"w-[350px] p-4"}
                onClick={description ? () => setShowVendingMachineInfoModal(true) : undefined}
            >
                {/* image */}
                <div className={"mb-[12px]"}>
                    <LazyLoadImage className="w-full h-auto" src={image} alt={alt}/>
                </div>

                {/* title */}
                {title && summary ? (
                    <div>
                        <p className="text-center text-lg avenirNextBold text-[#ae000d]">{title}</p>
                    </div>
                ) : (
                    <div>
                        <p className="text-center text-lg avenirNextMedium">{title}</p>
                    </div>
                )}

                {/* description, read more, and modal */}
                {summary ? (
                    <>
                        <div>
                            <p className="text-center text-lg avenirNextMedium">{summary}</p>
                        </div>
                        <div>
                            <div className={"text-center text-[#024ddf] avenirNextBold"}>Read More...</div>
                        </div>
                    </>
                ) : ""}
            </div>

            <Modal
                showModal={showVendingMachineInfoModal}
                hideShowModalHandler={() => {
                    setShowVendingMachineInfoModal(false)
                }}
                largeModal={true}
            >
                <div className={"w-[100%] h-[100%] bg-[#ffffff] flex flex-col overflow-scroll"}>
                    <div
                        className="w-[100%] pt-[24px] flex justify-center items-center text-5xl lg:4xl md:text-4xl sm:text-4xl xsm:text-3xl avenirNextHeavy text-[#ae000d]"
                    >{title}</div>

                    <div
                        className="w-[100%] flex flex-col justify-evenly items-center"
                    >
                        <div className=""><LazyLoadImage src={image}/></div>

                        <div
                            className="p-[4%] bg-white list-disc"
                            dangerouslySetInnerHTML={{__html: description || ""}}
                        ></div>
                    </div>
                </div>
            </Modal>
        </>
    )
}