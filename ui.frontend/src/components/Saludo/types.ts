import { ComponentProps } from "@adobe/aem-react-editable-components";

// Define los props que este componente recibe directamente de AEM
export interface SaludoProps extends ComponentProps {
  titulo: string;
  descripcion: string;
}