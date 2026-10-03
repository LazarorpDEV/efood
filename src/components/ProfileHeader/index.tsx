    import { Link } from 'react-router-dom'

    import * as S from './styles'
    import logo from '../../assets/images/logo.svg'

    type Props = {
    cartCount: number
    onCartClick: () => void
    }

    const ProfileHeader = ({
    cartCount,
    onCartClick
    }: Props) => {
    return (
        <S.Header>
        <div className="container">
            <S.RestaurantsLink as={Link} to="/">
            Restaurantes
            </S.RestaurantsLink>

            <S.Logo as={Link} to="/">
            <img src={logo} alt="efood" />
            </S.Logo>

            <S.Cart type="button" onClick={onCartClick}>
            {cartCount} produto(s) no carrinho
            </S.Cart>
        </div>
        </S.Header>
    )
    }

    export default ProfileHeader