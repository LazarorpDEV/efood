    import * as S from './styles'

    type Props = {
    onBack: () => void
    onContinue: () => void
    }

    const Delivery = ({ onBack, onContinue }: Props) => {
    return (
        <S.Container>
        <S.Title>Entrega</S.Title>

        <S.Form
            onSubmit={(event) => {
            event.preventDefault()
            onContinue()
            }}
        >
            <S.Field>
            <label htmlFor="receiver">Quem irá receber</label>
            <input id="receiver" type="text" required />
            </S.Field>

            <S.Field>
            <label htmlFor="address">Endereço</label>
            <input id="address" type="text" required />
            </S.Field>

            <S.Field>
            <label htmlFor="city">Cidade</label>
            <input id="city" type="text" required />
            </S.Field>

            <S.Row>
            <S.Field>
                <label htmlFor="zipCode">CEP</label>
                <input id="zipCode" type="text" required />
            </S.Field>

            <S.Field>
                <label htmlFor="number">Número</label>
                <input id="number" type="text" required />
            </S.Field>
            </S.Row>

            <S.Field>
            <label htmlFor="complement">Complemento (opcional)</label>
            <input id="complement" type="text" />
            </S.Field>

            <S.Button type="submit">
            Continuar com o pagamento
            </S.Button>

            <S.Button type="button" onClick={onBack}>
            Voltar para o carrinho
            </S.Button>
        </S.Form>
        </S.Container>
    )
    }

    export default Delivery