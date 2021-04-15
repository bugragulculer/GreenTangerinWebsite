// API call for airtable

import Airtable from 'airtable'
const base = new Airtable({ apiKey: 'AIRTABLE_API_KEY' }).base('AIRTABLE_BASE_CODE');
export default base 