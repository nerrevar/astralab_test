import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'

import router from '@/router'

import SignUpView from '@/views/SignUpView.vue'

const localVue = createLocalVue()

localVue.use(VueRouter)

describe('SignUpView.vue', () => {
  const vm = shallowMount(
    SignUpView,
    {
      localVue,
      router,
    }
  )

  it('renders', () => {
    expect(vm.element).toMatchSnapshot()
  })

  it('method submit', () => {
    expect(vm.vm.submit()).toBeUndefined()
  })
})
