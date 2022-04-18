import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import ProductCard from '../ProductCard.vue'
import ImageWithStubs from '../ImageWithStubs.vue'
import Discount from '../Discount.vue'

describe('ProductCard.vue', () => {
    test('the NuxtLink should have correct url', () => {
        const url = 'test-url'
        const product = {
            product_images: [],
        }

        const wrapper = shallowMount(ProductCard, {
            propsData: {
                url,
                product,
            },
            stubs: {
                NuxtLink: RouterLinkStub,
                ImageWithStubs: true,
            },
        })

        const imageLink = wrapper.findComponent(RouterLinkStub)
        expect(imageLink.props().to).toBe(url)
    })

    test('the ImageWithStubs component should have correct src and alt attributes', () => {
        const url = 'test-url'
        const product = {
            name: 'product name',
            product_images: [
                { image_medium: 'test-image-url' },
            ],
        }

        const wrapper = shallowMount(ProductCard, {
            propsData: {
                url,
                product,
            },
            stubs: {
                NuxtLink: RouterLinkStub,
                ImageWithStubs,
                ImageStub: true,
            },
        })

        const imageWithStubs = wrapper.findComponent(ImageWithStubs)
        expect(imageWithStubs.props().src).toBe(product.product_images[0].image_medium)
        expect(imageWithStubs.props().alt).toBe(product.name)
    })

    test('renders the sizes correctly', () => {
        const url = 'test-url'
        const product = {
            product_images: [],
            product_items: [{ size: 1 }, { size: 2 }],
        }

        const wrapper = shallowMount(ProductCard, {
            propsData: {
                url,
                product,
            },
            stubs: {
                NuxtLink: RouterLinkStub,
                ImageWithStubs: true,
            },
        })

        const sizes = wrapper.findAll('span.badge.bg-secondary')
        expect(sizes).toHaveLength(product.product_items.length)
        expect(sizes.at(0).text()).toBe(product.product_items[0].size.toString())
        expect(sizes.at(1).text()).toBe(product.product_items[1].size.toString())
    })

    test('should not render discount if discount is less then 1', () => {
        const url = 'test-url'
        const product = {
            discount: 0,
            product_images: [],
        }

        const wrapper = shallowMount(ProductCard, {
            propsData: {
                url,
                product,
            },
            stubs: {
                NuxtLink: RouterLinkStub,
                ImageWithStubs: true,
                Discount,
            },
        })

        const discount = wrapper.findComponent(Discount)
        expect(discount.exists()).toBe(false)
    })

    test('renders discount if discount greater than 0', () => {
        const url = 'test-url'
        const product = {
            discount: 30,
            product_images: [],
        }

        const wrapper = shallowMount(ProductCard, {
            propsData: {
                url,
                product,
            },
            stubs: {
                NuxtLink: RouterLinkStub,
                ImageWithStubs: true,
                Discount,
            },
        })

        const discount = wrapper.findComponent(Discount)
        expect(discount.props().value).toBe(product.discount)
    })

    test('should show price if price less than or equal to new price', () => {
        const url = 'test-url'
        const product = {
            price: 900,
            new_price: 1000,
            product_images: [],
        }

        const wrapper = shallowMount(ProductCard, {
            propsData: {
                url,
                product,
            },
            stubs: {
                NuxtLink: RouterLinkStub,
                ImageWithStubs: true,
            },
        })

        const price = wrapper.find('span.badge.bg-success')
        expect(price.text()).toMatch(product.price.toString())
    })

    test('should show new price if price greater than new price', () => {
        const url = 'test-url'
        const product = {
            price: 1500,
            new_price: 1000,
            product_images: [],
        }

        const wrapper = shallowMount(ProductCard, {
            propsData: {
                url,
                product,
            },
            stubs: {
                NuxtLink: RouterLinkStub,
                ImageWithStubs: true,
            },
        })

        const price = wrapper.find('span.badge.bg-success')
        expect(price.text()).toMatch(product.new_price.toString())
    })
})