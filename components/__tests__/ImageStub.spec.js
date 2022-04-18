import { shallowMount } from '@vue/test-utils'
import ImageStub from '../ImageStub.vue'

describe('ImageStub.vue', () => {
    test('renders correctly', () => {
        const wrapper = shallowMount(ImageStub)
        
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('renders correct text', () => {
        const text = 'test text'

        const wrapper = shallowMount(ImageStub, {
            propsData: {
                text,
            }
        })

        expect(wrapper.text()).toBe(text)
    })
})