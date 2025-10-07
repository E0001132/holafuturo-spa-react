(function () {
  if (!/\.?holafuturo\.com\.mx$/i.test(location.hostname)) return;

  const redirectUrl = '/ahorro.html';

  const protectedPaths = [
    'formulario-ahorro/calculadora-ahorro',
    'formulario-ahorro/calculadora-ahorro/rendimiento-ahorro',
    'ahorro/typ-ahorro',
  ];

  const canonicalPath = location.pathname
    .replace(/^\/content\/holafuturo\/?/, '')
    .replace(/^\/+|\/+$/g, '')
    .replace(/\.html$/i, '');

  const isProtected = protectedPaths.some(p => canonicalPath.startsWith(p));
  if (!isProtected) return;

  try {
    const prospect = JSON.parse(sessionStorage.getItem('prospect') || '{}');
    if (!prospect.id) throw new Error();
  } catch (_) {
    location.replace(redirectUrl);
  }
})();
