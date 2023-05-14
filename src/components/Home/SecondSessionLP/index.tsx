import { SecondComponent } from "./styles"



const SecondSession = () =>{
    return(
        <>
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
        </>
    )
}

export default SecondSession;