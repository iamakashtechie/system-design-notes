import { h } from 'vue'
import Theme from 'vitepress/theme'
import PwaBadge from './components/PwaBadge.vue'
import './custom.css'

export default {
  extends: Theme,
  Layout() {
    return h(Theme.Layout, null, {
      'layout-bottom': () => h(PwaBadge),
    })
  },
}
