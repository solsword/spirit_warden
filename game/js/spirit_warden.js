define(
"spirit_warden",
[ "jquery", "./sw/spirit" ],
function ($, spirit) {
  var m = {}

  // Engine functions:
  m.main = function() {
    var s1 = new spirit.Spirit();
    var s2 = new spirit.Spirit();
    s1.display($(".spirit.team1").first());
    s2.display($(".spirit.team2").first());
  };

  return m;
});
