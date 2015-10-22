define(
[ "jquery", "string_format", "text!./t/spirit_panel.html", "text!./t/spirit_stats.html" ],
function ($, _, tmpl_panel, tmpl_stats) {
  var m = {}
  m.SpiritStats = function () {
    // The SpiritStats class holds and manages stat values for a Spirit.
    this.base_values = {
      essence: 1000,
      accuracy: 100,
      evasion: 100,
      impact: 100,
      block: 100,
      potency: 100,
      resistance: 100,
      speed: 100,
    }
    this.modifiers = []
  };
  m.SpiritStats.prototype = {
    base_copy: function() {
      return {
        essence: this.base_values.essence,
        accuracy: this.base_values.accuracy,
        evasion: this.base_values.evasion,
        impact: this.base_values.impact,
        block: this.base_values.block,
        potency: this.base_values.potency,
        resistance: this.base_values.resistance,
        speed: this.base_values.speed,
      };
    },
    current_values: function() {
      result = this.base_copy();
      // TODO: apply adjustments here
      return result;
    },
    display: function(panel) {
      panel.html( tmpl_stats.format(this.current_values()) );
    },
  };
  //
  m.Spirit = function() {
    this.name = "a spirit";
    this.stats = new m.SpiritStats();
  };
  m.Spirit.prototype = {
    display: function(panel) {
      // panel should be a jquery div handle; it'll be overwritten
      panel.html(tmpl_panel.format(this));
      this.stats.display(panel.find(".stats").first());
    }
  };

  return m;
});
