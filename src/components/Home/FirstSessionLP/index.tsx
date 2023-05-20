import React, { useEffect, useState } from "react";
import 'tailwindcss/tailwind.css';
import styles from '../../../styles/FirstSessionLP.module.css';

const FirstSession: React.FC = () => {
    const [screenSize, setScreenSize] = useState("");

    useEffect(() => {
        const handleResize = () => {
        const width = window.innerWidth;
        if (width >= 1280) {
            setScreenSize("xl");
        } else if (width >= 1024) {
            setScreenSize("lg");
        } else if (width >= 768) {
            setScreenSize("md");
        } else {
            setScreenSize("sm");
        }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
        window.removeEventListener("resize", handleResize);
        };
    }, []);

    let message;
    if (screenSize === "sm" || screenSize === "md") {
        message =
        "Ajudamos você a construir uma presença online forte e profissional que reflita o futuro do seu negócio!";
    } else {
        message =
        "Combinamos tecnologia de ponta com design inovador para criar sites personalizados com soluções modernas. Ajudamos você a construir uma presença online forte e profissional que reflita o futuro do seu negócio!";
    }

    //Estilização

    const h1Classes = `text-primaryText text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-9xl pt-[3rem] md:pt-[6rem] pb-6 pl-8 lg:pt-[4rem] lg:py-[5rem] 2xl:px-[5rem] 2xl:py-[6rem] w-5/6 sm:w-3/5 md:w-2/3 lg:w-1/2 xl:w-2/4 2xl:w-1/2`;
    const pClasses = `text-primaryText text-1xl sm:text-1x1 md:text-2xl lg:text-2xl xl:text-4xl 2xl:text-5xl pt-[1rem] md:pt-[2rem] pb-6 pl-8 lg:pt-[1rem] lg:py-[2rem] 2xl:px-[5rem] 2xl:py-[3rem] w-3/4 sm:w-2/4 md:w-3/4 lg:w-3/4 xl-2/4 2xl:w-3/5 `
    const buttonConferirClasses = `text-primaryButton text-1xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl  lg:ml-[1rem] lg:ml-[2rem] 2xl:ml-[5rem] px-1 py-1 mt-12 ml-8 xl-10 md:px-4 md:py-2 lg:px-5 xl:py-3`
    const buttonComecarClasses = `bg-custom text-primaryText text-1xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl  px-1 py-1 mt-12 ml-1 md:px-4 md:py-2 md:ml-3 xl:ml-4 2xl:ml-5 `
    return (
        
        <div className={`relative ${styles["main-container"]}`}>
            <div
            className="absolute inset-0 bg-cover bg-no-repeat bg-center w-screen"
            style={{
                filter: 'brightness(60%)',
                backgroundImage: "url('/assets/Banner.png')",
            }}
            ></div>

            <div className="relative flex flex-col min-h-screen">
                <h1 className={` ${styles["customh1"]} ${h1Classes}`}>
                    Construa seu futuro digital conosco.
                </h1>

                <p className={` ${styles["custom-p"]} ${pClasses}`}>
                    {message}
                </p>

                <div className="flex lg:mt-[5rem]">
                    <button className={`${styles["custom-button"]} ${buttonConferirClasses}`}>
                    CONFERIR SERVIÇOS
                    </button>
                    <button className={` ${styles["custom-button"]} ${buttonComecarClasses}`}>
                    COMEÇAR PROJETO
                    </button>
                </div>
            </div>
        </div>
        
    );
};

export default FirstSession;
