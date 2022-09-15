import React from 'react';
import { Text, View, StyleSheet, 
    TouchableOpacity} from 'react-native'

function Button(props) {

    return (
        <View style={[styles.Container]}>
            <TouchableOpacity style={[styles.Button]} onPress={() => props.onPress(props.label)}>
                <Text>{props.label}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#fff'
    },
    Button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        width: 50,
        height: 50,

    }
})

export default Button