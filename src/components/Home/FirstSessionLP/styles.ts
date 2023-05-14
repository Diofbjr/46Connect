import styled from 'styled-components';
import Banner from '../../../../public/assets/Banner.png';

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