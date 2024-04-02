import {LazyLoadImage} from "react-lazy-load-image-component"
import {Button} from "react-bootstrap"
import banner from "../assets/images/banner.svg"
import Modal from "./Modal.tsx"
import {BaseSyntheticEvent, useState} from "react"
import {send} from '@emailjs/browser'
import {toast, ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import {config} from "../Config.tsx"

type Props = {
    heading: string
    preHeading?: string
}

export default function Banner({heading, preHeading}: Props) {
    const [showRequestVendingMachineModal, setShowRequestVendingMachineModal] = useState<boolean>(false)
    const [requestVendingMachineModalPage, setRequestVendingMachineModalPage] = useState<number>(1)
    const [requestVendingMachineCount, setRequestVendingMachineCount] = useState<string>("")
    const [requestVendingMachineCountValid, setRequestVendingMachineCountValid] = useState<boolean>(false)
    const [requestVendingMachineFormInputValues, setRequestVendingMachineFormInputValues] = useState<object>({})
    const [requestVendingMachineFormInputValuesValid, setRequestVendingMachineFormInputValuesValid] = useState<boolean>(false)

    const blackBtnStyle = "w-[110px] h-[50px] sm:w-[92px] xsm:w-[92px] sm:h-[40px] xsm:h-[40px] sm:text-sm xsm:text-sm bg-black rounded text-white hover:border-2 hover:border-black hover:bg-white hover:text-black"
    const redBtnStyle = "w-[110px] h-[50px] sm:w-[92px] xsm:w-[92px] sm:h-[40px] xsm:h-[40px] sm:text-sm xsm:text-sm bg-[#ae000d] rounded text-white hover:border-2 hover:border-[#ae000d] hover:bg-white hover:text-[#ae000d]"
    const redBtnInactiveStyle = "opacity-50 w-[110px] h-[50px] sm:w-[92px] xsm:w-[92px] sm:h-[40px] xsm:h-[40px] sm:text-sm xsm:text-sm bg-[#ae000d] rounded text-white"
    const greyBtnStyle = "w-[110px] h-[50px] sm:w-[92px] xsm:w-[92px] sm:h-[40px] xsm:h-[40px] sm:text-sm xsm:text-sm mb-[24px] bg-[#949598] rounded text-white hover:border-2 hover:border-[#949598] hover:bg-white hover:text-[#949598]"
    const greyBtnSelectedStyle = "w-[110px] h-[50px] sm:w-[92px] xsm:w-[92px] sm:h-[40px] xsm:h-[40px] sm:text-sm xsm:text-sm mb-[24px] rounded border-2 border-[#949598] bg-white text-[#949598]"

    const vendingMachineCountBtnValues = ["1", "2", "3", "4", "5", "6+"]
    const requestVendingMachineFormInputs = [
        {
            label: "First Name",
            placeholder: "Your First Name",
            name: "first_name"
        },
        {
            label: "Last Name",
            placeholder: "Your Last Name",
            name: "last_name"
        },
        {
            label: "Company Name",
            placeholder: "Company Name",
            name: "company_name"
        },
        {
            label: "Phone Number",
            placeholder: "Phone Number",
            name: "phone_number"
        },
        {
            label: "Email Address",
            placeholder: "Email Address",
            name: "email_address"
        },
        {
            label: "Location",
            placeholder: "Vending Location",
            name: "location"
        }
    ]

    const hideRequestVendingMachineModalHandler = () => {
        setRequestVendingMachineCountValid(false)
        setRequestVendingMachineCount("")
        setRequestVendingMachineFormInputValuesValid(false)
        setRequestVendingMachineFormInputValues({})
        setRequestVendingMachineModalPage(1)
        setShowRequestVendingMachineModal(false)
    }

    const requestVendingMachineNextPageHandler = () => {
        setRequestVendingMachineModalPage(requestVendingMachineModalPage + 1)
    }

    const requestVendingMachinePreviousPageHandler = () => {
        setRequestVendingMachineModalPage(requestVendingMachineModalPage - 1)
    }

    const requestVendingMachineCountHandler = (e: BaseSyntheticEvent) => {
        setRequestVendingMachineCount(e.target.value)
        setRequestVendingMachineCountValid(true)
    }

    const requestVendingMachineFormInputHandler = (e: BaseSyntheticEvent) => {
        const {name, value} = e.target
        const newRequestVendingMachineFormInputValues = {
            ...requestVendingMachineFormInputValues,
            [name]: value
        }

        if (value == "") {
            delete newRequestVendingMachineFormInputValues[name]
        }

        let valid = true
        for (const input of requestVendingMachineFormInputs) {
            if (!(input.name in newRequestVendingMachineFormInputValues)) {
                valid = false
            }
        }

        setRequestVendingMachineFormInputValues(newRequestVendingMachineFormInputValues)
        setRequestVendingMachineFormInputValuesValid(valid)
    }

    const requestVendingMachineSubmitHandler = () => {
        const templateParams = {
            subject: "The Vending Spot - Vending Machine Request Form Submission",
            number_vending_machines: requestVendingMachineCount,
            ...requestVendingMachineFormInputValues
        }
        hideRequestVendingMachineModalHandler()

        send(config.emailjsServiceId, config.emailjsRequestFormTemplateId, templateParams, {publicKey: config.emailjsPublicKey})
            .then(() => {
                toast.success("Request successfully sent")
            })
            .catch(() => {
                toast.error("Error submitting request, please try again")
            })
    }

    return (
        <>
            {/* BANNER */}
            <div className="w-[100%] h-[30vw] relative">
                {preHeading ?
                    (<div
                        className="sm:visible xsm:visible invisible mt-[8px] text-xl xsm:text-base text-center text-white avenirNextHeavy italic">
                        {preHeading}
                    </div>) : ""
                }
                <div
                    className="sm:visible xsm:visible invisible mt-[8px] text-5xl xsm:text-3xl text-center text-white avenirNextHeavy"
                >
                    {heading}
                </div>
                <div
                    className="w-[90%] sm:w-[100%] xsm:w-[100%] absolute sm:relative xsm:relative top-[50px] sm:top-0 xsm:top-0 left-[5%] sm:left-0 xsm:left-0">
                    <LazyLoadImage src={banner} className="h-[100%]"/>
                    <Button
                        title="Request Vending Machine"
                        className="absolute w-[140px] h-[60px] bottom-[32px] left-[32px] bg-[#ae000d] rounded-md text-white hover:bg-white hover:text-[#ae000d]"
                        onClick={() => setShowRequestVendingMachineModal(true)}
                    >Request Vending Machine</Button>
                </div>
                {preHeading ?
                    (<div
                        className="sm:hidden xsm:hidden w-[80%] absolute top-[10vw] left-[10%] text-center text-white text-6xl lg:text-5xl md:text-4xl sm:text-2xl avenirNextHeavy italic">
                        {preHeading}
                    </div>) : ""
                }
                <div
                    className="sm:hidden xsm:hidden w-[80%] absolute top-[18vw] left-[10%] text-center text-white text-8xl lg:text-7xl md:text-6xl sm:text-4xl avenirNextHeavy"
                >
                    {heading}
                </div>
            </div>
            <div className="bg-white h-[16vh]"></div>

            {/* REQUEST VENDING MACHINE */}
            <Modal showModal={showRequestVendingMachineModal}
                   hideShowModalHandler={hideRequestVendingMachineModalHandler}>
                <div className="w-[100%] h-[100%] bg-white">
                    <div className="h-[16%] bg-[#ae000d] flex items-center justify-center">
                        <div className="text-4xl sm:text-3xl xsm:text-xl text-white text-center avenirNextHeavy">
                            REQUEST VENDING MACHINE
                        </div>
                    </div>

                    {
                        requestVendingMachineModalPage == 1 ?
                            <div className="h-[80%] w-[80%] mx-[10%] flex flex-col justify-evenly">
                                <div
                                    className="text-3xl sm:text-2xl xsm:text-2xl text-black text-center avenirNextHeavy"
                                >
                                    GET VENDING MACHINES AT YOUR LOCATION?
                                </div>

                                <div className="flex justify-evenly">
                                    <Button
                                        className={blackBtnStyle}
                                        onClick={hideRequestVendingMachineModalHandler}
                                    >NO</Button>
                                    <Button
                                        className={redBtnStyle}
                                        onClick={requestVendingMachineNextPageHandler}
                                    >YES</Button>
                                </div>
                            </div> : ""
                    }

                    {
                        requestVendingMachineModalPage == 2 ?
                            <div
                                className="h-[84%] w-[80%] xsm:w-[96%] mx-[10%] xsm:mx-[2%] flex flex-col justify-evenly"
                            >
                                <div
                                    className="text-3xl sm:text-2xl xsm:text-2xl text-black text-center avenirNextHeavy"
                                >
                                    HOW MANY MACHINES DO YOU NEED?
                                </div>

                                <div className="w-[90%] ml-[5%] flex flex-row flex-wrap justify-evenly">
                                    {vendingMachineCountBtnValues.map((d, idx) => {
                                        return (
                                            <Button
                                                key={idx}
                                                className={requestVendingMachineCount == d ? greyBtnSelectedStyle : greyBtnStyle}
                                                value={d}
                                                onClick={requestVendingMachineCountHandler}
                                            >{d}</Button>
                                        )
                                    })}
                                </div>

                                <div className="flex justify-evenly">
                                    <Button
                                        className={blackBtnStyle}
                                        onClick={requestVendingMachinePreviousPageHandler}
                                    >PREVIOUS</Button>
                                    <Button
                                        className={requestVendingMachineCountValid ? redBtnStyle : redBtnInactiveStyle}
                                        onClick={requestVendingMachineCountValid ? requestVendingMachineNextPageHandler : () => {
                                        }}
                                    >NEXT</Button>
                                </div>
                            </div> : ""
                    }

                    {
                        requestVendingMachineModalPage == 3 ?
                            <div className="h-[84%] w-[80%] mx-[10%] flex flex-col justify-evenly">
                                <div className="h-[76%] flex flex-col justify-between">
                                    {requestVendingMachineFormInputs.map((d, idx) => {
                                        return (
                                            <div
                                                key={idx}
                                                className="flex flex-row justify-between sm:justify-center xsm:justify-center items-center"
                                            >
                                                <div
                                                    className="w-[14%] sm:w-[18%] xsm:w-[28%] text-right text-base sm:text-sm xsm:text-xs font-medium leading-tight"
                                                >
                                                    {d.label}
                                                </div>
                                                <div className="w-[80%] sm:w-[76%] xsm:w-[68%] sm:ml-[4%] xsm:ml-[4%]">
                                                    <input
                                                        className="w-[100%] h-[42px] mt-[4px] pl-[8px] border-2 rounded-md sm:text-sm xsm:text-xs"
                                                        name={d.name}
                                                        placeholder={d.placeholder}
                                                        onChange={requestVendingMachineFormInputHandler}
                                                    />
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>

                                <div className="flex justify-evenly">
                                    <Button
                                        className={blackBtnStyle}
                                        onClick={requestVendingMachinePreviousPageHandler}
                                    >PREVIOUS</Button>
                                    <Button
                                        className={requestVendingMachineFormInputValuesValid ? redBtnStyle : redBtnInactiveStyle}
                                        onClick={requestVendingMachineFormInputValuesValid ? requestVendingMachineSubmitHandler : () => {
                                        }}
                                    >SUBMIT</Button>
                                </div>
                            </div> : ""
                    }
                </div>
            </Modal>

            {/* SUCCESS/FAILURE ALERT */}
            <ToastContainer
                position="bottom-right"
                closeOnClick={false}
            />
        </>
    )
}