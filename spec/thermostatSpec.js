'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starting temp is 20c', function() {
    expect(thermostat.temp).toEqual(20);

  });

});