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
        message = "Ajudamos você a construir uma presença online forte e profissional que reflita o futuro do seu negócio!";
    } else {
        message = "Combinamos tecnologia de ponta com design inovador para criar sites personalizados com soluções modernas. Ajudamos você a construir uma presença online forte e profissional que reflita o futuro do seu negócio!";
    }

    return (
        <>
            <div
                className="bg-cover bg-no-repeat bg-center h-screen w-screen bg-dim"
                style={{
                    filter: 'brightness(85%)', backgroundImage: "url('/assets/Banner.png')",
                }}
            >
                <h1 className={`text-primaryText text-3xl md:text-5xl lg:text-7xl xl:text-8xl pt-20 pb-6 pl-8 lg:pt-[6rem] lg:py-[5rem] w-full md:w-2/3 lg:w-1/2 xl:w-2/4 ${styles["custom-h1"]}`}>
                    Construa seu futuro digital conosco.
                </h1>

                <p className={`text-primaryText text-1xl md:text-2xl lg:text-2xl pt-14 lg:pt-20 pl-8 w-full sm:w-2/4 md:w-3/4 lg:w-3/4 ${styles["custom-p"]}`}>{message}</p>

                <button className={`text-primaryButton text-1xl md:text-2xl lg:text-3xl xl:text-8xl px-1 py-1 mt-12 ml-8 md:px-4 md:py-2 lg:px-5 ${styles["custom-button"]}`}>      CONFERIR SERVIÇOS
                </button>
                <button className={`bg-custom text-primaryText text-1xl md:text-2xl lg:text-3xl xl:text-8xl px-1 py-1 mt-12 ml-1 md:px-4 md:py-2 md:ml-3 ${styles["custom-button"]}`}>
                    COMEÇAR PROJETO
                </button>
            </div>
        </>
    );
};

export default FirstSession;
