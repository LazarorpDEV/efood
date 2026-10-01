    import { useEffect, useState } from 'react'
    import { useParams } from 'react-router-dom'

    import ProfileHeader from '../../components/ProfileHeader'
    import DishCard from '../../components/DishCard'
    import DishModal, { type Dish } from '../../components/DishModal'
    import Footer from '../../components/Footer'
    import Cart from '../../components/Cart'

    import * as S from './styles'

    type Restaurant = {
    id: number
    titulo: string
    destacado: boolean
    tipo: string
    avaliacao: number
    descricao: string
    capa: string
    cardapio: Dish[]
    }

    const Perfil = () => {
    const { id } = useParams()

    const [restaurant, setRestaurant] = useState<Restaurant | null>(null)
    const [selectedDish, setSelectedDish] = useState<Dish | null>(null)

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [cartItems, setCartItems] = useState<Dish[]>([])
    const [isCartOpen, setIsCartOpen] = useState(false)

    useEffect(() => {
        fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
        .then((response) => {
            if (!response.ok) {
            throw new Error('Erro ao carregar o restaurante')
            }

            return response.json()
        })
        .then((data: Restaurant[]) => {
            const selectedRestaurant = data.find(
            (item) => item.id === Number(id)
            )

            if (selectedRestaurant) {
            setRestaurant(selectedRestaurant)
            }
        })
        .catch((error) => {
            console.error('Erro ao buscar restaurante:', error)
        })
    }, [id])

    const openModal = (dish: Dish) => {
        setSelectedDish(dish)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedDish(null)
    }

    const addToCart = () => {
        if (selectedDish) {
        setCartItems((currentItems) => [
            ...currentItems,
            selectedDish
        ])
        }

        setIsModalOpen(false)
        setSelectedDish(null)
    }

    const removeFromCart = (id: number) => {
        setCartItems((currentItems) => {
        const itemIndex = currentItems.findIndex(
            (item) => item.id === id
        )

        if (itemIndex === -1) {
            return currentItems
        }

        return currentItems.filter(
            (_, index) => index !== itemIndex
        )
        })
    }

    const openCart = () => {
        setIsCartOpen(true)
    }

    const closeCart = () => {
        setIsCartOpen(false)
    }

    if (!restaurant) {
        return null
    }

    return (
        <>
        <ProfileHeader
            cartCount={cartItems.length}
            onCartClick={openCart}
        />

        <S.Banner
            style={{
            backgroundImage: `url(${restaurant.capa})`
            }}
        >
            <S.BannerContent className="container">
            <S.Category>{restaurant.tipo}</S.Category>

            <S.RestaurantName>
                {restaurant.titulo}
            </S.RestaurantName>
            </S.BannerContent>
        </S.Banner>

        <S.Dishes className="container">
            <S.DishList>
            {restaurant.cardapio.map((dish) => (
                <DishCard
                key={dish.id}
                title={dish.nome}
                description={dish.descricao}
                image={dish.foto}
                onClick={() => openModal(dish)}
                />
            ))}
            </S.DishList>
        </S.Dishes>

        <Footer />

        <DishModal
            isOpen={isModalOpen}
            dish={selectedDish}
            onClose={closeModal}
            onAddToCart={addToCart}
        />

        <Cart
            isOpen={isCartOpen}
            items={cartItems}
            onClose={closeCart}
            onRemove={removeFromCart}
        />
        </>
    )
    }

    export default Perfil