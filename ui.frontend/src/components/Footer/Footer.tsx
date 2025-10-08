import React from "react";
import { MapTo, ComponentProps } from "@adobe/aem-react-editable-components";
import "./footer.css";

export interface FooterComponentProps extends ComponentProps {
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

const Footer: React.FC<FooterComponentProps> = (props) => {
  const {
    logo_hola_futuro_footer_desktop,
    logo_hola_futuro_footer_responsive,
    logo_profuturo_footer_desktop,
    logo_profuturo_footer_responsive,
    texto_bloque_1_logos,
    ruta_home_footer,

    titulo_bloque_opciones_1,
    opciones_multifield,

    titulo_bloque_opciones_2,
    legales_multifield,

    titulo_bloque_opciones_3,
    ayuda_multifield,

    imagefacebook_footer_desktop,
    imagefacebook_footer_responsive,
    rootPathfacebook,

    imagePath_instagram_desktop,
    imagePath_instagram_responsive,
    rootPathInstagram,
  } = props;

  return (
    <div className="cmp_footer">
      {/* --- Bloque Imagenes --- */}
      <div className="cmp_footer_bloque_links">
        {ruta_home_footer && (
          <a href={ruta_home_footer}>
            {logo_hola_futuro_footer_desktop && (
              <img
                src={logo_hola_futuro_footer_desktop}
                loading="lazy"
                alt="logo_hola_futuro_desktop"
                className="cmp_footer_hola_futuro_desktop"
              />
            )}
            {logo_hola_futuro_footer_responsive && (
              <img
                src={logo_hola_futuro_footer_responsive}
                loading="lazy"
                alt="logo_hola_futuro_responsive"
                className="cmp_footer_hola_futuro_responsive"
              />
            )}
          </a>
        )}

        {texto_bloque_1_logos && (
          <p className="cmp_footer_parrafo">{texto_bloque_1_logos}</p>
        )}

        {logo_profuturo_footer_desktop && (
          <img
            src={logo_profuturo_footer_desktop}
            loading="lazy"
            alt="logo_profuturo_desktop"
            className="cmp_footer_profuturo_desktop"
          />
        )}
        {logo_profuturo_footer_responsive && (
          <img
            src={logo_profuturo_footer_responsive}
            loading="lazy"
            alt="logo_profuturo_responsive"
            className="cmp_footer_profuturo_responsive"
          />
        )}
      </div>

      {/* --- Bloque Opciones --- */}
      <div className="cmp_footer_bloque_links">
        {titulo_bloque_opciones_1 && (
          <h4 className="cmp_footer_titulo_bloque">
            {titulo_bloque_opciones_1}
          </h4>
        )}
        {opciones_multifield?.map((item, index) => (
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
        {titulo_bloque_opciones_2 && (
          <h4 className="cmp_footer_titulo_bloque">
            {titulo_bloque_opciones_2}
          </h4>
        )}
        {legales_multifield?.map((item, index) => (
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
        {titulo_bloque_opciones_3 && (
          <h4 className="cmp_footer_titulo_bloque">
            {titulo_bloque_opciones_3}
          </h4>
        )}
        {ayuda_multifield?.map((item, index) => (
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
        {rootPathfacebook && (
          <a href={rootPathfacebook} target="_blank" rel="noreferrer">
            {imagefacebook_footer_desktop && (
              <img
                src={imagefacebook_footer_desktop}
                loading="lazy"
                alt="logo_facebook_desktop"
                className="cmp_footer_hola_futuro_face_desktop"
              />
            )}
            {imagefacebook_footer_responsive && (
              <img
                src={imagefacebook_footer_responsive}
                loading="lazy"
                alt="logo_facebook_responsive"
                className="cmp_footer_hola_futuro_face_responsive"
              />
            )}
          </a>
        )}

        {rootPathInstagram && (
          <a href={rootPathInstagram} target="_blank" rel="noreferrer">
            {imagePath_instagram_desktop && (
              <img
                src={imagePath_instagram_desktop}
                loading="lazy"
                alt="logo_instagram_desktop"
                className="cmp_footer_hola_futuro_instagram_desktop"
              />
            )}
            {imagePath_instagram_responsive && (
              <img
                src={imagePath_instagram_responsive}
                loading="lazy"
                alt="logo_instagram_responsive"
                className="cmp_footer_hola_futuro_instagram_responsive"
              />
            )}
          </a>
        )}
      </div>
    </div>
  );
};

// 👇 Mapeo con el componente en AEM (ruta del componente en /apps)
MapTo("holafuturospa/components/footer")(Footer);

export default Footer;
