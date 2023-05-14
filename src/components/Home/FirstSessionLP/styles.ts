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
                font-size: 12px;
            }
            .firstButton{
                margin-left: 2em;
            }
            .secondButton{
                margin-left: 0.7em;
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
            .secondButton:hover{
                transform: scale(1.1);
                margin-left: 1.3em;
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
            .secondButton:hover{
                transform: scale(1.1);
                margin-left: 1.3em;
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
            .secondButton:hover{
                transform: scale(1.1);
                margin-left: 1.3em;
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
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    margin-top: 1em;
    @media screen and (min-width: 360px) and (max-width: 459px) {
        font-size: 16px ;
        margin-left: 1.7em;
        width: 210px;
        line-height: 20px;
    }
    @media screen and (min-width: 460px) and (max-width:559px) {
        font-size: 18px ;
        margin-left: 2.1em;
        width: 280px;
        line-height: 22px;
    }
    @media screen and (min-width: 560px) and (max-width:659px) {
        font-size: 21px ;
        margin-left: 2.3em;
        width: 330px;
        line-height: 25px;
    }
    @media screen and (min-width: 660px) and (max-width:759px) {
        font-size: 25px ;
        margin-left: 2.3em;
        width: 370px;
        line-height: 29px;
    }
    @media screen and (min-width: 760px) and (max-width:859px) {
        font-size: 29px;
        margin-left: 2.3em;
        width: 430px;
        letter-spacing: 0.5px;
        line-height: 33px;
    }
    @media screen and (min-width: 860px) and (max-width:959px) {
        font-size: 33px;
        margin-left: 2.3em;
        width: 400px;
        line-height: 37px;
    }
    @media screen and (min-width: 960px) and (max-width:1099px) {
        font-size: 37px;
        margin-left: 2em;
        width: 540px;
        line-height: 41px;
    }
    
    

    @media (min-width: 360px) {
        &::before {
            content: "boa noite";
        }
    }

    @media (max-width:1099px) {
        
        &::before {
            content: "Ajudamos você a construir uma presença online forte e profissional que reflita o futuro do seu negócio!";
        }
    }
`;
