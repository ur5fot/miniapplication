import Vue from 'vue'
import Vuex from 'vuex'
import { StateInterface } from "@/models/StateInterface";
import { LoginInterface } from "@/models/LoginInterface";
import { NewsInterface } from "@/models/NewsInterface";
import { MutationsEnum } from "@/constants/MutationsEnum";
import { ActionsEnum } from "@/constants/ActionsEnum";
import { GettersEnum } from "@/constants/GettersEnum";

Vue.use(Vuex);

export default new Vuex.Store({
  state: <StateInterface> {
    user: {
      login: {
        name: 'Admin',
        password: '12345'
      },
      isLogin: false
    },
    news: [
      {title: 'News 1', content: '1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,'},
      {title: 'News 2', content: '2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,'},
      {title: 'News 3', content: '3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,'}
    ]

  },
  mutations: {
    [MutationsEnum.setLogin](state, isLogin: boolean) {
      state.user.isLogin = isLogin;
    }
  },
  actions: {
    [ActionsEnum.setLogin](context, isLogin: boolean) {
      let { commit } = context;
      localStorage.setItem('isLogin', String(isLogin));
      commit(MutationsEnum.setLogin, true)
    },
    [ActionsEnum.loadIsLogin](context): boolean {
      let { commit } = context;
      let localStorageIsLogin = JSON.parse(localStorage.getItem('isLogin') + '');
      commit(MutationsEnum.setLogin, localStorageIsLogin);
      return localStorageIsLogin
    },
    [ActionsEnum.logout](context){
      let { commit } = context;
      localStorage.setItem('isLogin', String(false));
      commit(MutationsEnum.setLogin, false);
    }
  },
  getters: {
    [GettersEnum.loginData](state): LoginInterface {
      let { user: { login } } = state;
      return login;
    },
    [GettersEnum.isLogin](state): boolean {
      let { user: { isLogin } } = state;
      return isLogin

    },
    [GettersEnum.news](state): NewsInterface[]{
      let { news } = state;
      return news
    }
  }
})
