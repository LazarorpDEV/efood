    import * as S from './styles'

    import pizzaImage from '../../assets/images/pizza-marguerita.png'

    type Props = {
    isOpen: boolean
    onClose: () => void
    onAddToCart: () => void
    }

    const DishModal = ({
    isOpen,
    onClose,
    onAddToCart
    }: Props) => {
    if (!isOpen) {
        return null
    }

    return (
        <S.Overlay onClick={onClose}>
        <S.Modal onClick={(event) => event.stopPropagation()}>
            <S.Close type="button" onClick={onClose}>
            ×
            </S.Close>

            <S.Image src={pizzaImage} alt="Pizza Marguerita" />

            <S.Content>
            <h2>Pizza Marguerita</h2>

            <p>
                A clássica Marguerita: molho de tomate suculento, mussarela
                derretida, manjericão fresco e um toque de azeite. Sabor e
                simplicidade!
            </p>

            <p>Serve: de 2 a 3 pessoas</p>

            <S.AddButton type="button" onClick={onAddToCart}>
                Adicionar ao carrinho - R$ 60,90
            </S.AddButton>
            </S.Content>
        </S.Modal>
        </S.Overlay>
    )
    }

    export default DishModal