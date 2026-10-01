    import { useState } from 'react'

    import Delivery from '../Delivery'
    import Payment from '../Payment'
    import Confirmation from '../Confirmation'
    import { type Dish } from '../DishModal'

    import * as S from './styles'

    type Props = {
    isOpen: boolean
    items: Dish[]
    onClose: () => void
    onRemove: (id: number) => void
    }

    const Cart = ({
    isOpen,
    items,
    onClose,
    onRemove
    }: Props) => {
    const [step, setStep] = useState<
        'cart' | 'delivery' | 'payment' | 'confirmation'
    >('cart')

    if (!isOpen) {
        return null
    }

    const total = items.reduce((accumulator, item) => {
        return accumulator + item.preco
    }, 0)

    const formatPrice = (price: number) => {
        return price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
        })
    }

    const goToDelivery = () => {
        setStep('delivery')
    }

    const goToCart = () => {
        setStep('cart')
    }

    const goToPayment = () => {
        setStep('payment')
    }

    const goBackToDelivery = () => {
        setStep('delivery')
    }

    const finishPayment = () => {
        setStep('confirmation')
    }

    const closeCart = () => {
        setStep('cart')
        onClose()
    }

    return (
        <S.Overlay onClick={closeCart}>
        <S.Sidebar onClick={(event) => event.stopPropagation()}>
            {step === 'cart' && (
            <>
                <S.Products>
                {items.map((item, index) => (
                    <S.Product key={`${item.id}-${index}`}>
                    <S.ProductImage
                        src={item.foto}
                        alt={item.nome}
                    />

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
                    onClick={goToDelivery}
                >
                    Continuar com a entrega
                </S.Continue>
                )}
            </>
            )}

            {step === 'delivery' && (
            <Delivery
                onBack={goToCart}
                onContinue={goToPayment}
            />
            )}

            {step === 'payment' && (
            <Payment
                total={total}
                onBack={goBackToDelivery}
                onFinish={finishPayment}
            />
            )}

            {step === 'confirmation' && (
            <Confirmation onClose={closeCart} />
            )}
        </S.Sidebar>
        </S.Overlay>
    )
    }

    export default Cart