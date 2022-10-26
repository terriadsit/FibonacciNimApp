// cannot add style to react native <Button>
import React from "react";
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
} from 'react-native';


export default function FlatButton({ text, onPress }) {
    return(
        <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        paddingTop: 10
    },
    button: {
        
        borderRadius: 18,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#5C5565',
        width: 150,
        alignSelf: 'center',
        height: 50,
       
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 12,
        fontFamily: 'Gothic'
    }
})