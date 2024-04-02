import {ReactElement} from "react";

type Props = {
    showModal: boolean
    hideShowModalHandler: () => void
    children: ReactElement
}

export default function Modal({showModal, children, hideShowModalHandler}: Props) {
    if (!showModal) {
        return null
    }

    const modalResponsiveSize = "w-[600px] h-[500px] sm:w-[80%] xsm:w-[80%]"

    return (
        <div className='fixed z-[1999] top-0 left-0 w-[calc(100vw - 100%)] min-h-[100vh] overflow-auto'>
            <div onClick={() => hideShowModalHandler()} style={{background: "rgba(22, 19, 19, 0.6)"}}
                 className='w-[calc(100vw - 100%)] h-[100vh] min-w-[100vw]'>
            </div>
            <div
                className={'absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ' + modalResponsiveSize}>
                {children}
            </div>
        </div>
    )
}