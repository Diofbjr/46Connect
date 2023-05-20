import React, { useEffect, useState } from "react";
import styles from '../../../styles/FirstSessionLP.module.css';
import 'tailwindcss/tailwind.css';
import Card from "./card";


const SecondSession: React.FC = () =>{
    return(
        <>
            <div className={`relative ${styles["main-container"]}`}>
            <Card
                title="Landing page"
                information="Você sabia que uma landing page pode ser a diferença entre um cliente em potencial que fecha negócio ou desiste? Com uma página simples e direta ao ponto, você pode capturar a atenção do seu público-alvo e transformar visitantes em leads qualificados !"
                buttonText="Clique aqui"
            />

            </div>
        </>
    )
}
export default SecondSession;