requirejs.config({
  baseUrl: "js",
  paths: {
    jquery: "bower_components/jquery/dist/jquery",
    text: "bower_components/text/text",
  },
});

requirejs(["./spirit_warden"], function(engine) {
  engine.main();
});
