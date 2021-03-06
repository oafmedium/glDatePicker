Package.describe({
  summary: "Meteor implementation of the glDatePicker plugin for jQuery.",
  version: "1.0.0",
  name: "oaf:gldatepicker",
  git: "https://github.com/oafmedium/glDatePicker",
});

Package.on_use(function(api){
  api.versionsFrom('METEOR@1.0.1');
  api.use('jquery', 'client');

  api.add_files([
    'lib/glDatePicker/styles/glDatePicker.darkneon.css',
    'lib/glDatePicker/styles/glDatePicker.default.css',
    'lib/glDatePicker/styles/glDatePicker.flatwhite.css',
    'lib/glDatePicker/glDatePicker.min.js'
  ], 'client');

});
