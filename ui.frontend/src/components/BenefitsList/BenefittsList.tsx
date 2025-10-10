import React from 'react';
import { withEditable } from '@adobe/aem-react-editable-components';
import { BenefitsListProps } from './types';
// Componente base
const BenefitsListComponent = (props: BenefitsListProps) => {
    // El fallback para el modo de edición (cuando no se han configurado props)


    console.log(
        "%c 🔥 INICIO DE COMPONENTE 🔥 %c [BenefitsListComponent]",
        "color: #FFEB3B; background: #E91E63; padding: 4px 6px; font-weight: 900; border: 2px solid #F44336;",
        "color: #4CAF50; background: #eee; padding: 4px 6px; border-left: 1px solid #999; font-weight: bold;",
        props
    );


    if (!props.cards) {
        return <div >Por favor, edita el BenefitsListComponent</div>;
    }

    return (
        props.cards.map((card, index) => {
            return (<div key={index}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
            </div>)
        }));
}

// Configuración del mapeo del componente de AEM
// Es crucial que el recursoType coincida con el sling:resourceType del componente AEM (ver paso 2)
const BenefitsListConfig = {
    emptyLabel: 'Input',
    isEmpty: (props: BenefitsListProps) => !props.cards,
    resourceType: 'holafuturospa/components/benefit-list' // Este debe coincidir con el paso 2
};

// Envuelve el componente con withEditable para habilitar la edición en AEM
export default withEditable(BenefitsListComponent, BenefitsListConfig);