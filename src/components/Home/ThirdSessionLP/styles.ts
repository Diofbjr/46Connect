import styles, { styled } from 'styled-components';

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