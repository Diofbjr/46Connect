import styled from 'styled-components';

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