import { StyleSheet, TouchableOpacity, View, Text, KeyboardAvoidingView } from "react-native";

import auth from '@react-native-firebase/auth';


export default function AdScreen({navigation}) {

    const handleSignOut = () => {
        auth().signOut()
        .then(() =>{
            navigation.navigate("Home")
        })
        .catch(error => alert(error.message))
    }

    return(
        <KeyboardAvoidingView style={styles.container}>
            <Text>E-mail: {auth().currentUser?.email}</Text>

            <TouchableOpacity
            onPress={() => navigation.navigate("InputAd")}
            style={styles.button}
            >
                <Text>Add your ad</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => navigation.navigate("ShowAd")}
            style={styles.button}
            >
                <Text>View all Ads</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={handleSignOut}
            styles={styles.button}>
                <Text>Sign Out</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'blue',
        fontSize: 20,
        fontWeight: 'bold',
    },
    inputContainer: {
        width: '60%',
        fontSize: 14,
        color: "red",
        backgroundColor: "white",
        paddingHorizontal: 5,
        paddingVertical: 5,
        marginTop: 20,
        
    },
    button: {
        backgroundColor: 'blue',
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 200,
    },
    listStyle: {
        height:100,
        width: 300,
        borderWidth:5,
        borderColor:'black',
        backgroundColor: 'red',    
        margin:12
        },
});