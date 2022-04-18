import { shallowMount } from '@vue/test-utils'
import ImageWithStubs from '../ImageWithStubs.vue'
import ImageStub from '../ImageStub'

describe('ImageWithStubs.vue', () => {
    test('the image should contain correct attributes', () => {
        const src = 'test-url'
        const alt = 'test product name'

        const wrapper = shallowMount(ImageWithStubs, {
            propsData: {
                src,
                alt,
            },
            stubs: {
                ImageStub,
            },
        })

        const image = wrapper.find('img')
        expect(image.attributes().src).toBe(src)
        expect(image.attributes().alt).toBe(alt)
    })

    test('should show ImageStub with text "No Photo" if src is null', () => {
        const wrapper = shallowMount(ImageWithStubs, {
            stubs: {
                ImageStub,
            },
        })

        const imageStub = wrapper.findComponent(ImageStub)
        expect(imageStub.text()).toBe('No Photo')

        const image = wrapper.find('img')
        expect(image.exists()).toBe(false)
    })

    test('should show ImageStub with text "Error", when error occurred', async () => {
        const wrapper = shallowMount(ImageWithStubs, {
            propsData: {
                src: 'test-url',
            },
            stubs: {
                ImageStub,
            },
        })

        const image = wrapper.find('img')
        await image.trigger('error')

        const imageStub = wrapper.findComponent(ImageStub)
        expect(imageStub.text()).toBe('Error')

        expect(image.isVisible()).toBe(false)
    })

    test('should show ImageStub with text "Loading..." until it is loaded', () => {
        const wrapper = shallowMount(ImageWithStubs, {
            propsData: {
                src: 'test-url',
            },
            stubs: {
                ImageStub,
            },
        })

        const imageStub = wrapper.findComponent(ImageStub)
        expect(imageStub.text()).toBe('Loading...')

        const image = wrapper.find('img')
        expect(image.isVisible()).toBe(false)
    })

    test('should show ImageStub with text "Loading..." when it is loaded', async () => {
        const wrapper = shallowMount(ImageWithStubs, {
            propsData: {
                src: 'test-url',
            },
            stubs: {
                ImageStub,
            },
        })

        const image = wrapper.find('img')
        await image.trigger('load')

        const imageStub = wrapper.findComponent(ImageStub)
        expect(imageStub.exists()).toBe(false)

        expect(image.isVisible()).toBe(true)
    })
})