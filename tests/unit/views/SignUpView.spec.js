import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import router from '@/router'
import store from '@/store'

import SignUpView from '@/views/SignUpView.vue'

const localVue = createLocalVue()

localVue.use(VueRouter)
localVue.use(Vuex)

jest.mock('firebase', () => ({
  app: jest.fn(),
  auth: jest.fn(),
}))

describe('SignUpView.vue', () => {
  const vm = shallowMount(
    SignUpView,
    {
      localVue,
      store,
      router,
    }
  )

  it('renders', () => {
    expect(vm.element).toMatchSnapshot()
  })

  it('method submit', () => {
    vm.vm.submit({
      email: '',
      password: '',
    })
    vm.vm.$nextTick(() => expect(vm.find('.signup-error').exists()).toBeFalsy())

    vm.vm.submit({
      email: '123@example.com',
      password: '12345^AA',
    })
    vm.vm.$nextTick(() => expect(vm.find('.signup-error').exists()).toBeFalsy())
  })
})
