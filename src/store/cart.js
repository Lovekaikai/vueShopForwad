
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)


const store = new Vuex.Store({
    state: {
        cart:JSON.parse(localStorage.getItem("cart")) || {}
    },
    getters:{
        totalNum(state){
            console.log(state.cart)
            var totalNum = Object.values(state.cart).reduce((v,initValue)=>{
                return v+initValue
            },0)
            return totalNum;
        }
    },
    mutations: {
        add(state,obj) {
           let {id,num}=obj;
           state.cart[id]=num
           localStorage.setItem("cart",JSON.stringify(state.cart))
        },
        changNum(state,obj){
            let { id, num } = obj;
            Vue.set(state.cart, id, num);
            localStorage.setItem("cart", JSON.stringify(state.cart))
        },
        delete(state,obj){
            Vue.delete(state.cart, obj.id);
            localStorage.setItem("cart", JSON.stringify(state.cart))
        }
    }
})
export default store;