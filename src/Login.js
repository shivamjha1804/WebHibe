import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';

const Login = () => {
  return (
    <ScrollView>
      <View>

        <Text style={styles.Title}>
          Welcome Back!
        </Text>

        <View style={styles.login}>
          <View style={styles.Input}> 
            <View>
              <Image style={styles.Image} source={require('./Assests/user.png')} />
            </View>
            <TextInput placeholder=' Username or email'  />
          </View>
          <View style={{...styles.Input, justifyContent:'space-between'}}>
            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
              <Image style={styles.Image} source={require('./Assests/padlock.png')}/>
            <TextInput placeholder='Password'  />
            </View>
            <View style={{marginLeft:25, marginRight: 1,}}>
              <Image style={styles.Image} source={require('./Assests/witness.png')}/>
            </View>
          </View>
          <Text style={styles.forgetPassowrd}>
            Forget Password
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              Login
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttomStyle}>
          <Text>
            -OR Continue With-
          </Text>
          <View style={styles.Logo}>
            <View style={styles.Circle}>
              <Image style={styles.Image} source={require('./Assests/google.png')} />
            </View>

            <View style={styles.Circle}>
              <Image style={styles.Image} source={require('./Assests/google.png')} />
            </View>

            <View style={styles.Circle}>
              <Image style={styles.Image} source={require('./Assests/google.png')} />
            </View>
          </View>

          <View>
            <Text>
              Create An Account <Text style={styles.signUp}>Sign Up</Text>
            </Text>
          </View>
        </View>

      </View>
    </ScrollView>
  )

}

const styles = StyleSheet.create(
  {
    Title: {
      fontSize: 50,
      marginTop: 25,
      fontWeight: '700',
      marginRight: 50,
      marginLeft: 10,
    },

    Input: {
      flexDirection: 'row',
      marginHorizontal: 10,
      paddingHorizontal: 25,
      borderColor: 'black',
      borderWidth: 0.7,
      borderRadius: 10,
      backgroundColor: 'khaki',
      marginVertical: 10,
      alignItems: 'center'
    },

    Image: {
      height: 20,
      width: 20,
    },

    login: {
      marginVertical: 35,
    },

    forgetPassowrd: {
      alignSelf: 'flex-end',
      marginEnd: 15,
      color: 'red',
      marginBottom: 45,
    },

    button: {
      backgroundColor: 'pink',
      marginHorizontal: 15,
      padding: 15,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },

    buttonText: {
      fontWeight: '800',
      fontSize: 18,
      color: 'white'
    },

    buttomStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50,
    },

    Logo: {
      flexDirection: 'row',
      marginVertical: 20,
    },

    Circle: {
      marginHorizontal: 5,
      padding: 15,
      borderRadius: 50,
      backgroundColor: 'salmon',
      borderColor: 'black',
      borderWidth: 1
    },

    Image: {
      height: 25,
      width: 25,
      resizeMode: 'contain',
    },

    signUp: {
      color: 'red',
    }
  }
)

export default Login;