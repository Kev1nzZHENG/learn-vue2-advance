import axios from "axios";
import { nanoid } from "nanoid";

// 人员管理相关配置
export default {
    namespaced: true,
    actions: {
        addWang(context, value) {
            if (value.name.indexOf('王') === 0) {
                context.commit('ADD_PERSON', value)
            } else {
                alert('添加的人必须姓王！')
            }
        },
        addFromServer(context) {
            axios.get('http://api.uixsj.cn/hitokoto/get?type=social').then(
                (response) => {
                    context.commit('ADD_PERSON', { id: nanoid(), name: response.data })
                },
                (error) => {
                    alert(error.message)
                }
            )
        }
    },
    mutations: {
        ADD_PERSON(state, personObj) {
            console.log('mutations的ADD_PERSON被调用');
            state.personList.unshift(personObj);
        }
    },
    state: {
        personList: [
            { id: '001', name: '张三' },
            { id: '002', name: '李四' }
        ]
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name;
        }
    }
}