const initialState = {
    heroContent:{
        title:'Grow Your Assets Under Management',
        subtitle: 'Start building APIs for free',
    },
};

const rootReducer = (state = initialState,action) =>{
    switch (action.type) {
        case 'UPDATE_HERO_CONTENT':
          return {
            ...state,
            heroContent: action.payload,
          };
       
        default:
          return state;
      }

};

export default rootReducer;