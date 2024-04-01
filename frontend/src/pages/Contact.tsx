import Header from "../components/Header.tsx"
import Footer from "../components/Footer.tsx"
import Banner from "../components/Banner.tsx"
import {Button} from "react-bootstrap"
import {BaseSyntheticEvent, useState} from "react"
import {send} from "@emailjs/browser"
import {toast} from "react-toastify"
import {config} from "../Config.tsx"

export default function Contact() {
    const [contactFormInputValues, setContactFormInputValues] = useState<object>({})
    const [contactFormValid, setContactFormValid] = useState<boolean>(false)

    const labelClasses = "pl-[8px] font-semibold"
    const inputClasses = "w-[100%] h-[42px] mt-[4px] pl-[8px] border-2 rounded"

    const redBtnStyle = "w-[110px] h-[50px] mt-[12px] bg-[#ae000d] rounded text-white hover:border-2 hover:border-[#ae000d] hover:bg-white hover:text-[#ae000d]"
    const redBtnInactiveStyle = "opacity-50 w-[110px] h-[50px] mt-[12px] bg-[#ae000d] rounded text-white"

    const contactFormInputHandler = (e: BaseSyntheticEvent) => {
        const {name, value} = e.target
        const newContactFormInputValues = {
            ...contactFormInputValues,
            [name]: value
        }

        if (value == "") {
            delete newContactFormInputValues[name]
        }

        let valid = false
        if ("name" in newContactFormInputValues
            && "phone" in newContactFormInputValues
            && "email" in newContactFormInputValues
            && "message" in newContactFormInputValues) {
            valid = true
        }

        setContactFormInputValues(newContactFormInputValues)
        setContactFormValid(valid)
    }

    const contactSubmitHandler = () => {
        const templateParams = {
            subject: "The Vending Spot - Contact Form Submission",
            ...contactFormInputValues
        }

        setContactFormValid(false)
        setContactFormInputValues({})

        send(config.emailjsServiceId, config.emailjsContactFormTemplateId, templateParams, {publicKey: config.emailjsPublicKey})
            .then(() => {
                toast.success("Request successfully sent")
            })
            .catch(() => {
                toast.error("Error submitting request, please try again")
            })
    }

    return (
        <>
            <Header/>
            <Banner heading="CONTACT"/>

            <section className="w-[100%] bg-white flex flex-col items-center">
                <div className="my-[48px] avenirNextHeavy text-4xl text-center text-[#ae000d]">GET IN TOUCH</div>

                <form className="w-[80%] md:w-[85%] sm:w-[95%] xsm:w-[95%] mb-[48px] flex flex-col">
                    <div>
                        <div className={labelClasses}>Name</div>
                        <input
                            className={inputClasses}
                            placeholder="Your First and Last Name"
                            name="name"
                            onChange={contactFormInputHandler}
                            value={"name" in contactFormInputValues ? contactFormInputValues.name as string : ""}
                        />
                    </div>

                    <div className="mt-[12px] flex flex-row flex-wrap justify-between">
                        <div className="w-[47%] md:w-[100%] sm:w-[100%] xsm:w-[100%]">
                            <div className={labelClasses}>Phone</div>
                            <input
                                className={inputClasses}
                                placeholder="Phone"
                                name="phone"
                                onChange={contactFormInputHandler}
                                value={"phone" in contactFormInputValues ? contactFormInputValues.phone as string : ""}
                            />
                        </div>
                        <div className="w-[47%] md:w-[100%] sm:w-[100%] xsm:w-[100%] md:mt-[12px] sm:mt-[12px] xsm:mt-[12px]">
                            <div className={labelClasses}>Email</div>
                            <input
                                className={inputClasses}
                                placeholder="Email"
                                name="email"
                                onChange={contactFormInputHandler}
                                value={"email" in contactFormInputValues ? contactFormInputValues.email as string : ""}
                            />
                        </div>
                    </div>

                    <div className="mt-[12px]">
                        <div className={labelClasses}>Message</div>
                        <textarea
                            className="w-[100%] h-[140px] pl-[8px] pt-[4px] border-2 rounded"
                            placeholder="Your Message"
                            name="message"
                            onChange={contactFormInputHandler}
                            value={"message" in contactFormInputValues ? contactFormInputValues.message as string : ""}
                        />
                    </div>

                    <Button
                        className={contactFormValid ? redBtnStyle : redBtnInactiveStyle}
                        onClick={contactFormValid ? contactSubmitHandler : () => {
                        }}
                    >SUBMIT</Button>
                </form>
            </section>

            <Footer/>
        </>
    )
}