
    import { useState, type FormEvent } from 'react'
    import * as S from './styles'

    export type PaymentData = {
    card: {
        name: string
        number: string
        code: number
        expires: {
        month: number
        year: number
        }
    }
    }

    type Props = {
    total: number
    onBack: () => void
    onFinish: (data: PaymentData) => void
    isLoading?: boolean
    }

    const Payment = ({
    total,
    onBack,
    onFinish,
    isLoading = false
    }: Props) => {
    const [cardName, setCardName] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [cvv, setCvv] = useState('')
    const [expirationMonth, setExpirationMonth] = useState('')
    const [expirationYear, setExpirationYear] = useState('')

    const formattedTotal = total.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const month = Number(expirationMonth)
        const year = Number(expirationYear)

        if (month < 1 || month > 12) {
        alert('Informe um mês de vencimento válido.')
        return
        }

        if (year < new Date().getFullYear()) {
        alert('Informe um ano de vencimento válido.')
        return
        }

        onFinish({
        card: {
            name: cardName,
            number: cardNumber.replace(/\s/g, ''),
            code: Number(cvv),
            expires: {
            month,
            year
            }
        }
        })
    }

    return (
        <S.Container>
        <S.Title>
            Pagamento - Valor a pagar {formattedTotal}
        </S.Title>

        <S.Form onSubmit={handleSubmit}>
            <S.Field>
            <label htmlFor="cardName">Nome no cartão</label>
            <input
                id="cardName"
                type="text"
                value={cardName}
                onChange={(event) => setCardName(event.target.value)}
                autoComplete="cc-name"
                required
            />
            </S.Field>

            <S.CardRow>
            <S.Field>
                <label htmlFor="cardNumber">Número do cartão</label>
                <input
                id="cardNumber"
                type="text"
                inputMode="numeric"
                autoComplete="cc-number"
                value={cardNumber}
                onChange={(event) => setCardNumber(event.target.value)}
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
                autoComplete="cc-csc"
                value={cvv}
                onChange={(event) => setCvv(event.target.value)}
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
                autoComplete="cc-exp-month"
                value={expirationMonth}
                onChange={(event) =>
                    setExpirationMonth(event.target.value)
                }
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
                autoComplete="cc-exp-year"
                value={expirationYear}
                onChange={(event) =>
                    setExpirationYear(event.target.value)
                }
                required
                />
            </S.Field>
            </S.DateRow>

            <S.Button type="submit" disabled={isLoading}>
            {isLoading ? 'Processando pedido...' : 'Finalizar pagamento'}
            </S.Button>

            <S.Button
            type="button"
            onClick={onBack}
            disabled={isLoading}
            >
            Voltar para a edição de endereço
            </S.Button>
        </S.Form>
        </S.Container>
    )
    }

    export default Payment
