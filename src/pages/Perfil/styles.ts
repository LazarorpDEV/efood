    import styled from 'styled-components'

    export const Banner = styled.section`
    position: relative;
    height: 280px;
    background-size: cover;
    background-position: center;

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.5);
    }
    `

    export const BannerContent = styled.div`
    position: relative;
    z-index: 1;
    height: 100%;
    padding-top: 24px;
    padding-bottom: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #fff;
    `

    export const Category = styled.span`
    font-size: 32px;
    font-weight: 100;
    `

    export const RestaurantName = styled.h1`
    font-size: 32px;
    font-weight: 900;
    `
    export const Dishes = styled.main`
    padding-top: 56px;
    padding-bottom: 120px;
    `

    export const DishList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
    `