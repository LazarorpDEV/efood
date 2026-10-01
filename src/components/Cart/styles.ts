    import styled from 'styled-components'

    export const Overlay = styled.div`
    position: fixed;
    z-index: 20;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.8);
    `

    export const Sidebar = styled.aside`
    position: absolute;
    top: 0;
    right: 0;
    width: 360px;
    min-height: 100%;
    padding: 32px 8px;
    background-color: #e66767;

    @media (max-width: 480px) {
        width: 100%;
    }
    `

    export const Products = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    `

    export const Product = styled.div`
    position: relative;
    display: flex;
    gap: 8px;
    padding: 8px;
    background-color: #ffebd9;
    color: #e66767;
    `

    export const ProductImage = styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
    `

    export const ProductInfo = styled.div`
    h3 {
        margin-bottom: 16px;
        font-size: 18px;
        font-weight: 900;
    }

    span {
        font-size: 14px;
    }
    `

    export const Remove = styled.button`
    position: absolute;
    right: 8px;
    bottom: 8px;
    border: none;
    background: transparent;
    color: #e66767;
    font-size: 18px;
    font-weight: bold;
    `

    export const Total = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    color: #ffebd9;
    font-size: 14px;
    font-weight: bold;
    `

    export const Continue = styled.button`
    width: 100%;
    margin-top: 16px;
    padding: 6px;
    border: none;
    background-color: #ffebd9;
    color: #e66767;
    font-size: 14px;
    font-weight: bold;
    `