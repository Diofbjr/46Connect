import { FirstComponent , Text} from "./styles";




const FirstSession = () => {
    return(
        <>
            <FirstComponent>
                <div className="text">
                    <h1>Construa seu futuro digital conosco.</h1>
                    <Text/>
                </div>
                <div className='buttons'>
                    <button className='firstButton'>CONFERIR SERVIÇOS</button>
                    <button className='secondButton'>COMEÇAR PROJETO</button>
                </div>
            </FirstComponent>
        </>
    )
}
export default FirstSession;