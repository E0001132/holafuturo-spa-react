import React from 'react';
import { withEditable } from '@adobe/aem-react-editable-components';
import { SaludoProps } from './types';

// Componente base
const SaludoComponent = (props: SaludoProps) => {
  // El fallback para el modo de edición (cuando no se han configurado props)

    console.log('Componente saludo props', props);

  if (!props.titulo) {
    return <div className="cmp-saludo-placeholder">Por favor, edita el Saludo</div>;
  }

  return (
    <div className="cmp-saludo">
      <h1 className="cmp-saludo__titulo">{props.titulo}</h1>
      <p className="cmp-saludo__descripcion">{props.descripcion}</p>
    </div>
  );
};

// Configuración del mapeo del componente de AEM
// Es crucial que el recursoType coincida con el sling:resourceType del componente AEM (ver paso 2)
const SaludoConfig = {
    emptyLabel: 'Saludo',
    isEmpty: (props: SaludoProps) => !props.titulo,
    resourceType: 'holafuturospa/components/saludo' // Este debe coincidir con el paso 2
};

// Envuelve el componente con withEditable para habilitar la edición en AEM
export default withEditable(SaludoComponent, SaludoConfig);