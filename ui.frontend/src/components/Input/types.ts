import { ComponentProps } from "@adobe/aem-react-editable-components";

// Define los props que este componente recibe directamente de AEM
export interface InputProps extends ComponentProps {
  /* Atributos de Propósito y Tipo (Definición Base) */
  type: "button" | "checkbox" | "color" | "date" | "datetime" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
  name: String;
  id: string;

  /*  Atributos de Validación y Restricción */
  required?: Boolean;
  minlength?: number;
  maxlength?: number;
  min?: number;
  max?: number;
  step?: number;
  pattern?: String;

  /* Atributos de Apariencia y Accesibilidad (UX/UI)*/
  placeholder?: String;
  value?: String;
  checked?: Boolean;
  readonly?: Boolean;
  disabled?: Boolean;
  // src?: String;
  // tabindex?: number;
  // width?: number;
  // height?: number;
  class?: string;
  // title?: string;
  label?: string;

  /*  Atributos de Comportamiento del Navegador */
  // autocomplete?: "on" | "off" | "new-password" | "current-password" | "name" | "username" | "email" | "tel" | "url" | "cc-number" | "cc-csc" | "cc-exp" | "cc-exp-month" | "cc-exp-year";
  // autocapitalize?: "none" | "sentences" | "words" | "characters";
  // autofocus?: Boolean;
  // multiple?: Boolean;
  list?: "text" | "search" | "tel" | "url" | "email";

  /* Atributos de Comportamiento del Formulario y Asociación. */
  form?: String;

}