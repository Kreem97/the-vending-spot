import {LazyLoadImage} from "react-lazy-load-image-component"
import {Button} from "react-bootstrap"
import banner from "../assets/images/banner.png"
import Modal from "./Modal.tsx"
import {BaseSyntheticEvent, useState} from "react"
import {send} from '@emailjs/browser'
import {toast, ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

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

    const blackBtnStyle = "w-[110px] h-[50px] bg-black rounded text-white hover:border-2 hover:border-black hover:bg-white hover:text-black"
    const redBtnStyle = "w-[110px] h-[50px] bg-[#ae000d] rounded text-white hover:border-2 hover:border-[#ae000d] hover:bg-white hover:text-[#ae000d]"
    const redBtnInactiveStyle = "opacity-50 w-[110px] h-[50px] bg-[#ae000d] rounded text-white"
    const greyBtnStyle = "w-[110px] h-[50px] mb-[24px] bg-[#949598] rounded text-white hover:border-2 hover:border-[#949598] hover:bg-white hover:text-[#949598]"
    const greyBtnSelectedStyle = "w-[110px] h-[50px] mb-[24px] rounded border-2 border-[#949598] bg-white text-[#949598]"

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

        send('service_brnarfw', 'template_wk2l79k', templateParams, {publicKey: 'qlBYQ-eiBGwnizExk'})
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
                <div className="w-[90%] absolute top-[50px] left-[5%]">
                    <LazyLoadImage src={banner} className="h-[100%]"/>
                    <Button
                        title="Request Vending Machine"
                        className="absolute w-[140px] h-[60px] bottom-[32px] left-[32px] bg-[#ae000d] rounded-md text-white hover:bg-white hover:text-[#ae000d]"
                        onClick={() => setShowRequestVendingMachineModal(true)}
                    >Request Vending Machine</Button>
                </div>
                {preHeading ?
                    (<div
                        className="w-[80%] absolute top-[10vw] left-[10%] text-center text-white text-6xl avenirNextHeavy italic">
                        {preHeading}
                    </div>) : ""}
                <div className="w-[80%] absolute top-[18vw] left-[10%] text-center text-white text-8xl avenirNextHeavy">
                    {heading}
                </div>
            </div>
            <div className="bg-white h-[16vh]"></div>

            {/* REQUEST VENDING MACHINE */}
            <Modal showModal={showRequestVendingMachineModal}
                   hideShowModalHandler={hideRequestVendingMachineModalHandler}>
                <div className="w-[600px] h-[500px] bg-white">
                    <div className="h-[16%] bg-[#ae000d] flex items-center justify-center">
                        <div className="text-4xl text-white text-center avenirNextHeavy">REQUEST VENDING MACHINE</div>
                    </div>

                    {
                        requestVendingMachineModalPage == 1 ?
                            <div className="h-[80%] w-[80%] mx-[10%] flex flex-col justify-evenly">
                                <div className="text-3xl text-black text-center avenirNextHeavy">
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
                            <div className="h-[84%] w-[80%] mx-[10%] flex flex-col justify-evenly">
                                <div className="text-3xl text-black text-center avenirNextHeavy">
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
                                            <div key={idx} className="flex flex-row justify-between items-center">
                                                <div className="w-[14%] text-right text-base font-medium leading-tight">
                                                    {d.label}
                                                </div>
                                                <div className="w-[80%]">
                                                    <input
                                                        className="w-[100%] h-[42px] mt-[4px] pl-[8px] border-2 rounded-md"
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