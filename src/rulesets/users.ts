export const ANY = {
  'adminQueues': 'array',
  'email': 'required|email',
  'extension': 'required|string',
  'receiveQueueReports': 'required|number',
  'tenantId': 'required|number',
  'tenantIds': 'array',
  'us_useldap': 'required',
  'userRoles': 'required',
};

export const UPDATE = {
  'adminQueues': 'array',
  'email': 'required|email',
  'extension': 'required|string',
  'password': 'required|string|min:5',
  'receiveQueueReports': 'required|number',
  'resetPassword': 'required|boolean',
  'tenantId': 'required|number',
  'tenantIds': 'array',
  'us_useldap': 'required',
  'userRole': 'required',
}
