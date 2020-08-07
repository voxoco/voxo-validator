import * as validator from '../src/index';

describe('sanitizer', () => {
  it('can escape strings', () => {
    const data: any = { name: 'Sears & Roebuck' };

    const schema = {
      name: 'escape',
    };

    validator.sanitize(data, schema);

    expect(data).toMatchObject({
      name: 'Sears &amp; Roebuck',
    });
  });

  it('can transform strings to lowercase', () => {
    const data: any = { name: 'VOXO_API' };

    const schema = {
      name: 'lower_case',
    };

    validator.sanitize(data, schema);

    expect(data).toMatchObject({
      name: 'voxo_api',
    });
  });

  it('can pluralize strings', () => {
    const data: any = { fruit: 'apple' };

    const schema = {
      fruit: 'plural',
    };

    validator.sanitize(data, schema);

    expect(data).toMatchObject({
      fruit: 'apples',
    });
  });

  it('can singularize strings', () => {
    const data: any = { fruit: 'apples' };

    const schema = {
      fruit: 'singular',
    };

    validator.sanitize(data, schema);

    expect(data).toMatchObject({
      fruit: 'apple',
    });
  });

  it('can convert strings to slugs', () => {
    const data: any = { name: 'Wes Anderson' };

    const schema = {
      name: 'slug',
    };

    validator.sanitize(data, schema);

    expect(data).toMatchObject({
      name: 'wes-anderson',
    });
  });

  it('can strip links', () => {
    const data: any = { description: 'Click <a href="#">here</a>' };

    const schema = {
      description: 'strip_links',
    };

    validator.sanitize(data, schema);

    expect(data).toMatchObject({
      description: 'Click here',
    });
  });


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

  it('can trim extra characters', () => {
    const data: any = { name: 'Wes Anderson   ' };

    const schema = {
      name: 'trim',
    };

    validator.sanitize(data, schema);

    expect(data).toMatchObject({
      name: 'Wes Anderson',
    });
  });

  it('can transform strings to uppercase', () => {
    const data: any = { name: 'voxo_api' };

    const schema = {
      name: 'upper_case',
    };

    validator.sanitize(data, schema);

    expect(data).toMatchObject({
      name: 'VOXO_API',
    });
  });
});
