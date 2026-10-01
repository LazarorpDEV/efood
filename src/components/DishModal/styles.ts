    import styled from 'styled-components'

    export const Overlay = styled.div`
    position: fixed;
    z-index: 10;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background-color: rgba(0, 0, 0, 0.8);
    `

    export const Modal = styled.div`
    position: relative;
    display: flex;
    gap: 24px;
    width: 100%;
    max-width: 1024px;
    padding: 32px;
    background-color: #e66767;
    color: #fff;

    @media (max-width: 768px) {
        flex-direction: column;
    }
    `

    export const Close = styled.button`
    position: absolute;
    top: 8px;
    right: 8px;
    border: none;
    background: transparent;
    color: #fff;
    font-size: 28px;
    font-weight: bold;
    `

    export const Image = styled.img`
    width: 280px;
    height: 280px;
    object-fit: cover;

    @media (max-width: 768px) {
        width: 100%;
    }
    `

    export const Content = styled.div`
    h2 {
        margin-bottom: 16px;
        font-size: 18px;
    }

    p {
        margin-bottom: 16px;
        font-size: 14px;
        line-height: 22px;
    }
    `

    export const AddButton = styled.button`
    padding: 8px;
    border: none;
    background-color: #ffebd9;
    color: #e66767;
    font-weight: bold;
    `