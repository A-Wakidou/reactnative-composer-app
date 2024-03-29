import { Text, View, TextInput, Button, Modal, Image, StyleSheet, FlatList, ScrollView, TouchableOpacity, TouchableHighlight } from 'react-native';
import Header from '../components/header.js';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from '../features/userSlice.js';

const styles = StyleSheet.create({
    buttons: {
        backgroundColor: 'rgb(95, 158, 194)',
        borderRadius: 20,
        width: 150,
        height: 30,
        justifyContent: 'center',
    }
})

const Account = ({ navigation }) => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    return (
        <ScrollView
            style={{
                flex: 1,
            }}>
            <Header />
            <View style={{ margin: 10, marginTop:20, padding: 15, backgroundColor: '#2D2D2D', borderRadius: 3 }}>
                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Bonjour {user.value.firstname} {user.value.lastname}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 5, marginTop: 30, marginBottom: 5 }}>
                    <TouchableHighlight style={styles.buttons}>
                        <Text style={{ color: 'white', fontSize: 12, textAlign: 'center' }}>Votre compte</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.buttons}>
                        <Text style={{ color: 'white', fontSize: 12, textAlign: 'center' }}>Vos commandes</Text>
                    </TouchableHighlight>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 5, }}>
                    <TouchableHighlight style={styles.buttons}>
                        <Text style={{ color: 'white', fontSize: 12, textAlign: 'center' }}>Acheter à nouveau</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.buttons}>
                        <Text style={{ color: 'white', fontSize: 12, textAlign: 'center' }}>Continuer vos achats</Text>
                    </TouchableHighlight>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 40 }}>
                    <Text style={{ color: 'white', fontSize: 15, marginRight: 10 }}>Vos commandes</Text>
                    <TouchableHighlight>
                        <Text style={{ color: 'rgb(95, 158, 194)', fontSize: 10 }}>Voir tout</Text>
                    </TouchableHighlight>
                </View>
                { user.value.orders ? 
                    <FlatList style={{ flex: 1, marginTop: 20, marginBottom: 20 }} horizontal data={user.value.orders} keyExtractor={orders => orders.id} renderItem={({ item, index, separators }) => (
                        <TouchableHighlight
                            style={{ marginRight: 20 }}
                            key={item.id}
                            onPress={() => props.navigation.navigate('Product', { item })}
                            onShowUnderlay={separators.highlight}
                            onHideUnderlay={separators.unhighlight}>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image style={{ width: 100, height: 100 }} source={item.products[0].images[0].url} />
                                <Text style={{ fontSize: 10, color: 'white' }}>Commande du {"\n"} {new Date(item.createdDate).toLocaleDateString('fr-FR')}</Text>
                            </View>
                        </TouchableHighlight>
                    )} />
                    :
                    <>
                        <Text style={{color:'white', margin:10, marginLeft:0, fontSize: 10, fontStyle: 'italic'}}>Vous n'avez pas encore de commande</Text>
                        <Button title="Découvrez nos produits" onPress={() => navigation.navigate('SearchScreen', {screen: 'Search'})} />
                    </>
                }
                <Text style={{ color: 'white', fontSize: 15, marginTop:40, marginBottom: 15 }}>Paramètres</Text>
                <ScrollView horizontal>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 5 }}>
                        <TouchableHighlight style={styles.buttons}>
                            <Text style={{ color: 'white', fontSize: 12, textAlign: 'center' }}>Votre informations</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.buttons}>
                            <Text style={{ color: 'white', fontSize: 12, textAlign: 'center' }}>Votre paiements</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.buttons}>
                            <Text style={{ color: 'white', fontSize: 12, textAlign: 'center' }}>Votre préférences</Text>
                        </TouchableHighlight>
                    </View>
                </ScrollView>
                <View style={{marginTop: 20, marginBottom:20}}>
                    <Text style={{ color: 'rgb(95, 158, 194)', fontWeight: '400', marginBottom: 10 }}>Changer votre mot de passe</Text>
                    <Text style={{ color: 'rgb(95, 158, 194)', fontWeight: '400', marginBottom: 10 }}>Changer votre adresse email</Text>
                    <Text style={{ color: 'rgb(95, 158, 194)', fontWeight: '400', marginBottom: 10 }}>Vos information de paiements</Text>
                    <Text style={{ color: 'rgb(95, 158, 194)', fontWeight: '400', marginBottom: 10 }}>Vos adresses</Text>
                </View>
                <TouchableHighlight onPress={() => dispatch(logOut())} style={[styles.buttons, { backgroundColor: 'tomato', width: '100%', marginTop: 20 }]}>
                    <Text style={{ color: 'white', fontSize: 12, textAlign: 'center' }}>Déconnexion</Text>
                </TouchableHighlight>
            </View>
        </ScrollView>
    );
};

export default Account;