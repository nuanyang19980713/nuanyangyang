import Vue from 'vue'
import {
    Button,
    Form,
    FormItem,
    Input,
    Message,
    Dialog

} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Dialog)
Vue.prototype.$message = Message
