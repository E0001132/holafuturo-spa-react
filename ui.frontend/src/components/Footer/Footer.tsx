import React from "react";
import { MapTo, ComponentProps } from "@adobe/aem-react-editable-components";
import "./footer.css";

import React from "react";

export interface FooterConfig {
  // Bloque 1
  logo_hola_futuro_footer_desktop?: string;
  logo_hola_futuro_footer_responsive?: string;
  logo_profuturo_footer_desktop?: string;
  logo_profuturo_footer_responsive?: string;
  texto_bloque_1_logos?: string;
  ruta_home_footer?: string;

  // Bloque 2
  titulo_bloque_opciones_1?: string;
  opciones_multifield?: {
    titlelink_1?: string;
    rootPathField_footer_1?: string;
  }[];

  // Bloque 3
  titulo_bloque_opciones_2?: string;
  legales_multifield?: {
    titlelink_2?: string;
    rootPathField_footer_2?: string;
  }[];

  // Bloque 4
  titulo_bloque_opciones_3?: string;
  ayuda_multifield?: {
    titlelink_3?: string;
    rootPathField_footer_3?: string;
  }[];

  // Bloque 5
  imagefacebook_footer_desktop?: string;
  imagefacebook_footer_responsive?: string;
  rootPathfacebook?: string;
  imagePath_instagram_desktop?: string;
  imagePath_instagram_responsive?: string;
  rootPathInstagram?: string;
}

export const Footer: React.FC<{ data: FooterConfig }> = ({ data }) => {
  return (
    <footer className="cmp_footer">
      {/* --- Bloque Imagenes --- */}
      <div className="cmp_footer_bloque_links">
        {data.ruta_home_footer && (
          <a href={data.ruta_home_footer}>
            {data.logo_hola_futuro_footer_desktop && (
              <img
                src={data.logo_hola_futuro_footer_desktop}
                loading="lazy"
                alt="logo_hola_futuro_desktop"
                className="cmp_footer_hola_futuro_desktop"
              />
            )}
            {data.logo_hola_futuro_footer_responsive && (
              <img
                src={data.logo_hola_futuro_footer_responsive}
                loading="lazy"
                alt="logo_hola_futuro_responsive"
                className="cmp_footer_hola_futuro_responsive"
              />
            )}
          </a>
        )}

        {data.texto_bloque_1_logos && (
          <p className="cmp_footer_parrafo">{data.texto_bloque_1_logos}</p>
        )}

        {data.logo_profuturo_footer_desktop && (
          <img
            src={data.logo_profuturo_footer_desktop}
            loading="lazy"
            alt="logo_profuturo_desktop"
            className="cmp_footer_profuturo_desktop"
          />
        )}
        {data.logo_profuturo_footer_responsive && (
          <img
            src={data.logo_profuturo_footer_responsive}
            loading="lazy"
            alt="logo_profuturo_responsive"
            className="cmp_footer_profuturo_responsive"
          />
        )}
      </div>

      {/* --- Bloque Opciones --- */}
      <div className="cmp_footer_bloque_links">
        {data.titulo_bloque_opciones_1 && (
          <h4 className="cmp_footer_titulo_bloque">
            {data.titulo_bloque_opciones_1}
          </h4>
        )}
        {data.opciones_multifield?.map((item, index) => (
          <a
            key={index}
            href={item.rootPathField_footer_1}
            className="cmp_footer_enlace"
          >
            {item.titlelink_1}
          </a>
        ))}
      </div>

      {/* --- Bloque Legales --- */}
      <div className="cmp_footer_bloque_links">
        {data.titulo_bloque_opciones_2 && (
          <h4 className="cmp_footer_titulo_bloque">
            {data.titulo_bloque_opciones_2}
          </h4>
        )}
        {data.legales_multifield?.map((item, index) => (
          <a
            key={index}
            href={item.rootPathField_footer_2}
            className="cmp_footer_enlace"
          >
            {item.titlelink_2}
          </a>
        ))}
      </div>

      {/* --- Bloque Ayuda --- */}
      <div className="cmp_footer_bloque_links">
        {data.titulo_bloque_opciones_3 && (
          <h4 className="cmp_footer_titulo_bloque">
            {data.titulo_bloque_opciones_3}
          </h4>
        )}
        {data.ayuda_multifield?.map((item, index) => (
          <a
            key={index}
            href={item.rootPathField_footer_3}
            className="cmp_footer_enlace"
          >
            {item.titlelink_3}
          </a>
        ))}
      </div>

      {/* --- Bloque Redes Sociales --- */}
      <div className="cmp_footer_bloque_redes_sociales">
        {data.rootPathfacebook && (
          <a href={data.rootPathfacebook} target="_blank" rel="noreferrer">
            {data.imagefacebook_footer_desktop && (
              <img
                src={data.imagefacebook_footer_desktop}
                loading="lazy"
                alt="logo_facebook_desktop"
                className="cmp_footer_hola_futuro_face_desktop"
              />
            )}
            {data.imagefacebook_footer_responsive && (
              <img
                src={data.imagefacebook_footer_responsive}
                loading="lazy"
                alt="logo_facebook_responsive"
                className="cmp_footer_hola_futuro_face_responsive"
              />
            )}
          </a>
        )}

        {data.rootPathInstagram && (
          <a href={data.rootPathInstagram} target="_blank" rel="noreferrer">
            {data.imagePath_instagram_desktop && (
              <img
                src={data.imagePath_instagram_desktop}
                loading="lazy"
                alt="logo_instagram_desktop"
                className="cmp_footer_hola_futuro_instagram_desktop"
              />
            )}
            {data.imagePath_instagram_responsive && (
              <img
                src={data.imagePath_instagram_responsive}
                loading="lazy"
                alt="logo_instagram_responsive"
                className="cmp_footer_hola_futuro_instagram_responsive"
              />
            )}
          </a>
        )}
      </div>
    </footer>
  );
};



// Mapeo del componente con AEM
MapTo("holafuturospa/components/footer")(Footer);

export default Footer;
