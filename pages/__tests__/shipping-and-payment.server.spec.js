/**
 * @jest-environment node
 */

import { renderToString } from '@vue/server-test-utils'
import ShippingAndPaymentPage from '../shipping-and-payment.vue'

test('renders correctly shipping and payment page', async () => {
  const str = await renderToString(ShippingAndPaymentPage)
  
  expect(str).toMatchSnapshot()
})
