/**
 * @jest-environment node
 */

import { renderToString } from '@vue/server-test-utils'
import DefaultLayout from '../default.vue'


test('renders correctly default layout', async () => {
  const str = await renderToString(DefaultLayout)
  
  expect(str).toMatchSnapshot()
})