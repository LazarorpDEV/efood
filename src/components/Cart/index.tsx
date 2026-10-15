
    import { useState } from 'react'

    import Delivery, { type DeliveryData } from '../Delivery'
    import Payment, { type PaymentData } from '../Payment'
    import Confirmation from '../Confirmation'
    import { type Dish } from '../DishModal'

    import * as S from './styles'

    type Props = {
    isOpen: boolean
    items: Dish[]
    onClose: () => void
    onRemove: (id: number) => void
    }

    type CheckoutResponse = {
    orderId: string
    }

    const Cart = ({ isOpen, items, onClose, onRemove }: Props) => {
    const [step, setStep] = useState<
        'cart' | 'delivery' | 'payment' | 'confirmation'
    >('cart')

    const [deliveryData, setDeliveryData] =
        useState<DeliveryData | null>(null)

    const [orderId, setOrderId] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const total = items.reduce((accumulator, item) => {
        return accumulator + item.preco
    }, 0)

    const formatPrice = (price: number) => {
        return price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
        })
    }

    const goToPayment = (data: DeliveryData) => {
        setDeliveryData(data)
        setStep('payment')
    }

    const finishPayment = async (paymentData: PaymentData) => {
        if (!deliveryData || isLoading || items.length === 0) {
        return
        }

        setIsLoading(true)
        setError('')

        try {
        const response = await fetch(
            'https://api-ebac.vercel.app/api/efood/checkout',
            {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                products: items.map((item) => ({
                id: item.id,
                price: item.preco
                })),
                delivery: deliveryData,
                payment: paymentData
            })
            }
        )

        if (!response.ok) {
            throw new Error('Não foi possível finalizar o pedido.')
        }

        const data: CheckoutResponse = await response.json()

        if (!data.orderId) {
            throw new Error('A API não retornou o número do pedido.')
        }

        setOrderId(String(data.orderId))
        setStep('confirmation')
        } catch (err) {
        setError(
            err instanceof Error
            ? err.message
            : 'Ocorreu um erro ao finalizar o pedido.'
        )
        } finally {
        setIsLoading(false)
        }
    }

    const closeCart = () => {
        setStep('cart')
        setDeliveryData(null)
        setOrderId('')
        setError('')
        onClose()
    }

    if (!isOpen) {
        return null
    }

    return (
        <S.Overlay onClick={isLoading ? undefined : closeCart}>
        <S.Sidebar onClick={(event) => event.stopPropagation()}>
            {step === 'cart' && (
            <>
                <S.Products>
                {items.map((item, index) => (
                    <S.Product key={`${item.id}-${index}`}>
                    <S.ProductImage src={item.foto} alt={item.nome} />

                    <S.ProductInfo>
                        <h3>{item.nome}</h3>
                        <span>{formatPrice(item.preco)}</span>
                    </S.ProductInfo>

                    <S.Remove
                        type="button"
                        onClick={() => onRemove(item.id)}
                    >
                        ×
                    </S.Remove>
                    </S.Product>
                ))}
                </S.Products>

                <S.Total>
                <span>Valor total</span>
                <strong>{formatPrice(total)}</strong>
                </S.Total>

                {items.length > 0 && (
                <S.Continue
                    type="button"
                    onClick={() => setStep('delivery')}
                >
                    Continuar com a entrega
                </S.Continue>
                )}
            </>
            )}

            {step === 'delivery' && (
            <Delivery
                onBack={() => setStep('cart')}
                onContinue={goToPayment}
            />
            )}

            {step === 'payment' && (
            <>
                <Payment
                total={total}
                onBack={() => setStep('delivery')}
                onFinish={finishPayment}
                isLoading={isLoading}
                />

                {error && (
                <p role="alert" style={{ color: '#fff', marginTop: 16 }}>
                    {error}
                </p>
                )}
            </>
            )}

            {step === 'confirmation' && (
            <Confirmation orderId={orderId} onClose={closeCart} />
            )}
        </S.Sidebar>
        </S.Overlay>
    )
    }

    export default Cart
