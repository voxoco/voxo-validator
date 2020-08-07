export const COVERAGE = {
  'context': 'required|string',
  'rateCenter': 'required|string',
  'state': 'required|string|max:2|min:2',
};

export const INVENTORY = {
  'context': 'required|string',
  'npanxx': 'required|string|max:6|min:6',
  'rateCenter': 'required|string',
  'state': 'required|string|max:2|min:2',
};

export const NUMBER_DETAIL = {
  'context': 'required|string',
  'number': 'required|string|max:10|min:10',
};
