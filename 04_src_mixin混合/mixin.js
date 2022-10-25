export const mixin1 = {
    methods: {
        showName() {
            alert(this.name);
        },
    },
    mounted() {
        console.log('mounted！');
    }
}
// export default mixin
export const mixin2 = {
    data() {
        return {
            x: 100,
            y: 200
        }
    }
}
