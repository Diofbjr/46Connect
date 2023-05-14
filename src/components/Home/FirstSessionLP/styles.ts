import styled from 'styled-components';
import Banner from '../../../../public/assets/Banner.png';

export const FirstComponent = styled.div`
    background-image: url(${Banner.src});
    background-size: contain;
    background-repeat: no-repeat;
    height: auto;
    .text{
        h1{
            color: #F5F5F5;
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 400;
        }
    }
    .buttons{
        button{
            border: none;
        }
        .firstButton{
            border: 1px solid #2975CC;
            color: #2975CC;
        }
        .secondButton{
            background: #2975CC;
            color: #FAFAFA;
            cursor: pointer;
            transition: all 0.4s ease-in-out;
        }
    }
    @media screen and (min-width: 360px) and (max-width: 559px) {
        background-size: 650px auto !important;
        margin-top: 3em;
        .text{
            h1{
                font-size: 20px;
                width: 10em;
                margin-top: 1em;
                margin-left: 1em;
            }
        }
        .buttons{
            button{
                border-radius: 5px;
                font-size: 13px;
            }
            .firstButton{
                background: none;
                margin-left: 1em;
                margin-top: 3.4em;
                padding: 5px 10px;
            }
            .secondButton{
                margin-left: 0.5em;
                margin-top: 3.4em;
                padding: 6px 11px;
            }
            .secondButton:hover{
                transform: scale(1.2);
                margin-left: 1.3em;
            }
            margin-bottom: 9em;
        }
    }
    @media screen and (min-width: 560px) and (max-width:759px) {
        background-size: 500px auto !important;
        margin-top: 3em;
        .text{
            h1{
                font-size: 20px;
                width: 10em;
                margin-top: 1em;
                margin-left: 1em;
            }
        }
        .buttons{
            button{
                border-radius: 5px;
                font-size: 13px;
            }
            .firstButton{
                background: none;
                margin-left: 1em;
                margin-top: 3.4em;
                padding: 5px 10px;
            }
            .secondButton{
                margin-left: 0.5em;
                margin-top: 3.4em;
                padding: 6px 11px;
            }
            .secondButton:hover{
                transform: scale(1.2);
                margin-left: 1.3em;
            }
            margin-bottom: 9em;
        }

    }
    
`








export const Text = styled.h1`
    font-size: 16px;
    color: #F5F5F5;
    text-align: justify;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    margin-top: 1em;
    margin-left: 3em;
    
    line-height: 20px;
    letter-spacing: 0.5px;

    @media (min-width: 360px) {
        &::before {
            content: "boa noite";
        }
    }

    @media (max-width: 559px) {
        width: 14em !important;
        &::before {
            content: "Ajudamos você a construir uma presença online forte e profissional que reflita o futuro do seu negócio!";
        }
    }
`;
