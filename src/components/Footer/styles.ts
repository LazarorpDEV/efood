    import styled from 'styled-components'

    export const Footer = styled.footer`
    padding: 40px 0;
    background-color: #ffebd9;
    color: #e66767;
    text-align: center;

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    `

    export const Logo = styled.img`
    width: 125px;
    height: auto;
    display: block;
    `

    export const Social = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 32px;

    a {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        width: 24px;
        height: 24px;
        display: block;
    }
    `

    export const Text = styled.p`
    max-width: 480px;
    margin-top: 32px;
    font-size: 10px;
    line-height: 12px;
    `