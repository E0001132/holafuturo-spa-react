import { ComponentProps } from "@adobe/aem-react-editable-components";

// Define los props que este componente recibe directamente de AEM
export interface ButtonProps extends ComponentProps {
  title: string;
  id: string;
  name: string;
  class: string;
  value: string;
  type: "button"|"submit"|"reset";
}