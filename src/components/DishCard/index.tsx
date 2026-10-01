    import * as S from './styles'

    type Props = {
    title: string
    description: string
    image: string
    onClick: () => void
    }

    const DishCard = ({
    title,
    description,
    image,
    onClick
    }: Props) => {
    return (
        <S.Card>
        <S.Image src={image} alt={title} />

        <S.Title>{title}</S.Title>

        <S.Description>{description}</S.Description>

        <S.Button type="button" onClick={onClick}>
            Adicionar ao carrinho
        </S.Button>
        </S.Card>
    )
    }

    export default DishCard