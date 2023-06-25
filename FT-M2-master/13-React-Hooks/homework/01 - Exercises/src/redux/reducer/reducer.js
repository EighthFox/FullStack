const initialState = {
  formulario: {},
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch(type){
    case 'FORM_DATA':
      return({
        formulario: payload,
      })
  }
};

export default rootReducer;
