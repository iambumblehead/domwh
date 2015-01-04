var domwh = require('../domwh');

describe("domwh", function () {
  it("should not break server side script environment", function () {  
    expect( typeof domwh ).toBe( 'function' );
  });
});
