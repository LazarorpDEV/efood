
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

    const Delivery = ({ onBack, onContinue }: Props) => {
    const [receiver, setReceiver] = useState('')
    const [description, setDescription] = useState('')
    const [city, setCity] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [number, setNumber] = useState('')
    const [complement, setComplement] = useState('')

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        onContinue({
        receiver,
        address: {
            description,
            city,
            zipCode,
            number: Number(number),
            complement
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
            />
            </S.Field>

            <S.Row>
            <S.Field>
                <label htmlFor="zipCode">CEP</label>
                <input
                id="zipCode"
                type="text"
                value={zipCode}
                onChange={(event) => setZipCode(event.target.value)}
                required
                />
            </S.Field>

            <S.Field>
                <label htmlFor="number">Número</label>
                <input
                id="number"
                type="number"
                min="1"
                value={number}
                onChange={(event) => setNumber(event.target.value)}
                required
                />
            </S.Field>
            </S.Row>

            <S.Field>
            <label htmlFor="complement">Complemento (opcional)</label>
            <input
                id="complement"
                type="text"
                value={complement}
                onChange={(event) => setComplement(event.target.value)}
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
