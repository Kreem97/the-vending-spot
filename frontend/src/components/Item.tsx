import {LazyLoadImage} from "react-lazy-load-image-component";

type Props = {
    image: string
    alt: string
    title?: string
    description?: string
}

export default function Item({image, alt, title, description}: Readonly<Props>) {
    return (
        <div>
            {/* image */}
            <div className="w-[350px] p-4">
                <LazyLoadImage className="w-full h-auto" src={image} alt={alt}/>
            </div>

            {/* title */}
            {title ? (
                <div>
                    <p className="text-center text-lg avenirNextMedium">{title}</p>
                </div>
            ) : ""}

            {/* description, read more, and modal */}
            {description ? (
                <div>
                    <p className="text-center text-lg avenirNextMedium">{description}</p>
                </div>
            ) : ""}
        </div>
    )
}