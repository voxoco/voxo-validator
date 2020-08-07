export const CREATE = {
  'address.city': 'required|string',
  'address.location': 'string',
  'address.name': 'required|string',
  'address.postalCode': 'required|string',
  'address.state': 'required|max:2|min:2',
  'address.streetInfo': 'required|string',
  'address.streetNum': 'required|string',
  'tenantId': 'required|number',
};

export const UPDATE = {
  'address.city': 'required|string',
  'address.location': 'string',
  'address.locationNumber': 'string',
  'address.locationType': 'string',
  'address.name': 'required|string',
  'address.postalCode': 'required|string',
  'address.state': 'required|max:2|min:2',
  'address.streetInfo': 'required|string',
  'address.streetNum': 'required|string',
}
