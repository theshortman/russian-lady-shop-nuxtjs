import { shallowMount } from '@vue/test-utils'
import CategoryPage from '../CategoryPage.vue'

describe('CategoryPage.vue', () => {
    test('should render category name', () => {
        const category = {
            name: 'Test name',
        }

        const wrapper = shallowMount(CategoryPage, {
            propsData: {
                category,
            },
        })

        const h1 = wrapper.find('h1')
        expect(h1.text()).toBe(category.name)
    })

    test('should not render product cards, if there are no products', () => {
        const wrapper = shallowMount(CategoryPage, {
            propsData: {
                category: {}
            },
        })

        const p = wrapper.find('p')
        expect(p.text()).toBe('Ничего не найдено')
    })

    test('should render product cards, if products exist', () => {
        const category = {
            products: [{}, {}]
        }

        const ProductCard = {
            template: '<div />',
        }

        const wrapper = shallowMount(CategoryPage, {
            propsData: {
                category,
            },
            stubs: {
                ProductCard,
            },
        })

        const productCards = wrapper.findAllComponents(ProductCard)
        expect(productCards).toHaveLength(category.products.length)
    })

    test('should render pagination, if prev page exists', () => {
        const category = {
            prev_page_number: 1
        }

        const Pagination = {
            template: '<div />',
        }

        const wrapper = shallowMount(CategoryPage, {
            propsData: {
                category,
            },
            stubs: {
                Pagination,
            },
        })

        const pagination = wrapper.findAllComponents(Pagination)
        expect(pagination.exists()).toBe(true)
    })

    test('should render pagination, if next page exists', () => {
        const category = {
            next_page_number: 1
        }

        const Pagination = {
            template: '<div />',
        }

        const wrapper = shallowMount(CategoryPage, {
            propsData: {
                category,
            },
            stubs: {
                Pagination,
            },
        })

        const pagination = wrapper.findAllComponents(Pagination)
        expect(pagination.exists()).toBe(true)
    })

    test('should not render pagination, if pages do not exist', () => {
        const Pagination = {
            template: '<div />',
        }

        const wrapper = shallowMount(CategoryPage, {
            propsData: {
                category: {},
            },
            stubs: {
                Pagination,
            },
        })

        const pagination = wrapper.findAllComponents(Pagination)
        expect(pagination.exists()).toBe(false)
    })
})