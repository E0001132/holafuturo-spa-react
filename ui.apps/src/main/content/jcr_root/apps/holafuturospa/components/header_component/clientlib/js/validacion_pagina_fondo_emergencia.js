(function () {
  if (!/\.?holafuturo\.com\.mx$/i.test(location.hostname)) return;

  const redirectUrl = '/fondo-emergencia.html';
  const protectedBases = [
    'registro/ingresos-y-gastos',
    'registro/fondo',
    'registro/resultado',
    'registro/domiciliacion',
    'registro/typ-fondo',
  ];

  const canonicalPath = location.pathname
    .replace(/^\/content\/holafuturo\/?/, '')   
    .replace(/^\/+|\/+$/g, '')               
    .replace(/\.html$/i, '');               

  const isProtected = protectedBases.some(p => canonicalPath.startsWith(p));
  if (!isProtected) return;

  try {
    const prospect = JSON.parse(sessionStorage.getItem('prospect') || '{}');
    if (!prospect.id) throw new Error();
  } catch (_) {
    location.replace(redirectUrl);
  }
})();
