import test from 'node:test'
import assert from 'node:assert/strict'
import domwh from './domwh.js'

test("should not break server side script environment", () => {  
  assert.strictEqual( typeof domwh, 'function' );
});

