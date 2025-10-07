(function () {
  if (!/\.?holafuturo\.com\.mx$/i.test(location.hostname)) return;

  const redirectUrl = '/proteccion.html';
  const protectedPaths = [
    'calculadora-proteccion/nivel-proteccion',
    'calculadora-proteccion/nivel-proteccion/formulario-proteccion',
    'calculadora-proteccion/nivel-proteccion/formulario-proteccion/cl-typ-seguro-vida',
    'calculadora-proteccion/nivel-proteccion/formulario-proteccion/cl-typ-seguro-hogar',
    'calculadora-proteccion/nivel-proteccion/formulario-proteccion/cl-typ-seguro-indemniza',
  ];

  const canonicalPath = location.pathname
    .replace(/^\/content\/holafuturo\/?/, '')
    .replace(/^\/+|\/+$/g, '')
    .replace(/\.html$/i, '');

  if (!protectedPaths.some(p => canonicalPath.startsWith(p))) return;

  try {
    const products = JSON.parse(sessionStorage.getItem('products') || '[]');
    const hasValidProduct = Array.isArray(products) && products.some(p => p && p.id);
    if (!hasValidProduct) throw 0;
  } catch (_) {
    location.replace(redirectUrl);
  }
})();
