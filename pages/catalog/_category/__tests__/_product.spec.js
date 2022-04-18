import { shallowMount, mount } from '@vue/test-utils'
import ProductPage from '../_product.vue'
import ImageWithStubs from '~/components/ImageWithStubs.vue'
import ThumbnailItem from '~/components/ThumbnailItem.vue'

describe('_product.vue', () => {
    test('should render product name', () => {
        const product = {
            name: 'test name',
        }

        const wrapper = shallowMount(ProductPage, {
            data() {
                return { product }
            },
            stubs: {
                ImageWithStubs: true,
            },
        })

        const h1 = wrapper.find('h1')
        expect(h1.text()).toBe(product.name)
    })

    test('the ImageWithStubs component should have correct src and alt attributes', () => {
        const product = {
            name: 'product name',
            mainImage: {
                image_large: 'test-image-url',
            },
        }

        const wrapper = shallowMount(ProductPage, {
            data() {
                return { product }
            },
            stubs: {
                ImageWithStubs,
                ImageStub: true,
            },
        })

        const imageWithStubs = wrapper.findComponent(ImageWithStubs)
        expect(imageWithStubs.props().src).toBe(product.mainImage.image_large)
        expect(imageWithStubs.props().alt).toBe(product.name)
    })

    test('should not render the ThunbnailItem component if the number of images is less than 2', () => {
        const product = {
            product_images: [{}]
        }

        const ThumbnailItem = {
            template: '<div />'
        }

        const wrapper = shallowMount(ProductPage, {
            data() {
                return { product }
            },
            stubs: {
                ImageWithStubs,
                ThumbnailItem,
                ImageStub: true,
            },
        })

        const thumbnailItems = wrapper.findAllComponents(ThumbnailItem)
        expect(thumbnailItems).toHaveLength(0)
    })

    test('renders the ThunbnailItem component if the number of images is more than 1', () => {
        const product = {
            product_images: [{}, {}]
        }

        const ThumbnailItem = {
            template: '<div />'
        }

        const wrapper = shallowMount(ProductPage, {
            data() {
                return { product }
            },
            stubs: {
                ImageWithStubs,
                ThumbnailItem,
                ImageStub: true,
            },
        })

        const thumbnailItems = wrapper.findAllComponents(ThumbnailItem)
        expect(thumbnailItems).toHaveLength(2)
    })

    test('should change the main image by click', async () => {
        const product = {
            mainImage: { image_large: 'first-image-large' },
            product_images: [
                { image_small: 'first-image-small', image_large: 'first-image-large' },
                { image_small: 'second-image-small', image_large: 'second-image-large' },
            ]
        }

        const wrapper = shallowMount(ProductPage, {
            data() {
                return { product }
            },
            stubs: {
                ImageWithStubs,
                ThumbnailItem,
                ImageStub: true,
            },
        })

        const thumbnailItem = wrapper.findAllComponents(ThumbnailItem).at(1)
        await thumbnailItem.trigger('click')

        const imageWithStubs = wrapper.findComponent(ImageWithStubs)
        expect(imageWithStubs.props().src).toBe(product.product_images[1].image_large)
    })

    test('should render product description and product detail', () => {
        const product = {
            description: 'test description',
            detail: 'test detail',
        }

        const wrapper = shallowMount(ProductPage, {
            data() {
                return { product }
            },
            stubs: {
                ImageWithStubs: true,
            },
        })

        const wrapperText = wrapper.text()
        expect(wrapperText).toMatch(product.description)
        expect(wrapperText).toMatch(product.detail)
    })

    test('should not render sizes if sizes does not exist', () => {
        const product = {}

        const wrapper = shallowMount(ProductPage, {
            data() {
                return { product }
            },
            stubs: {
                ImageWithStubs: true,
            },
        })

        const p = wrapper.find('p.text-danger')
        expect(p.text()).toBe('Нет в наличии')

        const sizes = wrapper.findAll('label')
        expect(sizes).toHaveLength(0)
    })

    test('renders the sizes correctly if sizes exist', () => {
        const product = {
            product_items: [
                { size: 1, quantity: 2 },
                { size: 2, quantity: 3 }
            ],
        }

        const wrapper = shallowMount(ProductPage, {
            data() {
                return { product }
            },
            stubs: {
                ImageWithStubs: true,
            },
        })

        const sizes = wrapper.findAll('label')
        expect(sizes).toHaveLength(product.product_items.length)

        expect(sizes.at(0).text()).toBe(product.product_items[0].size.toString())
        expect(sizes.at(1).text()).toBe(product.product_items[1].size.toString())
        
        expect(sizes.at(0).get('input').attributes('value')).toBe(product.product_items[0].quantity.toString())
        expect(sizes.at(1).get('input').attributes('value')).toBe(product.product_items[1].quantity.toString())
    })

    test('renders correct price and does not render discount if discount is less then 1', () => {
        const product = {
            price: 1000,
            discount: 0,
        }

        const Discount = {
            template: '<div />'
        }

        const wrapper = shallowMount(ProductPage, {
            data() {
                return { product }
            },
            stubs: {
                ImageWithStubs: true,
                Discount,
            },
        })

        const discount = wrapper.findComponent(Discount)
        expect(discount.exists()).toBe(false)

        const price = wrapper.find('span.text-success')
        expect(price.text()).toMatch(product.price.toString())
    })

    test('renders correct price and discount if discount is greater than 0', () => {
        const product = {
            price: 1000,
            new_price: 400,
            discount: 60,
        }

        const Discount = {
            template: '<div />'
        }

        const wrapper = shallowMount(ProductPage, {
            data() {
                return { product }
            },
            stubs: {
                ImageWithStubs: true,
                Discount,
            },
        })

        const discount = wrapper.findComponent(Discount)
        expect(discount.exists()).toBe(true)

        const price = wrapper.find('span.badge.bg-secondary')
        expect(price.text()).toMatch(product.price.toString())

        const youSave = wrapper.find('span.fw-bold.text-danger')
        expect(youSave.text()).toMatch(`${product.price - product.new_price}`)

        const newPrice = wrapper.find('span.text-success')
        expect(newPrice.text()).toMatch(product.new_price.toString())
    })
})