import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Dimensions,
  ToastAndroid
} from 'react-native'
import { colors, fonts } from '../../utils'
import { Input, Gap, Button } from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import Axios from 'axios'
import { URLService } from '../../services'
import { setForm } from '../../redux'



const SLIDING_UP_PANEL_HEIGHT = Platform.select({
  ios: Dimensions.get('window').height,
  android: Dimensions.get('window').height
})
const Login = () => {
  const {
    form,
    isLogin
  } = useSelector((state) => state.LoginReducer);
  const dispatch = useDispatch();

  console.log(isLogin)

  const SendData = () => {
    dispatch({ type: 'CHANGE_ISLOGIN', isLogin: true })
    const {
      email,
      password
    } = form;

    const formData = new FormData();

    formData.append('username', email);
    formData.append('password', password);
    console.log(`${URLService}crud/login`)
    Axios.post(`${URLService}crud/login`, formData,{headers: {
        "key" : "salim"
      }
    }).then((res) => {
      let data = res.data;
      console.log(data);
      showToastWithGravity();
    }).catch((err) => {
      console.log(err);
      showToastWithGravity(err);
    })
  }

  const showToastWithGravity = (message) => {
    ToastAndroid.showWithGravityAndOffset(
      `${message}`,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };

  const onInputChange = (value, inputType) => {
    dispatch(setForm(inputType, value))
  }

  return (
    <View style={{flex: 1, backgroundColor: colors.primary, justifyContent:'center'}}>
      <View style={{backgroundColor:colors.white,height:SLIDING_UP_PANEL_HEIGHT/2.5, borderRadius: 10, marginLeft: 10, marginRight: 10}}>
        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 50 }}>
          <Text style={{ fontFamily: fonts.primary[300] }}>Alamat Email</Text>
          <Gap height={5} />
          <Input 
            placeholder="Ketikan Alamat Email"
            value={form.email}
            onChangeText={(value) => onInputChange(value, 'email')}
          />
          <Gap height={15} />
          <Text style={{ fontFamily: fonts.primary[300] }}>Password</Text>
          <Gap height={5} />
          <Input 
            placeholder="Ketikan Password"
            value={form.password}
            onChangeText={(value) => onInputChange(value, 'password')}
          />
          <Gap height={50} />
          <View style={{ justifyContent: 'center'}}>
            <Button title="Masuk" onPress={SendData} />
          </View>
        </View>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})
