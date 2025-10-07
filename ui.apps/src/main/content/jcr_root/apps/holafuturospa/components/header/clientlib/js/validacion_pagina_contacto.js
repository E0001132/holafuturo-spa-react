(function () {
  if (!/\.?holafuturo\.com\.mx$/i.test(location.hostname)) return;

  const redirectUrl = '/contacto.html';
  const protectedPaths = [
    'contacto/cto-typ-seguro-hogar',
    'contacto/cto-typ-seguro-indemniza',
    'contacto/cto-typ-seguro-vida',
    'contacto/cto-typ-tu-pension',
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
