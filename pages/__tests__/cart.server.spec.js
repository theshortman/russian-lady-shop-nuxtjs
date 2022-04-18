/**
 * @jest-environment node
 */

import { renderToString } from '@vue/server-test-utils'
import CartPage from '../cart.vue'

test('renders correctly cart page', async () => {
  const str = await renderToString(CartPage)
  
  expect(str).toMatchSnapshot()
})