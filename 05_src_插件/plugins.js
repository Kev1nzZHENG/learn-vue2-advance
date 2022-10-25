export default {
    install(Vue, a) {
        console.log('@@@install');
        console.log(Vue);
        console.log(a);
        // 全局过滤器
        Vue.filter('myslice', function (value) {
            return value.slice(0, 3);
        })
        // 自定义指令
        Vue.directive('fbind', {
            bind(element, binding) {
                element.value = binding.value;
            },
            inserted(element) {
                element.focus();
            },
            update(element, binding) {
                element.value = binding.value;
            }
        })
        Vue.mixin({
            data() {
                return {
                    n: 1
                }
            }
        }),
            Vue.prototype.$hello = () => {
                alert('hello,world');
            }

    }
}   