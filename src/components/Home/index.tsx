import Image from 'next/image';
import {Container } from './styles';

import FirstSession from './FirstSessionLP';
import SecondSession from './SecondSessionLP';
import ThirdSession  from './ThirdSessionLP';
import FourthSession from './FourthSessionLP';
import FifthSession from './FifthSessionLP';

const Home = () => {
    
    return(
        <Container>
            <FirstSession/>
            <SecondSession/>
            <ThirdSession/>
            <FourthSession/>
            <FifthSession/>
        </Container>
    )

}

export default Home;    