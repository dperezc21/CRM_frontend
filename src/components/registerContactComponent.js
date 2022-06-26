


import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert, ScrollView, SafeAreaView } from 'react-native';
import ContactService from '../services/fileService';
const { insertContact } = new ContactService();

const ContactRegister = ({ navigation }) => {
    let [nameInput, setName] = useState('');
    let [lastNameInput, setLastName] = useState('');
    let [numberPhoneInput, setNumberPhone] = useState('');
    let [dateInput, setDate] = useState('');
    let [emailInput, setEmail] = useState('');
    let [addressInput, setAddress] = useState('');

    return (
        <SafeAreaView style={styles.container}>

            <ScrollView  >

                <View style={styles.register}>

                    <Text style={styles.text}>Nuevo contacto</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nombres"
                        onChangeText={name => setName(name)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Apellidos"
                        onChangeText={lastName => setLastName(lastName)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="E-mail"
                        keyboardType='email-address'
                        onChangeText={email => setEmail(email)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Cel/Tel"
                        keyboardType='numeric'
                        onChangeText={numberPhone => setNumberPhone(numberPhone)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Fecha de nacimiento"
                        onChangeText={year => setDate(year)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Direccion"
                        keyboardType='default'
                        onChangeText={address => setAddress(address)}
                    />

                    <Text></Text>

                    <View style={{ flexDirection: 'row' }}>
                        <Button title='Cancelar' disabled={true} />
                        <Button title='Agregar' onPress={async () => {
                            const data = {
                                name: nameInput,
                                lastName: lastNameInput,
                                cell: numberPhoneInput,
                                email: emailInput,
                                date: dateInput,
                                address: addressInput

                            }
                            const response = await insertContact(data);
                            if(response.status== 402){
                                Alert.alert(response.message);
                            }else if (response.status == 200) {
                                
                                Alert.alert("Contacto Agregado", null, [
                                    {
                                        text: "ok",
                                        onPress: () => navigation.navigate('contactos')
                                    }
                                ]);

                            } else if (response.status == 400) {
                                Alert.alert(response.message);
                            }

                        }} />
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#E3F9F2',
        paddingTop: 100,
        alignItems: 'center'
    },
    register: {
        flexDirection: 'column',
        // borderColor: 'black',
        paddingLeft: 100,
        paddingRight: 100,
        paddingTop: 50,
        paddingBottom: 50,

    },
    input: {
        borderBottomWidth: 1,
        borderLeftWidth:1,
        width: 200,
        height: 25,
        marginBottom: 20,
        backgroundColor:'#DCF4F7',
        borderRadius:8,
        paddingBottom:3,
        paddingLeft:4
    },
    text: {
        marginBottom: 20,
        fontSize: 25
    }
});

export default ContactRegister;