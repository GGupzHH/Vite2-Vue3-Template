import { createStore } from 'vuex'

/**
 * plugins mount
 */
// import plugins from '@/store/plugins'
import plugins from './plugins'

/**
 * modules mount
 */
// import DemoTestModule from '@/modules/DemoTest/store'
import DemoTestModule from '../modules/DemoTest/store'

const store = createStore({
  modules: {
    DemeTest: DemoTestModule
  },
  plugins
})

export default store
