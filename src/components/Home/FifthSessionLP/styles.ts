import styled from 'styled-components';

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
        float: left;
        display: flex;
        flex-direction: column;
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
            margin-top: 1.5em;
            margin-left: 1.5em;
            letter-spacing: 0.25px;
            color: #FFFFFF;
        }
        p{
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
        .phone, .email{
            svg{
                margin: 3em 1em 0 2.3em;
                float: left;
                font-size: 20px;
                color: #EEEEEE;
            }
            h5{
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                line-height: 15px;
                letter-spacing: 0.4px;
                color: #ABA9A9;
                margin-left: 4.5em;
                margin-top: 2.7em;
            }
            h4{
                margin-top: 0.5em;
                margin-left: 4em;
                letter-spacing: 0.5px;
                font-size: 20px;
                color: #EEEEEE;
            }
        }.email{
            margin-bottom: 4em;
        }
    }
    .Contact{
        border: 1px solid red;
        float: right;
        display: flex;
        width: 631px;
        flex-direction: column;
        form{
            margin-left: 2em;
            label{
                display: block;
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 500;
                font-size: 20px;
                line-height: 20px;
                margin-bottom: 0.3em;
                letter-spacing: 0.15px;
                color: #FFFFFF;
            }
            input,textarea{
                display: block;
                width: 550px;
                height: 50px;
                background: linear-gradient(0deg, #1C1B1F, #1C1B1F), #1C1B1F;
                border-radius: 10px;
                border: none;
                margin-bottom: 3em;
                color: #ffff;
                padding-left: 15px;
                font-size: 18px;
            }
            input:focus, textarea:focus{
                outline: none;
            }
            input::placeholder, textarea::placeholder{
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 20px;
                letter-spacing: 0.5px;
                color: #FFFFFF;
                padding-left: -15px;
            }
            textarea{
                height: 200px !important;
                padding-top: 15px;
                resize: none;
            }
            textarea::placeholder{
                padding-top: -15px;
            }
        }
    }
`