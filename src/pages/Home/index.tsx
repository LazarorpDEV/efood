    import { useEffect, useState } from 'react'

    import Header from '../../components/Header'
    import RestaurantCard from '../../components/RestaurantCard'
    import Footer from '../../components/Footer'

    import * as S from './styles'

    type Restaurant = {
    id: number
    titulo: string
    destacado: boolean
    tipo: string
    avaliacao: number
    descricao: string
    capa: string
    }

    const Home = () => {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([])

    useEffect(() => {
        fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
        .then((response) => {
            if (!response.ok) {
            throw new Error('Erro ao carregar os restaurantes')
            }

            return response.json()
        })
        .then((data: Restaurant[]) => {
            setRestaurants(data)
        })
        .catch((error) => {
            console.error('Erro ao buscar restaurantes:', error)
        })
    }, [])

    return (
        <>
        <Header />

        <S.Restaurants className="container">
            <S.RestaurantList>
            {restaurants.map((restaurant) => (
            <RestaurantCard
                key={restaurant.id}
                id={restaurant.id}
                title={restaurant.titulo}
                description={restaurant.descricao}
                rating={restaurant.avaliacao}
                image={restaurant.capa}
                tags={[
                    ...(restaurant.destacado ? ['Destaque da semana'] : []),
                    restaurant.tipo
                ]}
                />
            ))}
            </S.RestaurantList>
        </S.Restaurants>

        <Footer />
        </>
    )
    }

    export default Home