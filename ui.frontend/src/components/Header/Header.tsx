import React from "react";
import { MapTo, ComponentProps } from "@adobe/aem-react-editable-components";

export interface HeaderComponentProps extends ComponentProps {
  imagen_logo_header?: string;
  ruta_seleccion_home?: string;
  imagen_hamburguesa_header?: string;
  imagen_ico_portal?: string;
  imagen_flecha_header?: string;

  texto_boton_1?: string;
  ruta_seleccion_boton1?: string;
  texto_boton_2?: string;
  ruta_seleccion_boton2?: string;
  texto_boton_3?: string;
  ruta_seleccion_boton3?: string;
  texto_boton_4?: string;
  ruta_seleccion_boton4?: string;

  texto_dropmenu_1?: string;
  ruta_dropmenu_1?: string;

  // Para los subcomponentes (data-sly-resource)
  bloque_nivelproteccion?: any;
  bloque_nivelproteccion_responsive?: any;
}

const HeaderComponent: React.FC<HeaderComponentProps> = (props) => {
  const {
    imagen_logo_header,
    ruta_seleccion_home,
    imagen_hamburguesa_header,
    imagen_ico_portal,
    imagen_flecha_header,

    texto_boton_1,
    ruta_seleccion_boton1,
    texto_boton_2,
    ruta_seleccion_boton2,
    texto_boton_3,
    ruta_seleccion_boton3,
    texto_boton_4,
    ruta_seleccion_boton4,

    texto_dropmenu_1,
    ruta_dropmenu_1,

    bloque_nivelproteccion,
    bloque_nivelproteccion_responsive,
  } = props;

  return (
    <>
      {/* Icono del portal */}
      {imagen_ico_portal && (
        <link rel="icon" href={imagen_ico_portal} type="image/ico" />
      )}

      <div className="cmp_header">
        {/* Logo Header */}
        <div className="cmp_header_contenedor_imagen">
          <a href={ruta_seleccion_home || "#"}>
            <img
              src={imagen_logo_header}
              loading="lazy"
              alt="logo_hola_futuro"
              className="cmp_header_hola_futuro_imagen"
            />
          </a>
        </div>

        {/* Menú de navegación */}
        <div className="cmp_header_navegacion">
          {texto_boton_1 && (
            <a href={ruta_seleccion_boton1} className="cmp_header_enlace_1">
              {texto_boton_1}
            </a>
          )}

          {texto_boton_2 && (
            <a
              href={ruta_seleccion_boton2}
              id="enlace2"
              className="cmp_header_enlace_2"
            >
              {texto_boton_2}
              {imagen_flecha_header && (
                <img
                  src={imagen_flecha_header}
                  loading="lazy"
                  alt="imagen_boton"
                  className="cmp_header_navegacion_flecha_boton"
                  id="flechaBoton"
                />
              )}
            </a>
          )}

          {texto_boton_3 && (
            <a href={ruta_seleccion_boton3} className="cmp_header_enlace_3">
              {texto_boton_3}
            </a>
          )}
          {texto_boton_4 && (
            <a href={ruta_seleccion_boton4} className="cmp_header_enlace_4">
              {texto_boton_4}
            </a>
          )}

          {/* Botón dropdown */}
          {texto_dropmenu_1 && (
            <div className="cmp_header_boton_informacion">
              <a href={ruta_dropmenu_1}>
                <button className="cmp_header_boton_bloque">
                  {texto_dropmenu_1}
                </button>
              </a>
            </div>
          )}
        </div>

        {/* Botón hamburguesa responsive */}
        <div className="cmp_header_contendor_boton_hamburguesa_responsive">
          <button
            className="cmp_header_boton_hamburguesa_responsive"
            id="desplegar_menu_hamburguesa"
          >
            <img
              src={imagen_hamburguesa_header}
              loading="lazy"
              alt="logo_hamburguesa"
              className="cmp_header_imagen_hamburguesa"
            />
          </button>
        </div>
      </div>

      <div className="header-placeholder"></div>

      {/* Subcomponentes (data-sly-resource) */}
      <div id="dropdownOpciones" className="header_dropdown_opciones">
        {bloque_nivelproteccion && bloque_nivelproteccion}
      </div>

      <div
        id="desplegar_opciones_responsive"
        className="header_dropdown_opciones_responsive"
      >
        {bloque_nivelproteccion_responsive && bloque_nivelproteccion_responsive}
      </div>
    </>
  );
};

// Mapeo del componente con AEM
MapTo("holafuturo/components/header_component")(HeaderComponent);

export default HeaderComponent;
