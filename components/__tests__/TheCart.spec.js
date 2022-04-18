import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import TheCart from '../TheCart'

describe('TheCart.vue', () => {
    test('renders correctly', () => {
        const wrapper = shallowMount(TheCart, {
            stubs: {
                NuxtLink: RouterLinkStub
            }
        })
        
        expect(wrapper.html()).toMatchSnapshot()
    })
})