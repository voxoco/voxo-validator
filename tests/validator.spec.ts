import * as validator from '../src/index';

describe('validator', () => {
  it('can validate', () => {
    const data: any = { name: 'John Smith' };

    const schema: any = {
      name: 'required',
    };

    validator.validate(data, schema)
      .then(() => { expect(true).toBeTruthy(); });
  });

  it('can fail', () => {
    const data: any = {};

    const schema: any = {
      name: 'required',
    };

    validator.validate(data, schema)
      .catch((error) => { expect(error).toBeDefined() });
  });
});
