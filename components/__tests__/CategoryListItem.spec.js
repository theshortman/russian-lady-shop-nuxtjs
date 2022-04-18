import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import CategoryListItem from '../CategoryListItem.vue'

describe('CategoryListItem.vue', () => {
    test('should contain correct url and category name', () => {
        const url = 'test-url'
        const name = 'test category name'

        const $route = { path: 'test-path' }

        const wrapper = shallowMount(CategoryListItem, {
            propsData: {
                url,
                name,
            },
            stubs: {
                NuxtLink: RouterLinkStub
            },
            mocks: {
                $route,
            },
        })

        const link = wrapper.findComponent(RouterLinkStub)
        expect(link.props().to).toBe(url)
        expect(link.text()).toBe(name)
    })

    test('the class "active" should not exist when route does not contain url', () => {
        const url = 'test-url'
        const name = 'test category name'

        const $route = { path: 'test-path' }

        const wrapper = shallowMount(CategoryListItem, {
            propsData: {
                url,
                name,
            },
            stubs: {
                NuxtLink: RouterLinkStub
            },
            mocks: {
                $route,
            },
        })

        const link = wrapper.findComponent(RouterLinkStub)
        expect(link.classes('active')).toBe(false)
    })

    test('the class "active" should exist when route contains url', () => {
        const url = 'test-url'
        const name = 'test category name'

        const $route = { path: 'test-path/test-url' }

        const wrapper = shallowMount(CategoryListItem, {
            propsData: {
                url,
                name,
            },
            stubs: {
                NuxtLink: RouterLinkStub
            },
            mocks: {
                $route,
            },
        })

        const link = wrapper.findComponent(RouterLinkStub)
        expect(link.classes('active')).toBe(true)
    })
})