(function () {
  if (!/\.?holafuturo\.com\.mx$/i.test(location.hostname)) return;

  const redirectUrl = '/proteccion.html';
  const protectedPaths = [
    'proteccion/typ-seguro-hogar',
    'proteccion/typ-seguro-indemniza',
    'proteccion/typ-seguro-vida',
  ];

  const canonicalPath = location.pathname
    .replace(/^\/content\/holafuturo\/?/, '')
    .replace(/^\/+|\/+$/g, '')
    .replace(/\.html$/i, '');

  if (!protectedPaths.some(p => canonicalPath.startsWith(p))) return;

  try {
    const prospect = JSON.parse(sessionStorage.getItem('prospect') || '{}');
    if (!prospect.id) throw 0;
  } catch (_) {
    location.replace(redirectUrl);
  }
})();
