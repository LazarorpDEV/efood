    import * as S from './styles'

    export type Dish = {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
    }

    type Props = {
    isOpen: boolean
    dish: Dish | null
    onClose: () => void
    onAddToCart: () => void
    }

    const DishModal = ({
    isOpen,
    dish,
    onClose,
    onAddToCart
    }: Props) => {
    if (!isOpen || !dish) {
        return null
    }

    const formatPrice = (price: number) => {
        return price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
        })
    }

    return (
        <S.Overlay onClick={onClose}>
        <S.Modal onClick={(event) => event.stopPropagation()}>
            <S.Close type="button" onClick={onClose}>
            ×
            </S.Close>

            <S.Image src={dish.foto} alt={dish.nome} />

            <S.Content>
            <h2>{dish.nome}</h2>

            <p>{dish.descricao}</p>

            <p>Serve: {dish.porcao}</p>

            <S.AddButton type="button" onClick={onAddToCart}>
                Adicionar ao carrinho - {formatPrice(dish.preco)}
            </S.AddButton>
            </S.Content>
        </S.Modal>
        </S.Overlay>
    )
    }

    export default DishModal