export type opcionesSelect = opcionSelect[];

export type formularioCompraContextType = {
  step: {
    index: number,
    label: string,
    name: string
  },
  setStep: React.Dispatch<React.SetStateAction<{ 
    index: number; 
    label: string; 
    name: string; 
  }>>
}

interface opcionSelect {
  id: string | number; 
  label: string;
}