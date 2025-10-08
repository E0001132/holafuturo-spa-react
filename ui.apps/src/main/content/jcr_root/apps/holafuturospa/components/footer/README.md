# Componente: Banner Información Afore - SAR

## Changelog  

**Fecha:** 17/09/2025  
**Creado por:** Harold Cruz  
**Versi&oacute;n:** v1.0  

---

## 1. Introducci&oacute;n  

Este documento tiene como prop&oacute;sito ofrecer una gu&iacute;a clara y estructurada sobre el componente **`Banner Información Afore - SAR`**.  
El objetivo es facilitar la comprensi&oacute;n y el aprovechamiento de este componente, brindando tanto al &aacute;rea de desarrollo como a los administradores una referencia confiable sobre c&oacute;mo utilizarlo de manera adecuada.  

---

## 2. Estructura del componente

El componente est&aacute; configurado de la siguiente manera:  
- **Elemento HTML (HTL):** Contiene la estructura de todos los elementos en lenguaje HTML.  
- **Clientlib:** Carpeta de estilos/funcionalidades del cliente que contiene archivos CSS y JS.  
- **cq:Dialog:** Nodo donde se plasman todos los elementos que se van a configurar en el CMS del componente.  
- **Readme:** Documentaci&oacute;n acerca del componente.  

---

## 3. Elementos que conforman el CMS (Dialog)  

Este componente est&aacute; dividido por 4 bloques, los cuales representan cada una de las secciones de informaci&oacute;n que definen el componente.  

### 3.1. Configuraci&oacute;n de Textos  

- **T&iacute;tulos del componente:**  
  Elemento `textfield` que define el t&iacute;tulo principal del componente.  
  
- **P&aacute;rrafo del componente:**  
  Elemento `richtext` que permite describir el contenido del bloque.  

### 3.2. Configuraci&oacute;n de Im&aacute;genes  

- **Imagen (versi&oacute;n desktop):**  
  Elemento `fileupload` que permite cargar una imagen. Para este caso se est&aacute; utilizando una imagen que se encuentra en el DAM de Adobe.  

- **Imagen (versi&oacute;n responsive):**  
  Elemento `fileupload` que permite cargar una imagen. Para este caso se est&aacute; utilizando una imagen que se encuentra en el DAM de Adobe.  

### 3.3. Configuraci&oacute;n del Bot&oacute;n

- **T&iacute;tulo del bot&oacute;n:**  
  Elemento `textfield` que permite definir el t&iacute;tulo que va a llevar el bot&oacute;n.  

- **Ruta:**  
  Elemento `pathfield` que permite colocar una ruta a la cual se realizar&aacute; la redirecci&oacute;n al presionar el bot&oacute;n.  
  Se puede utilizar una ruta interna dentro del SITE (al final agregar a la ruta el `.html`) o bien usar una ruta externa.  

### 3.4. Configuraci&oacute;n de Estilos  

- **Orientaci&oacute;n del contenido:**  
  Elemento `select` que permite elegir entre dos opciones: (Orientaci&oacute;n Izquierda o Derecha).  
  Con esto se modifica el orden en que se mostrar&aacute; el contenido del componente.  

- **Width del t&iacute;tulo:**  
  Elemento `numberfield` que permite configurar el tama&ntilde;o del t&iacute;tulo (solo funciona en versiones desktop).  

---

## 4. Uso del componente  

1. **Agregar el componente:**  
   Arrastra el componente `Banner Informativo (Introducci&oacute;n a Calculadoras)` desde el Sidekick de AEM a la p&aacute;gina deseada.  

2. **Configurar los campos:**  

   - Sube las im&aacute;genes para desktop y m&oacute;vil en cada bloque del multifield.  
   - Escribe el t&iacute;tulo principal y secundario.  
   - Agrega el p&aacute;rrafo descriptivo.  
   - Configura el texto y la URL del bot&oacute;n para cada bloque de contenido.  

3. **Guardar y publicar:**  

   Guarda los cambios y publica la p&aacute;gina para ver el resultado final.  

---

## 5. Buenas pr&aacute;cticas y recomendaciones 

- **Validaci&oacute;n de im&aacute;genes:**  
  Verifica que las im&aacute;genes tengan la resoluci&oacute;n adecuada para desktop y m&oacute;vil.  

- **Rutas absolutas/relativas:**  
  Usa rutas v&aacute;lidas para evitar errores de navegaci&oacute;n.  

- **Nombres de archivos:**  
  El archivo HTML debe tener el mismo nombre que el nodo principal del componente.  

- **Separaci&oacute;n de estilos:**  
  Mant&eacute;n separados los estilos de desktop y responsive para una mejor organizaci&oacute;n.  

- **Estilos personalizados:**  
  Evita modificar estilos globales y centraliza los estilos en la carpeta correspondiente.  

- **Optimizaci&oacute;n:**  
  Optimiza las im&aacute;genes antes de cargarlas para mejorar el rendimiento.  
