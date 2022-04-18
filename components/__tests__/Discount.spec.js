import { shallowMount } from '@vue/test-utils'
import Discount from '../Discount.vue'

describe('Discount.vue', () => {
    test('renders discount correctly', () => {
        const value = 30
        const wrapper = shallowMount(Discount, {
            propsData: {
                value,
            },
        })

        const discount = wrapper.findComponent(Discount)
        expect(discount.text()).toBe(`-${value}%`)
    })
})