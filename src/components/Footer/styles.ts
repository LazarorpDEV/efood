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

    export const Logo = styled.div`
    font-size: 26px;
    font-weight: bold;
    `

    export const Social = styled.div`
    display: flex;
    gap: 8px;
    margin-top: 32px;
    font-size: 12px;
    `

    export const Text = styled.p`
    max-width: 480px;
    margin-top: 80px;
    font-size: 10px;
    line-height: 12px;
    `