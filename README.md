# VOXO Validator

## Installation

You can install this package using either npm or Yarn.

```bash
# npm
npm install voxo-validator

# Yarn
yarn add voxo-validator
```

## Usage

The VOXO Validator package is a wrapper for the [Indicative](https://indicative.adonisjs.com/) validator package for the Adonis Framework. It provides both the `.validate` and `.sanitize` methods, as well as all of the schemas necessary for both frontend and backend validation.

### Validator

You can validate any incoming request by importing this package into wherever needed.

Here are a [list of rules](https://indicative.adonisjs.com/validations/master/) the validator can use.

```javascript
import { bcrypt } from 'encryptor';
import { validator } from 'voxo-validator';
import User from '../models/User.model';

class Auth {
  /**
   * Create a new user account.
   *
   * @param {Request} request
   * @return {JsonResponse}
   */
  register({ request, response }) {
    const rules = {
      email: 'required|email',
      password: 'required|string|min:8',
    };

    if (validator.validate(request.all(), validator.rules.auth.REGISTER)) {
      const password = bcrypt(request.password);

      const user = new User({
        email: request.get('email').
        password,
      });

      return response.json(user);
    }
  }
}
```

### Sanitizer

The `.sanitize` method uses the same schema specification as the validations schema and is recommended to sanitize the user input before storing it to a database.

Here are a [list of rules](https://indicative.adonisjs.com/sanitizations/master/) the sanitizer can use.

```javascript
const unsafe = {
  email: 'wes+anderson@email.com',
  address: '<p><strong>1600</strong> Pennsylvania Ave.</p>',
};

const schema = {
  email: 'normalize_email',
  address: 'strip_tags'
}

validator.sanitze(data, schema);
```

The `unsafe` object will now contain:

```plain
{
  email: 'wesanderson@email.com',
  address: '1600 Pennsylvania Ave.',
}
```

## Schemas

- `.rules.dids.CREATE`
- `.rules.dids.UPDATE`
- `.rules.e911.CREATE`
- `.rules.e911.UPDATE`
- `.rules.passwordReset.UPDATE`
- `.rules.porting.CREATE`
- `.rules.porting.UPDATE`
- `.rules.tenants.CREATE`
- `.rules.tenants.UPDATE`
- `.rules.tnOrdering.COVERAGE`
- `.rules.tnOrdering.INVENTORY`
- `.rules.tnOrdering.NUMBER_DETAIL`
- `.rules.users.ANY`
- `.rules.users.UPDATE`
