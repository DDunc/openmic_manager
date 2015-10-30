'use strict';

describe('Main View', function() {
  var page;

  beforeEach(function() {
    browser.get('/');
    page = require('./main.po');
  });

  it('should include jumbotron with correct data', function() {
    expect(page.h1El.getText()).toBe('Manage your Open Mic with Open Mic Manager');
    expect(page.imgEl.getAttribute('src')).toMatch(/assets\/images\/microphone.png$/);
    expect(page.imgEl.getAttribute('alt')).toBe('I\'m a Microphone');
  });
});
