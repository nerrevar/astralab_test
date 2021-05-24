import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import MainView from '@/views/MainView.vue'

import router from '@/router'
import store from '@/store/'

const localVue = createLocalVue()

localVue.use(VueRouter)
localVue.use(Vuex)

describe('MainView.vue', () => {
  const vm = shallowMount(
    MainView,
    {
      router,
      store,
    }
  )

  it('renders', () => {
    expect(vm.element).toMatchSnapshot()
  })

  it('title text', () => {
    expect(vm.find('.title').text()).toBe('Hello, John Doe!')
  })
})
