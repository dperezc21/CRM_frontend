import React from "react";
import { View, Text, FlatList, StyleSheet, Button, Pressable, Image, Alert } from "react-native";
import ContactService from '../services/fileService';
const {deleteContact} = new ContactService()


const RepositoryContacts = (props) => {
    const { contacts } = props;
    return (
        <FlatList
            data={contacts}
            ItemSeparatorComponent={() => <Text/>}
            renderItem={({ item }) => (
                <View style={{ flexDirection: 'row', backgroundColor: '#D0F4F9', borderRadius:10 }}>
                    <View style={{ flexDirection: 'column', paddingLeft: 5 , width:200}}>
                        <Text style={{fontFamily:'serif', fontWeight:'normal', fontSize:15}} >{item.name} {item.lastName}</Text>
                        <Text style={{color:'#2A8D99'}}>(+57) {item.cell}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 90, paddingTop: 5, width: 100 }}>

                        <Pressable 
                        onPress={() =>{
                            Alert.alert('¿Seguro que desea eliminar el contacto?', null, [
                                {
                                    text:"Cancelar",
                                    onPress:()=>console.log(item.name)
                                },
                                {
                                    text:"Eliminar",
                                    onPress:async() =>{
                                        const response = await deleteContact(item._id);
                                        console.log(response)
                                        if(response.status == 200){
                                            console.log("usuario eliminado exitosamente");
                                        }
                                    }
                                }
                            ])
                        }}
                        style={{marginRight:10}}><Image source={require('../../assets/delete.png')} /></Pressable>
                        <Pressable><Image source={require('../../assets/edit.png')} /></Pressable>
                    </View>
                </View>
            )}
            keyExtractor={item => item._id}
        />
    )

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        paddingTop: 10,
        paddingLeft: 5,
        height: 200,
    },
    logo: {
        width: 70,
        height: 90,
        marginRight: 10,
        borderRadius: 30,
        borderColor: '#A53BE5',
        borderWidth: 2
    },
    header: {
        flexDirection: 'row',
        height: 100
    },
    buttons: {
        flexDirection: 'row',
    }
});

export default RepositoryContacts