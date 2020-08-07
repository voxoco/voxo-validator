import * as validator from '../src/index';

describe('sanitizer', () => {
  it('can strip unsafe HTML', () => {
    const data: any = { name: '<p>Wes Anderson</p>' };

    const schema = {
      name: 'strip_tags',
    };

    validator.sanitize(data, schema);

    expect(data).toMatchObject({
      name: 'Wes Anderson',
    });
  });
});
