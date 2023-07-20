import { useContext } from 'react';
import { useFormik } from 'formik';
import { Grid, MenuItem, TextField, Button } from "@mui/material";

import formularioCompraContext from "../context/formularioCompraContext";
import { formularioCompraContextType, opcionesSelect } from '../@types/formularioCompra';

const opcionesLocalidad: opcionesSelect = [
  { id: '1', label: 'Usaquén' },
  { id: '2', label: 'Chapinero' },
  { id: '3', label: 'Santa Fe' },
  { id: '4', label: 'San Cristóbal' },
  { id: '5', label: 'Usme' },
  { id: '6', label: 'Tunjuelito' },
  { id: '7', label: 'Bosa' },
  { id: '8', label: 'Kennedy' },
  { id: '9', label: 'Fontibón' },
  { id: '10', label: 'Engativá' },
  { id: '11', label: 'Suba' },
  { id: '12', label: 'Barrios Unidos' },
  { id: '13', label: 'Teusaquillo' },
  { id: '14', label: 'Los Mártires' },
  { id: '15', label: 'Antonio Nariño' },
  { id: '16', label: 'Puente aranda' },
  { id: '17', label: 'Candelaria' },
  { id: '18', label: 'Rafael Uribe Uribe' },
  { id: '19', label: 'Ciudad Bolívar' },
  { id: '20', label: 'Sumapaz' }
];

const DeliveryForm = () => {
  const { setStep } = useContext(formularioCompraContext) as formularioCompraContextType;

  const formik = useFormik({
    initialValues: {
      fecha: '',
      hora: '',
    },
    onSubmit: (values) => {
      console.log(values);
    }
  });

  const handleNext = () => {
    setStep({ index: 2, label: 'Detalles de torta', name: 'cakeForm' });
  };

  const handlePrev = () => {
    setStep({ index: 0, label: 'Datos de contacto', name: 'contactForm' });
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              type='date'
              id="fecha"
              label="Fecha de entrega"
              variant="outlined"
              size='small'
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type='time'
              id="hora"
              label="Hora de entrega"
              variant="outlined"
              size='small'
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              select
              defaultValue={7}
              id="localidad"
              label="Localidad de entrega"
              variant="outlined"
              size='small'
              fullWidth
            >
              {opcionesLocalidad.map((opcion) => (
                <MenuItem key={opcion.id} value={opcion.id}>
                  {opcion.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField
              id="direccion"
              label="Direccion y referencia"
              variant="outlined"
              size='small'
              fullWidth
            />
          </Grid>
          <Grid container item xs={12} justifyContent='space-between'>
          <Button onClick={ handlePrev }>
              Anterior
            </Button>
            <Button variant='contained' onClick={ handleNext }>
              Siguiente
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default DeliveryForm;