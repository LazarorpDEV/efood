    import * as S from './styles'

    type Props = {
    onClose: () => void
    }

    const Confirmation = ({ onClose }: Props) => {
    return (
        <S.Container>
        <S.Title>Pedido realizado - PEDIDO #123456</S.Title>

        <S.Text>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
        </S.Text>

        <S.Text>
            Gostaríamos de ressaltar que nossos entregadores não estão autorizados
            a realizar cobranças extras.
        </S.Text>

        <S.Text>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </S.Text>

        <S.Text>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
        </S.Text>

        <S.Button type="button" onClick={onClose}>
            Concluir
        </S.Button>
        </S.Container>
    )
    }

    export default Confirmation