import Box from "../atoms/box/Box";
import Typography from "../atoms/typography/Typography";
import * as S from "./styled";


function Card() {
    return (

        <>
            <S.CardContainer>
                <S.CardContent>
                    <S.IconContainer></S.IconContainer>
                    <Typography margin="-32px 0 0 0" padding="0 16px 16px 16px" text="Tenho muito orgulho em ter apoiado a parceria entre nossas instituições porque acredito no trabalho em rede principalmente quando as organizações tem como propósito construir uma sociedade melhor, mais justa e democrática. Levar a cultura de  paz para ambientes de aprisionamento e pensar em como a juventude pode pautar a educação para a paz atrelada aos objetivos do desenvolvimento sustentável é muito interessante.
Mariana Prado/Parceira/International Youth Day"/>
                </S.CardContent>

                <S.CardContent>
                    <S.IconContainer></S.IconContainer>
                    <Typography margin="-32px 0 0 0" padding="0 16px 16px 16px" text="Como voluntária do Programa de Educação para a Paz, me tornei mais atenta às minhas necessidades emocionais aprendendo muito sobre mim mesma, apenas doando um pouco do meu tempo, em algo tão sensível e visivelmente transformador. A paz, tema  do programa é o que nos move, mostrando que fazer algo mais, colhendo bons resultados, pode ser grandioso e nos encher de esperança para um mundo melhor.
Silene/Voluntária"/>
                </S.CardContent>
            </S.CardContainer>
        </>
    );
}

export default Card;
