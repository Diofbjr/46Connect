import { FirstComponent } from "./styles";



const FirstSession = () => {
    return(
        <>
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
        </>
    )
}
export default FirstSession;