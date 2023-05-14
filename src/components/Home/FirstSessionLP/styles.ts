import styled from 'styled-components';
import Banner from '../../../../public/assets/Banner.png';

export const FirstComponent = styled.div`
    background-image: url(${Banner.src});
    background-size: contain;
    background-repeat: no-repeat;
    height: auto;
    margin-top: 3em;
    .text{
        h1{
            color: #F5F5F5;
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 400;
            margin-top: 1em;
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
            padding: 5px 10px;
            margin-top: 3.4em;
        }
        .secondButton{
            background: #2975CC;
            color: #FAFAFA;
            cursor: pointer;
            transition: all 0.4s ease-in-out;
            padding: 6px 11px;
            margin-top: 3.4em;
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
                font-size: 13px;
            }
            .firstButton{
                margin-left: 1em;
            }
            .secondButton{
                margin-left: 0.5em;
            }
            .secondButton:hover{
                transform: scale(1.2);
                margin-left: 1.3em;
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
                font-size: 17px;
            }
            .firstButton{
                background: none;
                margin-left: 1em;
                
                
            }
            .secondButton{
                margin-left: 0.5em;
                margin-top: 3.4em;
            }
            .secondButton:hover{
                transform: scale(1.1);
                margin-left: 1.3em;
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
                font-size: 21px;
            }
            .firstButton{
                background: none;
                margin-left: 1em;
                
                
            }
            .secondButton{
                margin-left: 0.5em;
                margin-top: 3.4em;
            }
            .secondButton:hover{
                transform: scale(1.1);
                margin-left: 1.3em;
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
                font-size: 25px;
            }
            .firstButton{
                background: none;
                margin-left: 1em;
                
                
            }
            .secondButton{
                margin-left: 0.5em;
                margin-top: 3.4em;
            }
            .secondButton:hover{
                transform: scale(1.1);
                margin-left: 1.3em;
            }
            margin-bottom: 9em;
        }
    }
    
`








export const Text = styled.p`
    color: #F5F5F5;
    text-align: justify;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    margin-top: 1em;
    letter-spacing: 0.5px;
    @media screen and (min-width: 360px) and (max-width: 459px) {
        font-size: 16px ;
        margin-left: 1.7em;
        width: 185px;
        line-height: 20px;
    }
    @media screen and (min-width: 460px) and (max-width:559px) {
        font-size: 18px ;
        margin-left: 2.1em;
        width: 210px;
        line-height: 22px;
        border: 1px solid red;
    }
    @media screen and (min-width: 560px) and (max-width:659px) {
        font-size: 21px ;
        margin-left: 2.3em;
        width: 245px;
        line-height: 25px;
        border: 1px solid red;
    }
    @media screen and (min-width: 660px) and (max-width:759px) {
        font-size: 25px ;
        margin-left: 2.3em;
        width: 290px;
        line-height: 29px;
        border: 1px solid red;
    }
    
    
    

    @media (min-width: 360px) {
        &::before {
            content: "boa noite";
        }
    }

    @media (max-width: 759px) {
        
        &::before {
            content: "Ajudamos você a construir uma presença online forte e profissional que reflita o futuro do seu negócio!";
        }
    }
`;
