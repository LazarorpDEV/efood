    import * as S from './styles'

    type Props = {
    total: number
    onBack: () => void
    onFinish: () => void
    }

    const Payment = ({
    total,
    onBack,
    onFinish
    }: Props) => {
    const formattedTotal = total.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })

    return (
        <S.Container>
        <S.Title>
            Pagamento - Valor a pagar {formattedTotal}
        </S.Title>

        <S.Form
            onSubmit={(event) => {
            event.preventDefault()
            onFinish()
            }}
        >
            <S.Field>
            <label htmlFor="cardName">Nome no cartão</label>
            <input id="cardName" type="text" required />
            </S.Field>

            <S.CardRow>
            <S.Field>
                <label htmlFor="cardNumber">Número do cartão</label>
                <input
                id="cardNumber"
                type="text"
                inputMode="numeric"
                required
                />
            </S.Field>

            <S.SmallField>
                <label htmlFor="cvv">CVV</label>
                <input
                id="cvv"
                type="text"
                inputMode="numeric"
                maxLength={3}
                required
                />
            </S.SmallField>
            </S.CardRow>

            <S.DateRow>
            <S.Field>
                <label htmlFor="expirationMonth">
                Mês de vencimento
                </label>
                <input
                id="expirationMonth"
                type="text"
                inputMode="numeric"
                maxLength={2}
                required
                />
            </S.Field>

            <S.Field>
                <label htmlFor="expirationYear">
                Ano de vencimento
                </label>
                <input
                id="expirationYear"
                type="text"
                inputMode="numeric"
                maxLength={4}
                required
                />
            </S.Field>
            </S.DateRow>

            <S.Button type="submit">
            Finalizar pagamento
            </S.Button>

            <S.Button type="button" onClick={onBack}>
            Voltar para a edição de endereço
            </S.Button>
        </S.Form>
        </S.Container>
    )
    }

    export default Payment