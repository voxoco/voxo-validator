import * as validator from '../src/index';

describe('validator', () => {
  it('can validate', () => {
    const data: any = { name: 'John Smith' };
    expect.assertions(1);

    validator.validate(data, validator.rules.dids.CREATE)
      .then(() => { expect(true).toBeTruthy(); })
      .catch((error) => { fail() });
  });

  it('can fail', () => {
    const data: any = {};
    expect.assertions(1);

    validator.validate(data, validator.rules.dids.CREATE)
      .then(() => { fail() })
      .catch((error) => { expect(error).toBeDefined() });
  });
});
