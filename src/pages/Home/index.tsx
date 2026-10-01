    import Header from '../../components/Header'
    import RestaurantCard from '../../components/RestaurantCard'

    import hiokiSushi from '../../assets/images/hioki-sushi.png'
    import laDolceVita from '../../assets/images/la-dolce-vita.png'
    import Footer from '../../components/Footer'

    import * as S from './styles'

    const descriptionHioki =
    'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair de casa com nosso delivery!'

    const descriptionDolceVita =
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'

    const Home = () => {
    return (
        <>
        <Header />

        <S.Restaurants className="container">
            <S.RestaurantList>
            <RestaurantCard
                title="Hioki Sushi"
                description={descriptionHioki}
                rating={4.9}
                image={hiokiSushi}
                tags={['Destaque da semana', 'Japonesa']}
            />

            <RestaurantCard
                title="La Dolce Vita Trattoria"
                description={descriptionDolceVita}
                rating={4.6}
                image={laDolceVita}
                tags={['Italiana']}
            />

            <RestaurantCard
                title="La Dolce Vita Trattoria"
                description={descriptionDolceVita}
                rating={4.6}
                image={laDolceVita}
                tags={['Italiana']}
            />

            <RestaurantCard
                title="La Dolce Vita Trattoria"
                description={descriptionDolceVita}
                rating={4.6}
                image={laDolceVita}
                tags={['Italiana']}
            />

            <RestaurantCard
                title="La Dolce Vita Trattoria"
                description={descriptionDolceVita}
                rating={4.6}
                image={laDolceVita}
                tags={['Italiana']}
            />

            <RestaurantCard
                title="La Dolce Vita Trattoria"
                description={descriptionDolceVita}
                rating={4.6}
                image={laDolceVita}
                tags={['Italiana']}
            />
            </S.RestaurantList>
        </S.Restaurants>
        <Footer />
        </>
    )
    }

    export default Home