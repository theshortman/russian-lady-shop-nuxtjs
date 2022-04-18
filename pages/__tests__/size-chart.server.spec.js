/**
 * @jest-environment node
 */

import { renderToString } from '@vue/server-test-utils'
import SizeChartPage from '../size-chart.vue'

test('renders correctly size chart page', async () => {
  const str = await renderToString(SizeChartPage)
  
  expect(str).toMatchSnapshot()
})