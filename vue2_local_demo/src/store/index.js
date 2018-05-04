import Vue from 'vue'
import Vuex from 'vuex'
import { getAdminInfo } from '@/api/getData'

Vue.use(Vuex)

const state = {
    adminInfo: {
        avatar: 'default.jpg'
    },
    menuInfo: [{
        "id": 2,
        "name": "数据管理-",
        "class": "el-icon-document",
        "children": [
            { "id": "userList", "name": "用户列表", "class": "" },
            { "id": "shopList", "name": "商家列表", "class": "" },
            { "id": "foodList", "name": "食品列表", "class": "" },
            { "id": "orderList", "name": "订单列表", "class": "" },
            { "id": "adminList", "name": "管理员列表", "class": "" }
        ]
    }, {
        "id": 3,
        "name": "添加数据",
        "class": "el-icon-plus",
        "children": [
            { "id": "addShop", "name": "添加商铺", "class": "" },
            { "id": "addGoods", "name": "添加商品", "class": "" }
        ]
    }, {
        "id": 4,
        "name": "图表",
        "class": "el-icon-star-on",
        "children": [
            { "id": "visitor", "name": "用户分布", "class": "" }
        ]
    }, {
        "id": 5,
        "name": "编辑",
        "class": "el-icon-edit",
        "children": [
            { "id": "vueEdit", "name": "文本编辑", "class": "" }
        ]
    }, {
        "id": 6,
        "name": "设置",
        "class": "el-icon-setting",
        "children": [
            { "id": "adminSet", "name": "管理员设置", "class": "" }
        ]
    }, {
        "id": 7,
        "name": "说明",
        "class": "el-icon-warning",
        "children": [
            { "id": "explain", "name": "说明", "class": "" }
        ]
    }, {
        "id": 8,
        "name": "空间",
        "class": "el-icon-star-on",
        "children": [
            { "id": "photos", "name": "照片", "class": "" },
            { "id": "videos", "name": "视频", "class": "" },
        ]
    }]
}

const mutations = {
    saveAdminInfo(state, adminInfo) {
        state.adminInfo = adminInfo;
    }
}

const actions = {
    async getAdminData({ commit }) {
        try {
            const res = await getAdminInfo()
            if (res.status == 1) {
                commit('saveAdminInfo', res.data);
            } else {
                throw new Error(res)
            }
        } catch (err) {
            console.log('您尚未登陆或者session失效')
        }
    }
}

export default new Vuex.Store({
    state,
    actions,
    mutations,
})