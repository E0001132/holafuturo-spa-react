import React from 'react';
import { withEditable } from '@adobe/aem-react-editable-components';
import { ButtonProps } from './types';

// Componente base
const ButtonComponent = (props: ButtonProps) => {
  // El fallback para el modo de edición (cuando no se han configurado props)

   
      console.log(
  "%c🚀 Componente ButtonComponent LISTO 🚀",
  "color: white; background: linear-gradient(90deg, #4CAF50, #2196F3); padding: 5px 10px; border-radius: 8px; font-weight: bold; font-size: 14px; text-shadow: 1px 1px 2px #333;",
  props
);

  if (!props.value) {
    return <div className="cmp-button-placeholder">Por favor, ingresa un value para el boton</div>;
  }

  return (
    <button type={props.type} className={props.class} id={props.id} title={props.title} value={props.value}></button>
  );
};

// Configuración del mapeo del componente de AEM
// Es crucial que el recursoType coincida con el sling:resourceType del componente AEM (ver paso 2)
const ButtonConfig = {
    emptyLabel: 'Component Boton',
    isEmpty: (props: ButtonProps) => !props.title,
    resourceType: 'holafuturospa/components/button' 
};

// Envuelve el componente con withEditable para habilitar la edición en AEM
export default withEditable(ButtonComponent, ButtonConfig);