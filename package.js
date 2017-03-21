Package.describe({
  name: 'geskep:mousetrap',
  summary: 'Mousetrap wrapping for meteor',
  version: '1.6.0',
  git: 'https://github.com/samuelluis/mousetrap.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.export('Mousetrap');
  api.addFiles([
      'mousetrap.js',
      'export.js'
  ], 'client');
});
