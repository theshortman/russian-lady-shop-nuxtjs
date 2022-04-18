import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import Pagination from '../Pagination.vue'


describe('Pagination.vue', () => {
    test('next and prev links should be disabled when arguments are not passed', () => {
        const wrapper = shallowMount(Pagination)

        const linkItems = wrapper.findAll('li')
        expect(linkItems.at(0).attributes().disabled).toBe('disabled')
        expect(linkItems.at(1).attributes().disabled).toBe('disabled')
    })

    test('next and prev links should not be disabled when arguments are passed', () => {
        const prev_page_link = 'prev-link'
        const next_page_link = 'next-link'

        const wrapper = shallowMount(Pagination, {
            propsData: {
                prev_page_link,
                next_page_link
            },
            stubs: {
                NuxtLink: RouterLinkStub
            },
        })

        const linkItems = wrapper.findAll('li')
        expect(linkItems.at(0).attributes().disabled).toBeFalsy()
        expect(linkItems.at(1).attributes().disabled).toBeFalsy()
    })

    test('next and prev links should contain correct url', () => {
        const prev_page_link = 'prev-link'
        const next_page_link = 'next-link'

        const wrapper = shallowMount(Pagination, {
            propsData: {
                prev_page_link,
                next_page_link
            },
            stubs: {
                NuxtLink: RouterLinkStub
            }
        })

        const links = wrapper.findAllComponents(RouterLinkStub)
        expect(links.at(0).props().to).toBe(prev_page_link)
        expect(links.at(1).props().to).toBe(next_page_link)
    })
})