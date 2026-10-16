
    import { useState, type FormEvent } from 'react'
    import * as S from './styles'

    export type DeliveryData = {
    receiver: string
    address: {
        description: string
        city: string
        zipCode: string
        number: number
        complement: string
    }
    }

    type Props = {
    onBack: () => void
    onContinue: (data: DeliveryData) => void
    }

    const onlyNumbers = (value: string) => value.replace(/\D/g, '')

    const Delivery = ({ onBack, onContinue }: Props) => {
    const [receiver, setReceiver] = useState('')
    const [description, setDescription] = useState('')
    const [city, setCity] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [number, setNumber] = useState('')
    const [complement, setComplement] = useState('')

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const cleanZipCode = onlyNumbers(zipCode)
        const addressNumber = Number(number)

        if (
        !receiver.trim() ||
        !description.trim() ||
        !city.trim()
        ) {
        alert('Preencha corretamente os dados de entrega.')
        return
        }

        if (cleanZipCode.length !== 8) {
        alert('O CEP deve conter exatamente 8 números.')
        return
        }

        if (!Number.isSafeInteger(addressNumber) || addressNumber <= 0) {
        alert('Informe um número de endereço válido.')
        return
        }

        onContinue({
        receiver: receiver.trim(),
        address: {
            description: description.trim(),
            city: city.trim(),
            zipCode: cleanZipCode,
            number: addressNumber,
            complement: complement.trim()
        }
        })
    }

    return (
        <S.Container>
        <S.Title>Entrega</S.Title>

        <S.Form onSubmit={handleSubmit}>
            <S.Field>
            <label htmlFor="receiver">Quem irá receber</label>
            <input
                id="receiver"
                type="text"
                value={receiver}
                onChange={(event) => setReceiver(event.target.value)}
                required
                minLength={2}
                maxLength={100}
            />
            </S.Field>

            <S.Field>
            <label htmlFor="address">Endereço</label>
            <input
                id="address"
                type="text"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                required
                minLength={3}
                maxLength={150}
            />
            </S.Field>

            <S.Field>
            <label htmlFor="city">Cidade</label>
            <input
                id="city"
                type="text"
                value={city}
                onChange={(event) => setCity(event.target.value)}
                required
                minLength={2}
                maxLength={100}
            />
            </S.Field>

            <S.Row>
            <S.Field>
                <label htmlFor="zipCode">CEP</label>
                <input
                id="zipCode"
                type="text"
                inputMode="numeric"
                autoComplete="postal-code"
                placeholder="00000000"
                maxLength={8}
                pattern="[0-9]{8}"
                title="Digite exatamente 8 números"
                value={zipCode}
                onChange={(event) =>
                    setZipCode(
                    onlyNumbers(event.target.value).slice(0, 8)
                    )
                }
                required
                />
            </S.Field>

            <S.Field>
                <label htmlFor="number">Número</label>
                <input
                id="number"
                type="text"
                inputMode="numeric"
                pattern="[0-9]+"
                title="Digite apenas números"
                maxLength={10}
                value={number}
                onChange={(event) =>
                    setNumber(
                    onlyNumbers(event.target.value).slice(0, 10)
                    )
                }
                required
                />
            </S.Field>
            </S.Row>

            <S.Field>
            <label htmlFor="complement">
                Complemento (opcional)
            </label>
            <input
                id="complement"
                type="text"
                value={complement}
                onChange={(event) => setComplement(event.target.value)}
                maxLength={100}
            />
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
