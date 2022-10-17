import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
        height: '100%',
        justifyContent: 'flex-start',
        
    },
    titleText: {
        fontFamily: 'Gothic-Bold',
        fontSize: 18,
        color: '#333'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    text: {
        fontFamily: 'Gothic',
        fontSize: 15
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
    },
    
    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center',
    },
    
});

