import Image from 'next/image';
import { ThirdComponent } from "./styles";

import computer from '../../../../public/assets/computer.png';
import code from '../../../../public/assets/code.png';
import empty from '../../../../public/assets/empty.png';

const ThirdSession = () => {
    return(
        <>
            <ThirdComponent>
                <div className='text'>
                    <div className='bigText'>
                        <h2>Ter um website é essencial para o sucesso do seu negócio!</h2>
                    </div>
                    <p>Com um site profissional, você pode destacar seu negócio e conquistar mais clientes. Ter uma presença digital forte e bem estruturada é essencial nos dias de hoje para se diferenciar da concorrência e alcançar mais sucesso.<br/><br/>
                    Com um website, você pode apresentar seus produtos e serviços de maneira clara e objetiva, além de facilitar o contato com seus clientes. Invista no seu negócio e dê o próximo passo rumo ao crescimento!</p>
                </div>
                <div className='images'>
                    <Image src={computer} alt='Computador' className='image1'/>
                    <Image src={empty} alt='Vazio' className='image2'/>
                    <Image src={empty} alt='Vazio' className='image3'/>
                    <Image src={code} alt='Código' className='image4'/>
                </div>   
            </ThirdComponent>
        </>
    )
}
export default ThirdSession;