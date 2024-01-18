import React from 'react';
import './about.css'
import greek from './image/greek-triskelion.png'
import chala from './image/_DSC0828.jpg'

const About = () => {
    return ( 
        <>
            <div className='container-sobre'>
                <div className='container-marca'>
                    <img className='foto-marca' src={greek} alt="three-legged Greek triskele" />
                    <div>
                        <h2>SIGNIFICADO DA MARCA</h2>
                        <p>A marca FORME simboliza um triskele grego de três pernas com energia poderosa.<br></br> As pernas giratórias representam capacidade física e movimento.</p>
                    </div>
                </div>
                <div className='container-forme'>
                    <div>
                        <h2>COMO SURGIU A MARCA?</h2>
                        <p>Desde um pedido amigável até a criação da marca. Em 2014, na cidade de Salvador no Brasil, a <strong>FORME</strong> inicia uma loja de academias no ramo de vendas de suplementação e roupas fitness.<br></br><br></br>Um dia, um amigo de um atleta faz um pedido para customizar seu short Men`s Physique para um campeonato do qual participaria. A partir desse dia, a FORME recebe pedidos e mais pedidos de customização de shorts Men`s Physique de diversos atletas, amadores e PRO. Nomes como <strong>Fernando Chala, Miguel Cartaya, Victor Raminez, Fernando Valdez, Corey Moris, Dean Balabis, Pedro Lima, Giancarlo De Luca, Geder Rocha, Pedro Aires, Hygor Ponchet, Matheus Nery, Eric Wildberger, Gaston Zuniga, Heitor Galvão, Lucas Ferrara, Mike Willian e Ramses Rams</strong> já representaram a FORME no palco.<br></br><br></br>
                        A FORME faz parte da história de muitas vitórias e títulos, como o recente título de Fernando Chala primeiro lugar no Sheru Classic Latin America 2020 e o título Pro card para Heitor Galvão no Mr. Olympia 2019, para Geder Rocha em Ohio 2016, para Mike William no Olympia 2017 e para Giancarlo De Luca na América do Sul 2018.A marca crescia a cada ano e os produtos eram enviados para todo o Brasil e exterior. Então, nesse momento, decidiu-se fazer um catálogo digital para apresentação dos physique shorts e captação de pontos de revenda. <strong>A FORME é pioneira nas inovações dos shorts Masculino Physique</strong>, como o ajuste interno para a cintura e os dois modelos diferentes para caber nas diferentes federações. FORME conquista mercado de Físico Masculino e Muscular em diversos países.</p>
                    </div>
                    <img className='foto-chala' src={chala} alt="Fernando Chala" />
                </div>

            </div>
        </>
     );
}
 
export default About;