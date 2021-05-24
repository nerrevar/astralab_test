import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'

import router from '@/router'

import EnterView from '@/views/EnterView.vue'

const localVue = createLocalVue()

localVue.use(VueRouter)

describe('EnterView.vue', () => {
  const vm = shallowMount(
    EnterView,
    {
      localVue,
      router,
    }
  )

  it('renders', () => {
    expect(vm.element).toMatchSnapshot()
  })
})
