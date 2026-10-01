    import * as S from './styles'

    const Footer = () => {
    return (
        <S.Footer>
        <div className="container">
            <S.Logo>efood 🍴</S.Logo>

            <S.Social>
            <span>●</span>
            <span>●</span>
            <span>●</span>
            </S.Social>

            <S.Text>
            A efood é uma plataforma para divulgação de estabelecimentos,
            a responsabilidade pela entrega, qualidade dos produtos é toda
            do estabelecimento contratado.
            </S.Text>
        </div>
        </S.Footer>
    )
    }

    export default Footer