import React, { useState, useEffect } from 'react';
import { Text, TextInput, View, Pressable, Image } from 'react-native';
import RepositoryContacts from './listRepositoryContacts';
import ContactService from '../services/fileService';

const { getContacts } = new ContactService();


function ContactScreen() {
    let [contacts, setContacts] = useState([]);
    useEffect(() => {
        (async () => {
            const response = await getContacts();
            if (response.status == 200) {
                setContacts(response.message)
            }
        })();
    }, [])

    return (
        <View style={{ flex: 1, alignItems: 'center', marginLeft:5, marginTop:30}}>
            <View >

                <TextInput placeholder='Buscar' style={{ width: 200, borderBottomWidth: 1, marginTop: 5, marginBottom:10, paddingTop: 5 }} />
                <View style={{ flexDirection: 'row', paddingTop: 15, height:50 }}>

                    <Text style={{fontWeight:'bold', fontSize:15}}>Lista de contactos</Text>
                    <Pressable
                        onPress={async() => {
                            const response = await getContacts();
                            if (response.status == 200) {
                                setContacts(response.message)
                            }
                        }}
                        style={{ marginLeft: 210 }}><Image source={require('../../assets/refresh.png')} /></Pressable>
                </View>

                <View style={{ flex: 1, width: 370, marginBottom: 10, paddingTop: 15 }}>
                    <RepositoryContacts contacts={contacts} />
                </View>
            </View>
        </View>
    );
}

export default ContactScreen