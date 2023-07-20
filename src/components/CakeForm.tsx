import { useContext } from 'react';
import { useFormik } from 'formik';
import { Checkbox, FormControlLabel, Grid, TextField, Button } from "@mui/material";

import formularioCompraContext from '../context/formularioCompraContext';
import { formularioCompraContextType } from '../@types/formularioCompra';

const initialValues = {
  nombreCake: '',
  saborCake: '',
}

const CakeForm = () => {
  const { setStep } = useContext(formularioCompraContext) as formularioCompraContextType;

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
    }
  });

  const handlePrev = () => {
    setStep({ index: 1, label: 'Datos de entrega', name: 'deliveryForm' });
  };

  const handleFinish = () => {}

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="nombreCake"
              label="Nombre de cumpleañero(a)"
              variant="outlined"
              size='small'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="saborCake"
              label="Sabor de Cake"
              variant="outlined"
              size='small'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="rellenoCake"
              label="Relleno de Cake"
              variant="outlined"
              size='small'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              type='number'
              id="edadCunplida"
              label="Edad que cumple"
              variant="outlined"
              size='small'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              type='number'
              id="porciones"
              label="Porciones"
              variant="outlined"
              size='small'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type='number'
              id="abono"
              label="Abono"
              variant="outlined"
              size='small'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="tematica"
              label="Temática deseada"
              variant="outlined"
              size='small'
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox />}
              label="He leido y estoy de acuerdo con los términos y condiciones"
              required
            />
          </Grid>
          <Grid container item xs={12} justifyContent='space-between'>
          <Button onClick={ handlePrev }>
              Anterior
            </Button>
            <Button variant='contained' onClick={ handleFinish }>
              Enviar
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default CakeForm;