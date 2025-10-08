import { ComponentProps } from "@adobe/aem-react-editable-components";

export interface FooterConfig {
  // Bloque 1: Iconos Profuturo
  logo_hola_futuro_footer_desktop?: string;
  logo_hola_futuro_footer_responsive?: string;
  logo_profuturo_footer_desktop?: string;
  logo_profuturo_footer_responsive?: string;
  texto_bloque_1_logos?: string;
  ruta_home_footer?: string;

  // Bloque 2: Soluciones
  titulo_bloque_opciones_1?: string;
  opciones_multifield?: {
    titlelink_1?: string;
    rootPathField_footer_1?: string;
  }[];

  // Bloque 3: Legales
  titulo_bloque_opciones_2?: string;
  legales_multifield?: {
    titlelink_2?: string;
    rootPathField_footer_2?: string;
  }[];

  // Bloque 4: Ayuda
  titulo_bloque_opciones_3?: string;
  ayuda_multifield?: {
    titlelink_3?: string;
    rootPathField_footer_3?: string;
  }[];

  // Bloque 5: Redes Sociales
  // Facebook
  imagefacebook_footer_desktop?: string;
  imagefacebook_footer_responsive?: string;
  rootPathfacebook?: string;

  // Instagram
  imagePath_instagram_desktop?: string;
  imagePath_instagram_responsive?: string;
  rootPathInstagram?: string;
}
