import React from 'react'
import {TouchableOpacity, StyleSheet, ScrollView, View, Text, TextInput, Image } from 'react-native'

const SignUp = () => {
  return (
    <ScrollView>
      <View>
        <Text style={styles.Title}>
          Create an account
        </Text>

        <View style={styles.SignUp}>
          <View style={styles.Input}>
            <View>
              <Image style={styles.Image} source={require('./Assests/user.png')} />
            </View>
            <TextInput placeholder='username and email' />
          </View>

          <View style={{ ...styles.Input, justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Image style={styles.Image} source={require('./Assests/padlock.png')} />
              <TextInput placeholder='Password' />
            </View>
            <View style={{ marginLeft: 25, marginRight: 1, }}>
              <Image style={styles.Image} source={require('./Assests/witness.png')} />
            </View>
          </View>

          <View style={{ ...styles.Input, justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Image style={styles.Image} source={require('./Assests/padlock.png')} />
              <TextInput placeholder='Confirm Password' />
            </View>
            <View style={{ marginLeft: 25, marginRight: 1, }}>
              <Image style={styles.Image} source={require('./Assests/witness.png')} />
            </View>
          </View>

          <Text style={styles.Content}>
            By clicking the <Text style={{color: 'red'}}> Register </Text> button, you agree to the public offer
          </Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              Create Account
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
              I Already have An Account <Text style={styles.signUp}>Login</Text>
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  Title: {
    fontSize: 60,
    fontWeight: '900',
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

  SignUp: {
    marginVertical: 35,
  },

  Content:{
    marginLeft: 30,
    marginRight: 85,
    marginBottom: 50
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
    marginTop: 25,
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
})

export default SignUp