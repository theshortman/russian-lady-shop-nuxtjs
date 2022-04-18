import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import TheNavbar from '../TheNavbar.vue'

describe('TheNavbar.vue', () => {
    test('"show" class is not set by default', () => {
        const wrapper = shallowMount(TheNavbar, {
            stubs: {
                NuxtLink: RouterLinkStub
            }
        })

        expect(wrapper.get('#navbarNavAltMarkup').classes('show')).toBeFalsy()
    })

    test('toggle "show" class by click', async () => {
        const wrapper = shallowMount(TheNavbar, {
            stubs: {
                NuxtLink: RouterLinkStub
            }
        })
        
        const button = wrapper.get('button')

        await button.trigger('click')
        expect(wrapper.get('#navbarNavAltMarkup').classes('show')).toBeTruthy()

        await button.trigger('click')
        expect(wrapper.get('#navbarNavAltMarkup').classes('show')).toBeFalsy()
    })
})