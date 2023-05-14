import Image from "next/image";
import { FifthComponent } from "./styles";
import {HiPhone} from 'react-icons/hi';
import {AiOutlineMail} from 'react-icons/ai';

import machine from '../../../../public/assets/Machine.png';

const FifthSession = () =>{
    return(
        <>
            <FifthComponent>
                <div className='text'>
                        <div className='bigText'>
                            <h2>Começar Projeto</h2>
                        </div>
                            
                </div>
                <div className='ImageText'>
                    <Image src={machine} alt='Maquina de escrever'/>
                    <h2>Entre em contato</h2>
                    <p>Tem alguma dúvida ou gostaria de falar diretamente conosco ? Entre em contato.</p>
                    <div className='phone'>
                        <HiPhone /><h5>TELEFONE</h5><h4>(99)9999-9999</h4>
                    </div>
                    <div className='email'>
                        <AiOutlineMail /><h5>EMAIL</h5><h4>NossoEmail@gmail.com</h4>
                    </div>
                </div>
                <div className='Contact'>
                <form >
                    <label htmlFor="name">Nome/Empresa</label>
                    <input type="text" id="name" name="name" placeholder='Seu nome ou nome da empresa'/>

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder='exemplo@gmail.com' />

                    <label htmlFor="number">Número</label>
                    <input type="text" id="number" name="number" placeholder='DDD + Numero'/>

                    <label htmlFor='help'>Como podemos ajudar?</label>
                    <textarea placeholder='Conte um pouco sobre o seu projeto'></textarea>

                    <button type="submit">Submit</button>
                    </form>
                </div>
            </FifthComponent>
        </>
    )
}

export default FifthSession;