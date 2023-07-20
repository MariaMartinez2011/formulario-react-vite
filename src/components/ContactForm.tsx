import { useContext } from 'react';
import { Grid, TextField, Button } from "@mui/material";
import { useFormik } from 'formik';

import formularioCompraContext from '../context/formularioCompraContext';
import { formularioCompraContextType } from '../@types/formularioCompra';

const initialValues = {
  nombresCliente: '',
  apellidosCliente: '',
  telefonoCliente: '',
  quienRecibe: ''
}

const ContactForm = () => {
  const { setStep } = useContext(formularioCompraContext) as formularioCompraContextType;

  const {
    values,
    touched,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
    }
  });

  const handleNext = () => {
    setStep({ index: 1, label: 'Datos de entrega', name: 'deliveryForm' });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="nombresCliente"
              label="Nombres"
              variant="outlined"
              size='small'
              value={values.nombresCliente}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.nombresCliente && Boolean(errors.nombresCliente)}
              helperText={touched.nombresCliente && errors.nombresCliente}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="apellidosCliente"
              label="Apellidos"
              variant="outlined"
              size='small'
              value={values.apellidosCliente}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.apellidosCliente && Boolean(errors.apellidosCliente)}
              helperText={touched.apellidosCliente && errors.apellidosCliente}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="telefonoCliente"
              label="Número de telefono"
              variant="outlined"
              size='small'
              value={values.telefonoCliente}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.telefonoCliente && Boolean(errors.telefonoCliente)}
              helperText={touched.telefonoCliente && errors.telefonoCliente}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="quienRecibe"
              label="Quien recibirá el pedido"
              variant="outlined"
              size='small'
              value={values.quienRecibe}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.quienRecibe && Boolean(errors.quienRecibe)}
              helperText={touched.quienRecibe && errors.quienRecibe}
              fullWidth />
          </Grid>
          <Grid container item xs={12} justifyContent='flex-end'>
            <Button variant='contained' onClick={ handleNext }>
              Siguiente
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default ContactForm;