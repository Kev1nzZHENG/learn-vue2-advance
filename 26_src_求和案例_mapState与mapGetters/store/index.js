// 该文件用于创建VueX中最为核心的store

// 引入Vue
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'

Vue.use(Vuex)

// 准备actions——用于响应组件中的动作
const actions = {
    // 写法1
    /*     jia: function (context, value) {
            console.log('actions里面的jia被调用了', context, value);
            context.commit('JIA',value)
        } */
    // 写法2
    /* jia(context, value) {
        console.log('actions里面的jia被调用了', context, value);
        context.commit('JIA', value)
    },
    jian(context, value) {
        console.log('actions里面的jian被调用了', context, value);
        context.commit("JIAN", value)
    }, */
    jiaOdd(context, value) {
        if (context.state.sum % 2) {
            console.log('actions里面的jiaOdd被调用了', context, value);
            context.commit('JIA', value)
        }
    },
    jiaWait(context, value) {
        setTimeout(() => {
            console.log('actions里面的jiaWait被调用了', context, value);
            context.commit('JIA', value)
        }, 500);
    }
}

// 准备mutations——用于操作数据(state)
const mutations = {
    JIA(state, value) {
        console.log('mutations的JIA被调用', state, value);
        state.sum += value;
    },
    JIAN(state, value) {
        state.sum -= value;
    },
}

// 准备state——用于存储数据(state)
const state = {
    sum: 0, //当前的和
    school: '尚硅谷',
    subject: '前端'
}

// 准备getters——用于将state中的数据进行加工
const getters = {
    bigSum(state) {
        return state.sum * 10;
    }
}
// 创建并暴露store
export default new Vuex.Store({
    /*     actions:actions,
        mutations:mutations,
        state:state, 
        可简写
        */
    actions,
    mutations,
    state,
    getters
})



// 暴露（导出）store
// export default store