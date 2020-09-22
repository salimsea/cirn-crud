import { combineReducers } from "redux";

const initialState = {
    name: 'Salim Segaf',
};

const initialStateRegister = {
    form: {
        fullName: '',
        email: '',
        password: ''
    },
    title: 'Register Page',
    desc : 'Ini adalah deskripsi untuk register'
}

const initialStateLogin = {
    form: {
        email: '',
        password: ''
    },
    info: 'Tolong masukan password anda',
    isLogin: false
}

const RegisterReducer = (state = initialStateRegister, action) => {
    if(action.type === 'SET_TITLE'){
        return {
            ...state,
            title: 'Register Ganti Title',
        };
    }
    if(action.type === 'SET_FORM'){
        return {
            ...state,
            form: {
                ...state.form,
                [action.inputType]: action.inputValue
            }
        }
    }
    return state;
}

const LoginReducer = (state = initialStateLogin, action) => {
    if(action.type === 'SET_FORM'){
        return {
            ...state,
            form: {
                ...state.form,
                [action.inputType]: action.inputValue
            },
            isLogin: action.value
        }
    }
    if(action.type === 'CHANGE_ISLOGIN'){
        return {
            ...state,
            isLogin: action.isLogin
        }
    }
    return state;
}

const reducer = combineReducers({
    RegisterReducer,
    LoginReducer,
})

export default reducer;