import Image from 'next/image';
import {Container, FirstComponent, SecondComponent, ThirdComponent, FourthComponent, FifthComponent } from './styles';

import computer from '../../../public/assets/computer.png';
import empty from '../../../public/assets/empty.png';
import code from '../../../public/assets/code.png';
import handshake from '../../../public/assets/handshake.png';
import idea from '../../../public/assets/idea.png';
import machine from '../../../public/assets/Machine.png';

const Home = () => {
    return(
        <Container>
            <FirstComponent>
                <div className="text">
                    <h1>Construa seu futuro digital conosco.</h1>
                    <p>Combinamos tecnologia de ponta com design inovador para criar sites personalizados com soluções modernas. Ajudamos você a construir uma presença online forte e profissional que reflita o futuro do seu negócio!</p>
                </div>
                <div className='buttons'>
                    <button className='firstButton'>Conferir Serviços</button>
                    <button className='secondButton'>COMEÇAR PROJETO</button>
                </div>
            </FirstComponent>
            <SecondComponent>
                <div className='screen'>
                    <h3>Landing Page</h3>
                    <p>Você sabia que uma landing page pode ser a diferença entre um cliente em potencial que fecha negócio ou desiste? Com uma página simples e direta ao ponto, você pode capturar a atenção do seu público-alvo e transformar visitantes em leads qualificados!</p>
                    <h4>R$999.00</h4>
                    <button>AGENDAR SERVIÇO</button>
                </div>

                <div className='screen screen1'>
                    <h3>Web Site</h3>
                    <p>O seu website é a vitrine online do seu negócio, e nós estamos aqui para garantir que ele transmita a mensagem certa. Combinando design atraente e funcionalidades essenciais, criamos websites personalizados que ajudam a destacar a sua marca e a atrair novos clientes!</p>
                    <h4>R$999.00</h4>
                    <button>AGENDAR SERVIÇO</button>
                </div>

                <div className='screen'>
                    <h3>Manutenção</h3>
                    <p>Oferecemos um serviço completo de atualização de design e código, garantindo que seu site esteja sempre moderno e funcionando perfeitamente. Conte com nossa equipe especializada para manter sua presença online sempre atualizada e eficiente.</p>
                    <h4>R$999.00</h4>
                    <button>AGENDAR SERVIÇO</button>
                </div>
            </SecondComponent>
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
            <FifthComponent>
            <div className='text'>
                    <div className='bigText'>
                        <h2>Começar Projeto</h2>
                    </div>
                        
            </div>
            <div className='ImageText'>
                <Image src={machine} alt='Maquina de escrever'/>
                <h2>Entre em contato</h2>
                <h5>Tem alguma dúvida ou gostaria de falar diretamente conosco ? Entre em contato.</h5>

            </div>
            <div className='Contact'>

            </div>
            </FifthComponent>
        </Container>
    )

}

export default Home;    