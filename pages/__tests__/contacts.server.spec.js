/**
 * @jest-environment node
 */

import { renderToString } from '@vue/server-test-utils'
import ContactsPage from '../contacts.vue'

test('renders correctly contacts page', async () => {
  const str = await renderToString(ContactsPage)
  
  expect(str).toMatchSnapshot()
})
