export const CREATE = {
  'numbers': 'required|array|min:1',
  'orderType': 'in:MANUAL,ORDERING',
  'tenantId': 'required|number',
};

export const UPDATE = {
  'callerId': 'required|string',
  'callerIdUpdated': 'boolean',
  'namePrefix': 'required|string',
  'recording': 'required|string',
  'tenantId': 'required|number',
}
