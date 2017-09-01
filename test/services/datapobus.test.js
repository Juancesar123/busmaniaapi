const assert = require('assert');
const app = require('../../src/app');

describe('\'datapobus\' service', () => {
  it('registered the service', () => {
    const service = app.service('datapobus');

    assert.ok(service, 'Registered the service');
  });
});
