import router from "@/router/router";
import axios from "axios";

export const postModule = {
state:()=>({
    posts: [],  //all news
    isLoading: false,  //Loader
    searchTitle: "", //title for the search
    statusResponse:"",//response from Api
    apiKey: '',  //apikey
    getMost: "emailed",    //options for fetch
    getMostForTheSomeDay: "1", //options for fetch
       
   
}),

getters:{
    searchTitleInSelect(state) {
            return [...state.posts]
            .filter((item) => item.title
            .includes(state.searchTitle.trim())
              );
    },
  },

mutations:{
    setPosts(state,posts){
        state.posts=posts;
    },
    setIsLoading(state,bool){
        state.isLoading=bool;
    },
    setSearchTitle(state,title){
        state.searchTitle=title;
    },
    setStatusResponse(state,statusResponse){
      state.statusResponse=statusResponse;
    },
    setApiKey(state,api){
        state.apiKey=api;
    },
    setGetMost(state,most){
        state.getMost=most;
    },
    setGetMostForTheSomeDay(state,day){
        state.getMostForTheSomeDay=day;
    },
   
},
actions:{
    async fetchNYTNews({state,commit}) {
        try {
          commit('setSearchTitle',' ')
          commit('setIsLoading',true) ;
          const response = await axios.get(
            `https://api.nytimes.com/svc/mostpopular/v2/${state.getMost}/${state.getMostForTheSomeDay}.json?api-key=${state.apiKey}`
          );
          console.log(response.status);
          commit('setPosts',response.data.results);
          commit('setStatusResponse',response.status);
          
               } catch (err) {
                commit('setStatusResponse',err.request.status);
          console.log(err.request.status);
          
        } finally {
            commit('setIsLoading',false) ;
            router.push(`/${state.getMost}`)
            
               }
      },
},
namespaced:true
}