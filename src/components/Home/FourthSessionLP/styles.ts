import styled from 'styled-components';

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