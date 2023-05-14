import Image from "next/image";
import { FourthComponent } from "./styles";


import handshake from '../../../../public/assets/handshake.png';
import idea from '../../../../public/assets/idea.png';
import empty from '../../../../public/assets/empty.png';

const FourthSession = () =>{
    return(
        <>
            <FourthComponent>
                    <div className='images'>
                        <Image src={handshake} alt='Aperto de mão' className='image1'/>
                        <Image src={empty} alt='Aperto de mão' className='image2'/>
                        <Image src={empty} alt='Aperto de mão' className='image3'/>  
                        <Image src={idea} alt='Aperto de mão' className='image4'/>                  
                        
                    </div>
                    <div className='text'>
                        <div className='bigText'>
                            <h2>Podemos ajudar sua presença digital a se destacar</h2>
                        </div>
                            <p>Somos uma equipe de profissionais apaixonados por tecnologia e design, especializados no desenvolvimento de websites para pequenos e médios negócios.<br/><br/>Nosso objetivo é criar soluções digitais inovadoras que ajudem nossos clientes a crescer e se destacar em um mundo cada vez mais conectado.</p>
                    </div>
                </FourthComponent>
        
        </>
    )
}

export default FourthSession;