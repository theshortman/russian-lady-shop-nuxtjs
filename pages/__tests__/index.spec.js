import { shallowMount } from '@vue/test-utils'
import IndexPage from '../index.vue'

describe('index.vue', () => {
    test('renders the correct number of product cards', () => {
        const category = {
            products: [{}, {}]
        }

        const ProductCard = {
            template: '<div />',
        }

        const wrapper = shallowMount(IndexPage, {
            data() {
                return { category }
            },
            stubs: {
                ProductCard,
            },
        })

        const productCards = wrapper.findAllComponents(ProductCard)
        expect(productCards).toHaveLength(category.products.length)
    })
})
