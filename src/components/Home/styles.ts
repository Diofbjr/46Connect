import styled from "styled-components";
import Banner from '../../../public/assets/Banner.png';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #131313;
    @media screen and (min-width: 400px) and (max-width: 1900px) {
        
    }
`
export const FirstComponent = styled.div`
    background-image: url(${Banner.src});
    background-size: contain;
    height: 100%;
    .text{
        h1{
            color: #F5F5F5;
            font-size: 60px;
            width: 11em;
            margin-top: 4em;
            margin-left: 1em;
        }
        p{
            color: #F5F5F5;
            font-size: 20px;
            width: 28em;
            text-align: justify;
            margin-top: 1em;
            margin-left: 3em;
        }

    }
    .buttons{
        padding-bottom: 10.01em;
        button{
            border: none;
            border-radius: 10px;
            font-size: 20px;
        }
        .firstButton{
            background: none;
            margin-left: 3em;
            margin-top: 1.4em;
            border: 1px solid #2975CC;
            color: #2975CC;
            padding: 10px 30px;
        }
        .secondButton{
            background: #2975CC;
            margin-left: 0.5em;
            margin-top: 1.4em;
            color: #FAFAFA;
            padding: 11px 20px;
            cursor: pointer;
            transition: all 0.4s ease-in-out;
        }
        .secondButton:hover{
                transform: scale(1.2);
                margin-left: 1.2em;
            }
    }
`

export const SecondComponent = styled.div`
    display: flex;
    margin: 7em auto 0;
    gap: 30px;
    .screen{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #ffffff09;
        color: #FBFBFB;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
        width: 400px;
        border-radius: 15px;
        h3{
            margin-top: 4em;
            font-style: normal;
            font-weight: 500;
            font-size: 32px;
        }
        p{
            margin-top: 1em;
            width: 380px;
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            text-align: center;
            letter-spacing: 0.5px;
        }
        h4{
            margin-top: 2em;
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 24px;
            letter-spacing: 0.15px;
        }
        button{
            background: none;
            margin-top: 1.5em;
            margin-bottom: 2.5em;
            border: 1px solid #2975CC;
            color: #2975CC;
            padding: 10px 30px;
            border-radius: 10px;
            font-size: 20px;
        }
    }
    .screen1{
        h4{
            margin-top: 1.1em !important;
        }
    }
`
export const ThirdComponent = styled.div`
    display: flex;
    margin-top: 15em;
    padding-bottom: 12em;
    .text{
        .bigText{
            margin-left: 3.6em;
            display: inline-block;
            border-left: 2px solid #FBFBFB;
            height: auto;
            line-height: 2.5;
            padding-left: 10px;
            h2{
                margin-left: 0.5em;
                width: 15em;
                font-style: normal;
                font-weight: 400;
                font-size: 50px;
                line-height: 43px;
                letter-spacing: 0.25px;
            color: #FFFFFF;
            }
        }
        p{
            color: #F5F5F5;
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 20px;
            letter-spacing: 0.5px;
            width: 35em;
            margin-top: 3em;
            margin-left: 4.7em;
        }
        
    }
    .images{
        position: relative;
        width: 100%;
        height: auto;
        img{
            width: 170px;
            height: 170px;
            border-radius: 10px;
        }
        .image1{
            position: absolute;
            top: 0;
            left: 70px;

        }
        .image2{
            position: absolute;
            top: 0;
            right: 70px;
        }
        .image3{
            position: absolute;
            bottom: -80px;
            left: 70px;
        }
        .image4{
            position: absolute;
            bottom: -80px;
            right: 70px;
        }
    }

`
export const FourthComponent = styled.div`
    display: flex;
    padding-bottom: 20em;
    .images{
        position: relative;
        width: 100%;
        height: auto;
        img{
            width: 170px;
            height: 170px;
            border-radius: 10px;
        }
        .image1{
            position: absolute;
            top: 0;
            left: 70px;
        }
        .image2{
            position: absolute;
            top: 0;
            right: 70px;
        }
        .image3{
            position: absolute;
            bottom: -120px;
            left: 70px;
        }
        .image4{
            position: absolute;
            right: 70px;
            bottom: -120px;
        }
        
    }
    .text{
        .bigText{
            margin-right: 3.6em;
            display: inline-block;
            border-left: 2px solid #FBFBFB;
            line-height: 2.5;
            padding-left: 10px;
            h2{
                margin-left: 0.5em;
                width: 15em;
                font-style: normal;
                font-weight: 400;
                font-size: 50px;
                line-height: 43px;
                letter-spacing: 0.25px;
            color: #FFFFFF;
            }
        }
        p{
            color: #F5F5F5;
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 20px;
            letter-spacing: 0.5px;
            width: 35em;
            margin-top: 3em;
            margin-left: 1.4em;
        }
    }
`

export const FifthComponent = styled.div`
    border: 1px solid red;
    .text{
        .bigText{
            margin-left: 3.6em;
            margin-bottom: 7em;
            display: inline-block;
            border-left: 2px solid #FBFBFB;
            line-height: 2.5;
            padding-left: 10px;
            h2{
                margin-left: 0.5em;
                width: 15em;
                font-style: normal;
                font-weight: 400;
                font-size: 50px;
                line-height: 43px;
                letter-spacing: 0.25px;
            color: #FFFFFF;
            }
        }
    }
    .ImageText{
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
        background: #1C1B1F;
        margin-left: 1em;
        width: 631px;
        border-radius: 15px;
        h2{
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 400;
            font-size: 35px;
            line-height: 43px;
            margin-left: 1.5em;
            letter-spacing: 0.25px;
            color: #FFFFFF;
        }
        h5{
            width: 400px;
            height: 40px;
            margin-top: 2em;
            margin-left: 3.3em;
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            letter-spacing: 0.5px;

            color: #EEEEEE;
        }
    }
`