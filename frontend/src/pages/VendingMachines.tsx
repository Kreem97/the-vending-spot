import Header from "../components/Header.tsx"
import Footer from "../components/Footer.tsx"
import Banner from "../components/Banner.tsx"
import alpineVT5000Img from "../assets/images/vending-machines/alpine-vt5000.jpeg"
import genevaImg from "../assets/images/vending-machines/geneva.jpeg"
import evokeSnack6Img from "../assets/images/vending-machines/evoke-snack-6.png"
import msPacManGalagaImg from "../assets/images/vending-machines/ms-pac-man-galaga.jpg"
import marvelContestOfChampionsImg from "../assets/images/vending-machines/marvel-contest-of-champions.jpg"
import Item from "../components/Item.tsx"

const vendingMachines = [
    {
        image: alpineVT5000Img,
        title: "Alpine VT5000",
        summary: "Alpine VT5000 dispenses snacks, chocolates, sodas, juices, dairy products, foods or other products best served cold. More variety in a single combination vending machine.",
        description: `
The Alpine ST5000 glass front refrigerated food &amp; beverage merchandiser provides the
largest dispensing capability with class leading energy efficiency. Vend sodas, juices,
milk, yogurts, and other foods best served cold from one versatile package.
<br/><br/>
<li>Optional touch screen interface</li>
<li>Built-in, full color 7” LCD screen replaces traditional keypad &amp; display</li>
<li>Attractive styling bezel with point of sale window</li>
<li>Americans with Disabilities Act Ready</li>
<li>Standard peripheral opening for additional payment or POS systems</li>
<li>Standard lighted keypad with Braille identification</li>
<li>MDB support for all industry standard devices including cash, coin, debit and credit systems</li>
<li>DEX data output support</li>
<li>Fully integrated controller with sales and accounting features</li>
`
    },
    {
        image: genevaImg,
        title:
            "Geneva",
        summary:
            "Geneva has the high quality you would expect from most coffee shops with the ease of pushing a button.",
        description:
            `
Today’s coffee culture has shaped customers’ tastes, and they demand quality products
from hot beverage merchandisers The Geneva hot beverage delivers with more drink
options than ever before.
<br/><br/>
<li>European-designed, state-of-the art brewing and filter system</li>
<li>Roast ground, freeze dried &amp; Bean-to-Cup models
<li>Americans with Disabilities Act (ADA) Compliant</li>
<li>LED lighting</li>
<li>Energy saving advanced power management system</li>
<li>Comprehensive drink range</li>
<li>Automatic opening delivery door and illuminated vending area</li>
<li>Small footprint</li>
`
    },
    {
        image: evokeSnack6Img,
        title:
            "Evoke Snack 6",
        summary:
            "The Ultimate Customer Experience. Ideal for high traffic, high volume locations. Help drive sales and customer satisfaction.",
        description:
            `
Featuring the largest merchandising window, most capacity and selections, and the
latest in customer interfaces and payment system technology, the Evoke Snack 6
provides operators with the capability to generate more revenue from existing locations
and secure new profitable locations. Ideal for high traffic, high volume locations, the
Evoke Snack 6 enables operators to improve operational efficiency, improve bottom-line
performance, and support business expansion. With its expansive capacity of up to 733
items and 83 product selections, the Evoke Snack 6 provides the largest merchandising
capability on the market with:
<br/><br/>
<li>LED Back Lighted Logo Panel Option</li>
<li>Ergonomic 10 Degree Recessed User Interface: Large backlighted and Braille
identified keys are complimented by a large full-color credit and information
screen.</li>
<li>Color Choice for User Interface Accent Lighting: Complement your location or
branding décor with programmable coin insert and user interface area down
lighting.</li>
<li>Six (6) standard Flex Shelf Technology Steel trays and 7th full-size tray option</li>
<li>12-wide configurations for a maximum variety and product selection</li>
<li>Over 47” of vertical product space and adjustability for large size snacks</li>
<li>DEX data output support</li>
<li>Fully integrated controller with sales and accounting features</li>
`
    },
    {
        image: msPacManGalagaImg,
        title:
            "Ms. Pac-Man/Galaga",
        summary:
            "The Ms. Pac-Man Galaga: Class of 1981 is a full-sized commercial arcade games!",
        description:
            `
Step back in time and relive your favorite arcade classics without the quarters. With six
officially licensed classic games from Bandai Namco, relive the glory days of the arcade.
Share old memories with friends and family for years to come. Experience the look,
sounds, and feel you can only get with the real thing.
<br/><br/>
The Ms. Pac-Man Galaga: Class of 1981 is a full-sized commercial arcade game
designed specifically for you, featuring real arcade controls, highly reliable modern
electronics, and a 27″ LCD panel (masked to 4:3 aspect ratio) to deliver the crisp
graphics you know and love.
`
    },
    {
        image: marvelContestOfChampionsImg,
        title:
            "Marvel Context of Champions",
        summary:
            "Marvel: Contest of Champions from Raw Thrills brings the adrenaline-fueled excitement of the mobile game into the realm of arcade gaming.",
        description:
            `
Marvel: Contest of Champions™ from Raw Thrills brings the adrenaline-fueled
excitement of the mobile game into the realm of arcade gaming. Developed by Raw
Thrills in collaboration with Kabam, this arcade adaptation offers a thrilling multiplayer
experience in a cabinet adorned with vibrant Marvel artwork. By scanning highly
collectible Champion Cards, players select their favorite Marvel superheroes and villains
from a cast of over one hundred, each with their own unique abilities and fighting styles,
to engage in fast-paced three-on-three battles on dynamic stages. With its intuitive
controls and spellbinding visuals, Marvel: Contest of Champions™ delivers an
immersive experience that appeals to both casual players and dedicated fans of the
Marvel Universe.
<br/><br/>
Featuring stunning graphics, engaging gameplay, and a competitive multiplayer mode,
Marvel: Contest of Champions™ offers arcade-goers an unforgettable gaming
experience. Whether battling against friends or challenging the AI, players can unleash
powerful special moves and combos to emerge victorious in epic showdowns. Gamers
also earn a collectible Champion Card after every play, with an opportunity to Upgrade
and receive even more cards — including super rare foil cards. With its combination of
arcade action and Marvel superhero power, this title continues to captivate audiences,
cementing its place as a must-play title in arcades worldwide.
<br><br>
<i>Cabinet rendering is subject to change.</i>
<br><br>
© 2024 MARVEL. MARVEL CONTEST OF CHAMPIONS SOFTWARE © 2024 KABAM
GAMES, INC., A NETMARBLE COMPANY. ARCADE SOFTWARE © 2024 RAW
THRILLS, INC. ALL RIGHTS RESERVED.
`
    }
]

export default function VendingMachines() {
    return (
        <>
            <Header/>
            <Banner heading="VENDING MACHINES"/>

            {/* VENDING MACHINES */}
            <section className={"bg-white pt-[64px] sm:pt-[32px] xsm:pt-[32px] mb-[24px]"}>
                <div className={"px-[56px] italic"}>
                    <p className={"text-center text-lg sm:text-base"}>
                        We pride ourselves on being able to find a machine to fit your needs and location. Here
                        are a couple examples of machines we have.
                    </p>
                </div>

                <div className="pb-[132px] mt-[24px] flex flex-wrap justify-center items-start">
                    {vendingMachines.map((vendingMachine, index) => (
                        <Item
                            key={index}
                            image={vendingMachine.image}
                            alt={vendingMachine.title}
                            title={vendingMachine.title}
                            summary={vendingMachine.summary}
                            description={vendingMachine.description}
                        />
                    ))}
                </div>
            </section>

            <Footer/>
        </>
    )
}