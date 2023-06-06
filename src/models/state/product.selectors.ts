import { ProductState } from './product-state.model';
import { RootState } from '../../store/store';

const selectProductState: (state: RootState) => ProductState = (state: RootState) => state.products;
export const selectProducts = (state: RootState) => selectProductState(state).products;
