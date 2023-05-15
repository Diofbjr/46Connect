import styled from 'styled-components';
import Banner from '../../../../public/assets/Banner.png';

export const FirstComponent = styled.div`
    background-image: url(${Banner.src});
    background-size: contain;
    background-repeat: no-repeat;
    filter: brightness(90%);
    .text{
        h1{
            color: #F5F5F5;
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 400;
            margin-top: 3em;
            margin-left: 1em;
        }
    }
    .buttons{
        button{
            border: none;
        }
        .firstButton{
            background: none;
            border: 1px solid #2975CC;
            color: #2975CC;
            padding: 7px 10px;
            margin-top: 3.4em;
        }
        .secondButton{
            background: #2975CC;
            color: #FAFAFA;
            cursor: pointer;
            transition: all 0.4s ease-in-out;
            padding: 8px 11px;
            margin-top: 3.4em;
        }
        .secondButton:hover{
            transform: scale(1.2);
            margin-left: 1.3em;
        } 
    }
    @media screen and (min-width: 360px) and (max-width: 459px) {
        background-size: 550px auto !important;
        .text{
            h1{
                font-size: 27px;
                width: 10em;
            }
        }
        .buttons{
            margin-bottom: 9em;
            button{
                border-radius: 5px;
                font-size: 12px;
            }
            .firstButton{
                margin-left: 2em;
            }
            .secondButton{
                margin-left: 0.7em;
            }
            
        }
    }
    @media screen and (min-width: 460px) and (max-width:559px) {
        background-size: 650px auto !important;
        .text{
            h1{
                font-size: 37px;
                width: 10em;
            }
        }
        .buttons{
            button{
                border-radius: 5px;
                font-size: 15px;
            }
            .firstButton{
                background: none;
                margin-left: 2.5em;
                
                
            }
            .secondButton{
                margin-left: 0.5em;
                margin-top: 3.4em;
            }
            margin-bottom: 9em;
        }
    }
    @media screen and (min-width: 560px) and (max-width: 659px) {
        background-size:750px auto !important;
        .text{
            h1{
                font-size: 44px;
                width: 10em;
            }
        }
        .buttons{
            button{
                border-radius: 5px;
                font-size: 19px;
            }
            .firstButton{
                background: none;
                margin-left: 2.6em;
                
                
            }
            .secondButton{
                margin-left: 0.5em;
                margin-top: 3.4em;
            }
            margin-bottom: 9em;
        }
    }
    @media screen and (min-width: 660px) and (max-width:759px) {
        background-size:850px auto !important;
        .text{
            h1{
                font-size: 49px;
                width: 10em;
            }
        }
        .buttons{
            button{
                border-radius: 5px;
                font-size: 23px;
            }
            .firstButton{
                background: none;
                margin-left: 2.4em;
                
                
            }
            .secondButton{
                margin-left: 0.5em;
                margin-top: 3.4em;
            }
            margin-bottom: 9em;
        }
    }
    @media screen and (min-width: 760px) and (max-width:859px) {
        background-size:950px auto !important;
        .text{
            h1{
                font-size: 54px;
                width: 10em;
            }
        }
        .buttons{
            button{
                border-radius: 5px;
                font-size: 27px;
            }
            .firstButton{
                background: none;
                margin-left: 2.3em;
                
                
            }
            .secondButton{
                margin-left: 0.5em;
                margin-top: 3.4em;
            }
            margin-bottom: 9em;
        }
    }
    @media screen and (min-width: 860px) and (max-width:959px) {
        background-size:950px auto !important;
        .text{
            h1{
                font-size: 57px;
                width: 10em;
            }
        }
        .buttons{
            button{
                border-radius: 5px;
                font-size: 31px;
            }
            .firstButton{
                background: none;
                margin-left: 1.9em;
                
                
            }
            .secondButton{
                margin-left: 0.5em;
                margin-top: 3.4em;
            }
            margin-bottom: 9em;
        }
    }
    @media screen and (min-width: 960px) and (max-width:1099px) {
        background-size:1250px auto !important;
        .text{
            h1{
                font-size: 65px;
                width: 10em;
            }
        }
        .buttons{
            button{
                border-radius: 5px;
                font-size: 35px;
            }
            .firstButton{
                background: none;
                margin-left: 2em;
                
                
            }
            .secondButton{
                margin-left: 0.5em;
                margin-top: 3.4em;
            }
            margin-bottom: 9em;
        }
    }
    @media screen and (min-width: 1100px) and (max-width:1299px){
        height: 100vh;
        .text{
            h1{
                font-size: 43px;
                width: 10em;
            }
        }
        .buttons{
            button{
                border-radius: 5px;
                font-size: 19px;
            }
            .firstButton{
                background: none;
                margin-left: 2em;
                
                
            }
            .secondButton{
                margin-left: 0.5em;
                margin-top: 3.4em;
            }
            margin-bottom: 9em;
        }
    }
    @media screen and (min-width: 1300px) and (max-width:1499px){
    height: 100vh;
        .text{
            h1{
                font-size: 57px;
                width: 10em;
            }
        }
        .buttons{
            button{
                border-radius: 5px;
                font-size: 23px;
            }
            .firstButton{
                background: none;
                margin-left: 2em;
                
                
            }
            .secondButton{
                margin-left: 0.5em;
                margin-top: 3.4em;
            }
            margin-bottom: 9em;
        }
    }
    @media screen and (min-width: 1500px){
        background-size: 100% auto;
        height: 100vh;
        .text{
            h1{
                font-size: 70px;
                width: 10em;
            }
        }
        .buttons{
            button{
                border-radius: 5px;
                font-size: 27px;
            }
            .firstButton{
                background: none;
                margin-left: 2em;
                
                
            }
            .secondButton{
                margin-left: 0.5em;
                margin-top: 3.4em;
            }
            margin-bottom: 9em;
        }
    }

`








