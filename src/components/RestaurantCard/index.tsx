    import * as S from './styles'

    type Props = {
    id: number
    title: string
    description: string
    rating: number
    image: string
    tags?: string[]
    }

    const RestaurantCard = ({
    id,
    title,
    description,
    rating,
    image,
    tags = []
    }: Props) => {
    return (
        <S.Card>
        <S.ImageArea>
            <S.Image src={image} alt={title} />

            <S.Tags>
            {tags.map((tag) => (
                <S.Tag key={tag}>{tag}</S.Tag>
            ))}
            </S.Tags>
        </S.ImageArea>

        <S.Content>
            <S.Header>
            <S.Title>{title}</S.Title>

            <S.Rating>
                {rating} <span>★</span>
            </S.Rating>
            </S.Header>

            <S.Description>{description}</S.Description>

            <S.Button to={`/perfil/${id}`}>Saiba mais</S.Button>
        </S.Content>
        </S.Card>
    )
    }

    export default RestaurantCard