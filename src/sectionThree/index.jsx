
import img1 from "./assets/img1.svg";
import img2 from "./assets/img2.svg";
import img3 from "./assets/img3.svg";
import google from "./assets/google.svg";
import arrow from "./assets/arrow.svg";
import aritable from "./assets/airtable.svg";
import blogger from "./assets/blogger.svg";
import apple from "./assets/apple.svg";
import amazon from "./assets/amazon.svg";
import ali from "./assets/ali.svg";
import notion from "./assets/notion.svg";
import facebook from "./assets/facebook.svg";
import './index.css'
const data = [
    {
        id: "1",
        image: img1,
        name: "Item 1",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 2,
        image: img1,
        name: "Item 2",
        paragraph:
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 3,
        image: img1,
        name: "Item 3",
        paragraph:
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 4,
        image: img2,
        name: "Item 4",
        paragraph:
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 5,
        image: img1,
        name: "Item 5",
        paragraph:
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 6,
        image: img3,
        name: "Item 6",
        paragraph:
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 7,
        image: img1,
        name: "Item 5",
        paragraph:
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 8,
        image: img3,
        name: "Item 6",
        paragraph:
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 9,
        image: img1,
        name: "Item 5",
        paragraph:
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    // Add more items as needed
];

const SectionThree = () => {
    return (
        <section className="w-[90%] md:w-[80%] mx-auto py-12 flex flex-col items-center  ">
            <div className="speakers w-full flex flex-col">
                <div className="mb-8 w-full">
                    <div className="text-neutral-950 text-3xl sm:text-4xl lg:text-5xl font-medium font-['Ubuntu'] leading-[67.20px] w-max md:mx-auto">
                         <span  className="inline-block border-b-8 border-green-500 rounded-b h-16" > Meet</span> Our Speakers
                    </div>
            

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full" >
                    {data.map((item) => (
                        <div
                            key={item.id}
                            className="w-full rounded shadow sponsorPic"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full"
                            />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">
                                    {item.name}
                                </div>
                                <p className="text-gray-700 text-base">
                                    {item.paragraph}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-[5rem] md:grid md:grid-cols-[60%_40%] items-center justify-between mt-16 w-full md-large:flex-col">
                <div className="mb-8 sm:mb-0 w-full">
                    <div className="w-full md:w-[31.25rem] text-neutral-950 text-2xl sm:text-3xl lg:text-5xl font-medium font-['Ubuntu'] leading-[67.20px] mb-4 ml-0 md:ml-2">
                        Become a Partner
                    </div>
                    <div className=" text-zinc-600 text-lg font-normal font-['Ubuntu'] leading-[28.80px] gap-[2rem]">
                        This partnership proposal signifies a shared dedication
                        to fostering innovation, knowledge sharing, and
                        sustainable business practices.
                        <br />
                        By combining our resources and expertise, we aim to
                        create a significant and lasting impact on the SME
                        landscape, empowering entrepreneurs and driving economic
                        development. We look forward to closing a fruitful
                        collaboration with you, which will benefit businesses and
                        communities throughout the continent.
                        <br />
                        <br />
                        Want to be a partner?
                    </div>
                    <div className="flex items-center mt-[2rem]">
                        
                        <a
                            href="https://drive.google.com/file/d/1w9XUk1VvmnbzZztOb9jPZ0R-8gnELJwN/view?usp=drivesdk"
                            className="text-white font-bold px-8 py-4 rounded-lg bg-green transition duration-200 bg-green-600 block w-max"
                        >
                            Get Brochure
                        </a>
                       
                        
                        <img
                            src={arrow}
                            alt=""
                            className="ml-4 h-12 -mt-[3rem]"
                        />
                    </div>
                </div>
                <div className="w-full flex items-center justify-center flex-col sm:mt-16 partners mt-0 md:-mt-[4rem]">
                    <div className="flex justify-between w-full md:w-[20rem] mb-8">
                        <img className="img" src={google} alt="google" />
                        <img className="img" src={aritable} alt="aritable" />
                    </div>
                    <div className="flex justify-between w-full md:w-[27rem] mb-8">
                        <img className="img" src={blogger} alt="blogger" />
                        <img className="img" src={apple} alt="apple" />
                        <img className="img" src={amazon} alt="amazon" />
                    </div>

                    <div className="flex justify-between w-full md:w-[27rem] mb-8 ">
                        <img className="img" src={ali} alt="aliexpress" />
                        <img className="img" src={ali} alt="aliexpress" />
                        <img className="img" src={notion} alt="notion" />
                    </div>

                    <div className="flex items-center justify-center mb-8 ">
                        <img className="img" src={facebook} alt="facebook" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionThree;
