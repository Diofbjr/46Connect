import styled from 'styled-components';

export const ThirdComponent = styled.div`
    display: flex;
    padding-bottom: 12em;
    .text{
        .bigText{
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
    @media screen and (min-width: 360px) and (max-width: 1099px){
        margin-bottom: 9em;
        .text{
            p{
                display: none;
            }
        }
        .images{
            display: none;
        }
    }
    @media screen and (min-width: 360px) and (max-width: 459px) {
        .text{
            .bigText{
                margin-left: 2em;
                h2{
                    margin-left: 0.5em;
                    width: 10em;
                    font-size: 25px;
                    line-height: 29px;
                    letter-spacing: 0.25px;
                }
            }
            
        }
    }
    @media screen and (min-width: 460px) and (max-width: 559px) {
        .text{
            .bigText{
                margin-left: 2.2em;
                h2{
                    margin-left: 0.5em;
                    width: 10em;
                    font-size: 28px;
                    line-height: 32px;
                    letter-spacing: 0.25px;
                }
            }
            
        }
    }
    @media screen and (min-width: 560px) and (max-width: 659px) {
        .text{
            .bigText{
                margin-left: 2.4em;
                h2{
                    margin-left: 0.5em;
                    width: 10em;
                    font-size: 34px;
                    line-height: 38px;
                    letter-spacing: 0.25px;
                }
            }
            
        }
    }
    @media screen and (min-width: 660px) and (max-width: 759px) {
        .text{
            .bigText{
                margin-left: 2.7em;
                h2{
                    margin-left: 0.5em;
                    width: 10em;
                    font-size: 37px;
                    line-height: 41px;
                    letter-spacing: 0.25px;
                }
            }
            
        }
    }
    @media screen and (min-width: 760px) and (max-width: 859px) {
        .text{
            .bigText{
                margin-left: 3.5em;
                h2{
                    margin-left: 0.5em;
                    width: 10em;
                    font-size: 42px;
                    line-height: 45px;
                    letter-spacing: 0.25px;
                }
            }
            
        }
    }
    @media screen and (min-width: 860px) and (max-width: 959px) {
        .text{
            .bigText{
                margin-left: 3.7em;
                h2{
                    margin-left: 0.5em;
                    width: 10em;
                    font-size: 47px;
                    line-height: 51px;
                    letter-spacing: 0.25px;
                }
            }
            
        }
    }
    @media screen and (min-width: 960px) and (max-width: 1099px) {
        .text{
            .bigText{
                margin-left: 4.1em;
                h2{
                    margin-left: 0.5em;
                    width: 10em;
                    font-size: 54px;
                    line-height: 58px;
                    letter-spacing: 0.25px;
                }
            }
            
        }
    }

    @media screen and (min-width: 1100px) and (max-width:1299px){}


`