import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native'
import React, {useState} from 'react'
import { firebase } from '../config'
import { useNavigation } from '@react-navigation/native'

const Detail = ({route}) => {

    const todoRef = firebase.firestore().collection('todos')
    const [textHeading, onChangeHeadingText] = useState(route.params.item.heading)
    const navigation = useNavigation()




    const updateTodo = () =>{
        if(textHeading && textHeading.length > 0){
            console.log('chegou aqui')
            todoRef
            .doc(route.params.item.id)
            .update({
                heading: textHeading,
            }).then(()=>{
                navigation.navigate('Home')
            }).catch((error)=>{
                alert(error.message)
            })
            
        }
    }


  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textField}
        onChangeText={onChangeHeadingText}
        value={textHeading}
        placeholder="Atualize seu afazer"
      />
    <Pressable
        style={styles.buttonUpdate}
        onPress={ ()=>(updateTodo()) }
    >
        <Text>Atualize o seu afazer</Text>
    </Pressable>
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({
    container:{
        marginTop: '25%',
        marginLeft: 15,
        marginRight: 15
    },
    textField: {
        marginBottom:10,
        padding:10,
        fontSize:15,
        color:'#000000',
        backgroundColor: '#e0e0e0',
        borderRadius:5
    },
    buttonUpdate: {
        marginTop:25,
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:12,
        paddingHorizontal:32,
        borderRadius:4,
        alevation:10,
        backgroundColor:'#fbc50c'
    },
    teste:{
        height: 48,
        borderRadius: 5,
        overflow:'hidden',
        backgroundColor:'blue',
        paddingLeft:16,
        flex:1,
        marginRight:5
    }
})