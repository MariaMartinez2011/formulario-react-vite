/* import * as React from 'react'; */
import { useState } from 'react';
import './App.css';

import { Box, CssBaseline, Grid, Container, Stepper, Step, StepLabel } from '@mui/material';
import { grey } from '@mui/material/colors';

import formularioCompraContext from './context/formularioCompraContext';
import ContactForm from './components/ContactForm';
import DeliveryForm from './components/DeliveryForm';
import CakeForm from './components/CakeForm';

const stepsArray = [
  { index: 0, label: 'Datos de contacto', name: 'contactForm' }, 
  { index: 1, label: 'Datos de entrega', name: 'deliveryForm' }, 
  { index: 2, label: 'Detalles de torta', name: 'cakeForm' }
];

function App() {
  const [step, setStep] = useState({ index: 0, label: 'Datos de contacto', name: 'contactForm' });

  return (
    <CssBaseline>
      <Box sx={{ backgroundColor: grey[50], minHeight: '100vh', paddingY: '20px' }}>
        <Container maxWidth="md">
          <Box sx={{ backgroundColor: 'white', p: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
              <Stepper activeStep={step.index}>
                {stepsArray.map(({ label, name }) => {
                  const stepProps: { completed?: boolean } = {};
                  /* if (isStepSkipped(index)) {
                    stepProps.completed = false;
                  } */
                  return (
                    <Step key={name} {...stepProps}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
              </Grid>
              <Grid item xs={12}>
                <formularioCompraContext.Provider value={{ step, setStep }}>
                  <div>
                    { step.name === 'contactForm' && <ContactForm/> }
                    { step.name === 'deliveryForm' && <DeliveryForm/> }
                    { step.name === 'cakeForm' && <CakeForm/> }
                  </div>
                </formularioCompraContext.Provider>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </CssBaseline>
  );
}

export default App;