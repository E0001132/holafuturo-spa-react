import React from 'react';
import { withEditable } from '@adobe/aem-react-editable-components';
import { InputProps } from './types';

// Componente base
const InputComponent = (props: InputProps) => {
  // El fallback para el modo de edición (cuando no se han configurado props)


    console.log(
  "%c 🔥 INICIO DE COMPONENTE 🔥 %c [INPUT]",
  "color: #FFEB3B; background: #E91E63; padding: 4px 6px; font-weight: 900; border: 2px solid #F44336;",
  "color: #4CAF50; background: #eee; padding: 4px 6px; border-left: 1px solid #999; font-weight: bold;",
  props
);


  if (!props.name) {
    return <div className={`${props.class}__placeholder`}>Por favor, edita el Input</div>;
  }

  return (
    <div className={`${props.class}`}>
      <label className={`${props.class}__label`} for={props.name}>{props.label} </label>
      <input className={`${props.class}__input`} type={props.type} name={props.name} id={props.id} title={props.title} value={props.value}></input>
    </div>
  );
};

// Configuración del mapeo del componente de AEM
// Es crucial que el recursoType coincida con el sling:resourceType del componente AEM (ver paso 2)
const InputConfig = {
    emptyLabel: 'Input',
    isEmpty: (props: InputProps) => !props.type,
    resourceType: 'holafuturospa/components/input' // Este debe coincidir con el paso 2
};

// Envuelve el componente con withEditable para habilitar la edición en AEM
export default withEditable(InputComponent, InputConfig);