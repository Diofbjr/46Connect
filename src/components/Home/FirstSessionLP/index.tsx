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

    return (
        
        <div className={`relative ${styles["main-container"]}`}>
            <div
            className="absolute inset-0 bg-cover bg-no-repeat bg-center w-screen"
            style={{
                filter: 'brightness(35%)',
                backgroundImage: "url('/assets/Banner.png')",
            }}
            ></div>

            <div className="relative flex flex-col h-screen">
            <h1 className={`text-primaryText text-custom-h1 pt-custom-pt-h1 pb-custom-pb-h1 pl-8 lg:pt-custom-pt-h1 lg:pb-custom-pb-h1 w-custom-w-h1 sm:w-custom-w-h1 md:w-custom-w-h1 lg:w-custom-w-h1 xl:w-custom-w-h1 ${styles["custom-h1"]}`}>
            Construa seu futuro digital conosco.
            </h1>


                <p className={`text-primaryText text-1xl md:text-2xl lg:text-2xl md:pt-20 pt-6 lg:pt-5 pl-8 w-full sm:w-2/4 md:w-3/4 lg:w-3/4 ${styles["custom-p"]}`}>
                    {message}
                </p>

                <div className="flex lg:mt-[5rem]">
                    <button className={`text-primaryButton text-1xl md:text-2xl lg:text-3xl xl:text-4xl px-1 py-1 mt-12 ml-8 md:px-4 md:py-2 lg:px-5  ${styles["custom-button"]}`}>
                    CONFERIR SERVIÇOS
                    </button>
                    <button className={`bg-custom text-primaryText text-1xl md:text-2xl lg:text-3xl xl:text-4xl px-1 py-1 mt-12 ml-1 md:px-4 md:py-2 md:ml-3 ${styles["custom-button"]}`}>
                    COMEÇAR PROJETO
                    </button>
                </div>
            </div>
        </div>
        
    );
};

export default FirstSession;
