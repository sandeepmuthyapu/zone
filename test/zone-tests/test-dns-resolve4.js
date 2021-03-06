require('./_common.js');

var dns = require('dns');

test.expect(2);

dns.resolve4('www.strongloop.com', function(err, addresses) {
  if (err) {
    throw err;
  }
  test.ok(typeof addresses === 'object');
  test.ok(zone === zone.root);
  test.done();
});
