import { createContext } from 'react';
import { formularioCompraContextType } from '../@types/formularioCompra';

const formularioCompraContext = createContext<formularioCompraContextType | null>(null);

export default formularioCompraContext;