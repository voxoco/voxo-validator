import { Messages, Schema } from 'indicative-parser';
import { sanitize as indicativeSanitize } from 'indicative/sanitizer';
import { validate as indicativeValidate } from 'indicative/validator';

const sanitize = (data: any[], rules?: Schema) => {
  try {
    return indicativeSanitize(data, rules);
  } catch(error) {
    console.error(error);
  }
}

const validate = (data: any[], rules: Schema, messages?: Messages) => {
  try {
    return indicativeValidate(data, rules, messages);
  } catch(error) {
    console.error(error);
  }
};

export { validate as default, sanitize };
