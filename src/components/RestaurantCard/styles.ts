    import styled from 'styled-components'
    import { Link } from 'react-router-dom'

    export const Card = styled.article`
    background-color: #fff;
    border: 1px solid #e66767;
    `

    export const ImageArea = styled.div`
    height: 217px;
    position: relative;
    `

    export const Image = styled.img`
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    `

    export const Tags = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
    display: flex;
    gap: 8px;
    `

    export const Tag = styled.span`
    padding: 6px 8px;
    background-color: #e66767;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    `

    export const Content = styled.div`
    padding: 8px;
    color: #e66767;
    `

    export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    `

    export const Title = styled.h2`
    font-size: 18px;
    font-weight: bold;
    `

    export const Rating = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 18px;
    font-weight: bold;

    span {
        color: #ffb930;
        font-size: 21px;
    }
    `

    export const Description = styled.p`
    min-height: 88px;
    margin: 16px 0;
    font-size: 14px;
    line-height: 22px;
    `

    export const Button = styled(Link)`
    display: inline-block;
    padding: 6px 8px;
    background-color: #e66767;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    `