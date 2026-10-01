    import { useState } from 'react'

    import Delivery from '../Delivery'
    import Payment from '../Payment'
    import * as S from './styles'
    import Confirmation from '../Confirmation'
    

    import pizzaImage from '../../assets/images/pizza-marguerita.png'

    type Props = {
    isOpen: boolean
    cartCount: number
    onClose: () => void
    onRemove: () => void
    }

    const Cart = ({
    isOpen,
    cartCount,
    onClose,
    onRemove
    }: Props) => {
    const [step, setStep] = useState<
    'cart' | 'delivery' | 'payment' | 'confirmation'
    >('cart')


    if (!isOpen) {
        return null
    }

    const total = cartCount * 60.9

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
                {Array.from({ length: cartCount }).map((_, index) => (
                    <S.Product key={index}>
                    <S.ProductImage
                        src={pizzaImage}
                        alt="Pizza Marguerita"
                    />

                    <S.ProductInfo>
                        <h3>Pizza Marguerita</h3>
                        <span>R$ 60,90</span>
                    </S.ProductInfo>

                    <S.Remove type="button" onClick={onRemove}>
                        ×
                    </S.Remove>
                    </S.Product>
                ))}
                </S.Products>

                <S.Total>
                <span>Valor total</span>

                <strong>
                    {total.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                    })}
                </strong>
                </S.Total>

                {cartCount > 0 && (
                <S.Continue type="button" onClick={goToDelivery}>
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