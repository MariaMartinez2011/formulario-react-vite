import * as Yup from 'yup';

export const contactSchema = Yup.object().shape({
  nombresCliente: Yup.string()
    .min(4, 'El nombre debe tener por lo menos 4 caracteres')
    .required('El nombre es obligatorio'),
  apellidosCliente: Yup.string()
    .min(4, 'El apellido debe tener al menos 4 caracteres')
    .required('El apellido  es obligatorio'),
  telefonoCliente: Yup.string()
    .min(4, 'El apellido debe tener al menos 4 caracteres')
    .required('El apellido  es obligatorio'),
  quienRecibe: Yup.string()
    .min(4, 'El apellido debe tener al menos 4 caracteres')
    .required('El apellido  es obligatorio')
});