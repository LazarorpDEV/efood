    import * as S from './styles'

    import logo from '../../assets/images/logo.svg'
    import instagram from '../../assets/images/instagram.svg'
    import facebook from '../../assets/images/facebook.svg'
    import twitter from '../../assets/images/twitter.svg'

    const Footer = () => {
    return (
        <S.Footer>
        <div className="container">
            <S.Logo src={logo} alt="efood" />

            <S.Social>
            <a href="#" aria-label="Instagram">
                <img src={instagram} alt="Instagram" />
            </a>

            <a href="#" aria-label="Facebook">
                <img src={facebook} alt="Facebook" />
            </a>

            <a href="#" aria-label="Twitter">
                <img src={twitter} alt="Twitter" />
            </a>
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