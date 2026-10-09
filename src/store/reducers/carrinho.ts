    import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
    import { type Dish } from '../../components/DishModal'

    type CarrinhoState = {
    itens: Dish[]
    }

    const initialState: CarrinhoState = {
    itens: []
    }

    const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState,
    reducers: {
        adicionar: (state, action: PayloadAction<Dish>) => {
        state.itens.push(action.payload)
        },

        remover: (state, action: PayloadAction<number>) => {
        const indice = state.itens.findIndex(
            (item) => item.id === action.payload
        )

        if (indice >= 0) {
            state.itens.splice(indice, 1)
        }
        },

        limpar: (state) => {
        state.itens = []
        }
    }
    })

    export const { adicionar, remover, limpar } = carrinhoSlice.actions

    export default carrinhoSlice.reducer