import { ComponentProps } from "@adobe/aem-react-editable-components";

export interface HeaderComponentProps extends ComponentProps {
  // Sección de ícono/header
  imagen_logo_header?: string;
  ruta_seleccion_home?: string;
  imagen_hamburguesa_header?: string;
  imagen_ico_portal?: string;
  imagen_flecha_header?: string;

  // Sección de navegación
  texto_boton_1?: string;
  ruta_seleccion_boton1?: string;
  texto_boton_2?: string;
  ruta_seleccion_boton2?: string;
  texto_boton_3?: string;
  ruta_seleccion_boton3?: string;
  texto_boton_4?: string;
  ruta_seleccion_boton4?: string;

  // Dropdown
  texto_dropmenu_1?: string;
  ruta_dropmenu_1?: string;
}
