(function () {
  if (!/\.?holafuturo\.com\.mx$/i.test(location.hostname)) return;

  const redirectUrl = '/';
  const protectedPaths = [
    'hm-typ-seguro-vida',
    'hm-typ-seguro-indemniza',
    'hm-typ-seguro-hogar',
    'hm-typ-tu-pension',
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
