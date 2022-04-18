import { shallowMount } from '@vue/test-utils'
import ThumbnailItem from '../ThumbnailItem.vue'

describe('ThumbnailItem.vue', () => {
    test('the image should contain correct attributes', () => {
        const src = 'test-url'
        const alt = 'test product name'

        const wrapper = shallowMount(ThumbnailItem, {
            propsData: {
                src,
                alt,
            },
        })

        const image = wrapper.find('img')
        expect(image.attributes().src).toBe(src)
        expect(image.attributes().alt).toBe(alt)
    })

    test('should not show the image until it is loaded', () => {
        const wrapper = shallowMount(ThumbnailItem, {
            propsData: {
                src: 'test-url',
            }
        })

        const image = wrapper.find('img')
        expect(image.isVisible()).toBe(false)
    })

    test('should show the image when it is loaded', async () => {
        const wrapper = shallowMount(ThumbnailItem, {
            propsData: {
                src: 'test-url',
            }
        })

        const image = wrapper.find('img')
        await image.trigger('load')

        expect(image.isVisible()).toBe(true)
    })
})