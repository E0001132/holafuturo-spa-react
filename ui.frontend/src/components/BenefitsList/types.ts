import { ComponentProps } from "@adobe/aem-react-editable-components";
// 1. Interfaz para cada tarjeta individual dentro del Multifield
export interface CardItem {
  /** El campo 'title' del Multifield. */
  title: string;

  /** El campo 'description' del Multifield. */
  description: string;

  /** * La ruta del icono. El nombre es 'icon' pero lo guardamos con './icon' 
   * debido a la estructura de multifield compuesto. 
   * Asegúrate de que el Sling Model lo esté manejando como un String. 
   */
  icon: string;

  // Propiedad estándar añadida por el Sling Model Exporter para identificación
  ':type'?: string; 
}

export interface BenefitsListProps extends ComponentProps {
  
  /** * Corresponde al campo text (Encabezado) en la pestaña 'Propiedades'. 
   * Es un string requerido.
   */
  /*
  text: string;
   nueva: string;
  */
  /** * Corresponde al Multifield 'actions' en la pestaña 'Tarjetas'.
   * Se espera que el Sling Model lo serialice como un array de objetos CardItem.
     */
  
  cards: CardItem[];

}