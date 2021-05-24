import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'

import router from '@/router'

import App from '@/App.vue'

const localVue = createLocalVue()

localVue.use(VueRouter)

describe('App.vue', () => {
  const vm = shallowMount(
    App,
    {
      localVue,
      router,
    }
  )

  it('renders', () => {
    expect(vm.element).toMatchSnapshot()
  })
})
