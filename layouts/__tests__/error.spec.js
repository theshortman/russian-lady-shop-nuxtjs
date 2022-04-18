import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import ErrorPage from '../error.vue'


describe('error.vue', () => {
    test('show internal server error when status code is not 404', () => {
        const wrapper = shallowMount(ErrorPage, {
            stubs: {
                NuxtLink: RouterLinkStub,
            },
        })

        const h1 = wrapper.find('h1')
        expect(h1.text()).toBe('Internal Server Error (#500)')

        const p = wrapper.find('p')
        expect(p.text()).toBe('Внутренняя ошибка сервера.')

        const link = wrapper.findComponent(RouterLinkStub)
        expect(link.props().to).toBe('/contacts')
    })

    test('show not found error when status code is 404', () => {

        const wrapper = shallowMount(ErrorPage, {
            propsData: {
                error: {
                    statusCode: 404,
                },
            },
        })

        const h1 = wrapper.find('h1')
        expect(h1.text()).toBe('Not Found (#404)')

        const p = wrapper.find('p')
        expect(p.text()).toBe('Страница не найдена.')
    })
})