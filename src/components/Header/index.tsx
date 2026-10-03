    import * as S from './styles'
    import logo from '../../assets/images/logo.svg'

    const Header = () => {
    return (
        <S.Header>
        <div className="container">
            <S.Logo src={logo} alt="efood" />

            <S.Title>
            Viva experiências gastronômicas
            <br />
            no conforto da sua casa
            </S.Title>
        </div>
        </S.Header>
    )
    }

    export default Header