export const Text = styled.p`
    color: #F5F5F5;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    margin-top: 1.5em;
    letter-spacing: 0.5px;
    width: 50% !important;
    text-align: left;
    @media screen and (min-width: 360px) and (max-width: 459px) {
        font-size: 14px ;
        margin-left: 2em;
        line-height: 18px;
    }
    @media screen and (min-width: 460px) and (max-width:559px) {
        font-size: 18px ;
        margin-left: 2.1em;
        line-height: 22px;
    }
    @media screen and (min-width: 560px) and (max-width:659px) {
        font-size: 22px ;
        margin-left: 2.2em;
        line-height: 26px;
    }
    @media screen and (min-width: 660px) and (max-width:759px) {
        font-size: 24px ;
        margin-left: 2.1em;
        line-height: 28px;
    }
    @media screen and (min-width: 760px) and (max-width:859px) {
        font-size: 27px;
        margin-left: 2.3em;
        line-height: 31px;
    }
    @media screen and (min-width: 860px) and (max-width:959px) {
        font-size: 29.5px;
        margin-left: 2.1em;
        line-height: 33px;
    }
    @media screen and (min-width: 960px) and (max-width:1099px) {
        font-size: 37px;
        margin-left: 2em;
        line-height: 41px;
    }
    @media screen and (min-width: 1100px) and (max-width:1299px) {
        font-size: 21px;
        margin-left: 2em;
        line-height: 24px;
    }

    @media screen and (min-width: 1300px) and (max-width:1499px) {
        font-size: 23px;
        margin-left: 2.4em;
        line-height: 22px;
    }
    @media screen and (min-width: 1500px){
        font-size: 28px;
        margin-left: 2.4em;
        line-height: 32px;
    }
    
    

    @media (min-width: 360px) {
        &::before {
            content: "Combinamos tecnologia de ponta com design inovador para criar sites personalizados com soluções modernas. Ajudamos você a construir uma presença online forte e profissional que reflita o futuro do seu negócio!";
        }
    }

    @media (max-width:1099px) {
        
        &::before {
            content: "Ajudamos você a construir uma presença online forte e profissional que reflita o futuro do seu negócio!";
        }
    }
`;
