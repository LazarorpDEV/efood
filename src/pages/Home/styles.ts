    import styled from 'styled-components'

    export const Restaurants = styled.main`
    padding-top: 80px;
    padding-bottom: 120px;
    `

    export const RestaurantList = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 48px 80px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 32px;
    }
    `