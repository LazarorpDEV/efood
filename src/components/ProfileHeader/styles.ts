    import styled from 'styled-components'

    export const Header = styled.header`
    height: 186px;
    background-color: #ffebd9;
    color: #e66767;

    .container {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    `

    export const RestaurantsLink = styled.span`
    font-size: 18px;
    font-weight: 900;
    `

    export const Logo = styled.span`
    display: block;

    img {
        width: 125px;
        height: auto;
        display: block;
    }
    `

    export const Cart = styled.button`
    border: none;
    background: transparent;
    color: #e66767;
    font-size: 18px;
    font-weight: 900;
    cursor: pointer;
    `