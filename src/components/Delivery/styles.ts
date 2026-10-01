        import styled from 'styled-components'

        export const Container = styled.div`
        color: #ffebd9;
        `

        export const Title = styled.h2`
        margin-bottom: 16px;
        font-size: 16px;
        font-weight: 900;
        `

        export const Form = styled.form`
        display: flex;
        flex-direction: column;
        gap: 8px;
        `

        export const Field = styled.div`
        width: 100%;

        label {
            display: block;
            margin-bottom: 8px;
            font-size: 14px;
            font-weight: bold;
        }

        input {
            width: 100%;
            height: 32px;
            padding: 8px;
            border: 1px solid #ffebd9;
            background-color: #ffebd9;
            color: #4b4b4b;
            font-size: 14px;
            font-weight: bold;

            &:focus {
            outline: 2px solid #fff;
            }
        }
        `

        export const Row = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 32px;
        `

        export const Button = styled.button`
        width: 100%;
        padding: 6px;
        border: none;
        background-color: #ffebd9;
        color: #e66767;
        font-size: 14px;
        font-weight: bold;

        &:first-of-type {
            margin-top: 16px;
        }
        `