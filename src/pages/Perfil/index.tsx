    import { useState } from 'react'

    import ProfileHeader from '../../components/ProfileHeader'
    import DishCard from '../../components/DishCard'
    import DishModal from '../../components/DishModal'
    import Footer from '../../components/Footer'
    import Cart from '../../components/Cart'

    import bannerImage from '../../assets/images/la-dolce-vita.png'
    import pizzaImage from '../../assets/images/pizza-marguerita.png'

    import * as S from './styles'

    const pizzaDescription =
    'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'

    const Perfil = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [cartCount, setCartCount] = useState(0)
    const [isCartOpen, setIsCartOpen] = useState(false)


    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const addToCart = () => {
    setCartCount(cartCount + 1)
    setIsModalOpen(false)
    }

        const removeFromCart = () => {
    setCartCount((currentCount) =>
        Math.max(currentCount - 1, 0)
    )
    }

        const openCart = () => {
    setIsCartOpen(true)
    }

    const closeCart = () => {
    setIsCartOpen(false)
    }

    return (
        <>
        <ProfileHeader
            cartCount={cartCount}
            onCartClick={openCart}
            />

        <S.Banner
            style={{
            backgroundImage: `url(${bannerImage})`
            }}
        >
            <S.BannerContent className="container">
            <S.Category>Italiana</S.Category>

            <S.RestaurantName>
                La Dolce Vita Trattoria
            </S.RestaurantName>
            </S.BannerContent>
        </S.Banner>

        <S.Dishes className="container">
            <S.DishList>
            <DishCard
                title="Pizza Marguerita"
                description={pizzaDescription}
                image={pizzaImage}
                onClick={openModal}
            />

            <DishCard
                title="Pizza Marguerita"
                description={pizzaDescription}
                image={pizzaImage}
                onClick={openModal}
            />

            <DishCard
                title="Pizza Marguerita"
                description={pizzaDescription}
                image={pizzaImage}
                onClick={openModal}
            />

            <DishCard
                title="Pizza Marguerita"
                description={pizzaDescription}
                image={pizzaImage}
                onClick={openModal}
            />

            <DishCard
                title="Pizza Marguerita"
                description={pizzaDescription}
                image={pizzaImage}
                onClick={openModal}
            />

            <DishCard
                title="Pizza Marguerita"
                description={pizzaDescription}
                image={pizzaImage}
                onClick={openModal}
            />
            </S.DishList>
        </S.Dishes>

        <Footer />
        <DishModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onAddToCart={addToCart}
        />
        <Cart
            isOpen={isCartOpen}
            cartCount={cartCount}
            onClose={closeCart}
            onRemove={removeFromCart}
            />
        </>
    )
    }

    export default Perfil