
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

    const onlyNumbers = (value: string) => value.replace(/\D/g, '')

    const isValidCardNumber = (number: string) => {
    if (!/^\d{13,19}$/.test(number)) return false

    let sum = 0
    let doubleDigit = false

    for (let i = number.length - 1; i >= 0; i--) {
        let digit = Number(number[i])

        if (doubleDigit) {
        digit *= 2
        if (digit > 9) digit -= 9
        }

        sum += digit
        doubleDigit = !doubleDigit
    }

    return sum % 10 === 0
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

        const cleanCardNumber = onlyNumbers(cardNumber)
        const month = Number(expirationMonth)
        const year = Number(expirationYear)
        const now = new Date()

        if (cardName.trim().length < 3) {
        alert('Informe o nome completo do titular do cartão.')
        return
        }

        if (!isValidCardNumber(cleanCardNumber)) {
        alert('Informe um número de cartão válido.')
        return
        }

        if (!/^\d{3,4}$/.test(cvv)) {
        alert('O CVV deve conter 3 ou 4 números.')
        return
        }

        if (!/^\d{2}$/.test(expirationMonth) || month < 1 || month > 12) {
        alert('Informe um mês válido entre 01 e 12.')
        return
        }

        if (!/^\d{4}$/.test(expirationYear)) {
        alert('Informe o ano de vencimento com 4 números.')
        return
        }

        if (
        year < now.getFullYear() ||
        (year === now.getFullYear() && month < now.getMonth() + 1)
        ) {
        alert('O cartão está vencido.')
        return
        }

        onFinish({
        card: {
            name: cardName.trim(),
            number: cleanCardNumber,
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
                minLength={3}
                maxLength={100}
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
                placeholder="Somente números"
                minLength={13}
                maxLength={19}
                pattern="[0-9]{13,19}"
                title="Digite de 13 a 19 números"
                value={cardNumber}
                onChange={(event) =>
                    setCardNumber(
                    onlyNumbers(event.target.value).slice(0, 19)
                    )
                }
                required
                />
            </S.Field>

            <S.SmallField>
                <label htmlFor="cvv">CVV</label>
                <input
                id="cvv"
                type="text"
                inputMode="numeric"
                autoComplete="cc-csc"
                minLength={3}
                maxLength={4}
                pattern="[0-9]{3,4}"
                title="Digite 3 ou 4 números"
                value={cvv}
                onChange={(event) =>
                    setCvv(onlyNumbers(event.target.value).slice(0, 4))
                }
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
                pattern="[0-9]{2}"
                placeholder="MM"
                autoComplete="cc-exp-month"
                value={expirationMonth}
                onChange={(event) =>
                    setExpirationMonth(
                    onlyNumbers(event.target.value).slice(0, 2)
                    )
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
                pattern="[0-9]{4}"
                placeholder="AAAA"
                autoComplete="cc-exp-year"
                value={expirationYear}
                onChange={(event) =>
                    setExpirationYear(
                    onlyNumbers(event.target.value).slice(0, 4)
                    )
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
