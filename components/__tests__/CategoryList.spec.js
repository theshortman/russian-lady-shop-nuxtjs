import { shallowMount } from '@vue/test-utils'
import CategoryList from '../CategoryList.vue'


describe('CategoryList.vue', () => {
    test('renders the correct number of categories', () => {
        const categories = [{}, {}]

        const CategoryListItem = {
            template: '<div />',
        }

        const wrapper = shallowMount(CategoryList, {
            propsData: {
                categories,
            },
            stubs: {
                CategoryListItem,
            }
        }
        )

        const links = wrapper.findAllComponents(CategoryListItem)
        expect(links).toHaveLength(categories.length)
    })
})