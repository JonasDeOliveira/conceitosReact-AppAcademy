import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button, Display } from '../../components/calculator'

function Calculator(props) {

    const [display, setDisplay] = useState(0)
    const [numbers, setNumbers] = useState([0, 0])
    const [position, setPosition] = useState(0)
    const [operation, setOperation] = useState("");

    const clear = (item) => {
        setNumbers([0, 0]);
        setOperation("");
        setPosition(0);
        setDisplay(0);
    }

    const addDigit = (digit) => {
        let num = numbers;
        num[position] = digit
        setNumbers(num);
        setDisplay(num[position]);
        console.warn(num)
    }

    const handleSetOperation = (operationParam) => {
        setOperation(operationParam);
        setPosition(1);
        setDisplay(operationParam);
    }

    const handleSetResult = () => {
        let result = 0;
        if (operation == "+") result = numbers[0] + numbers[1];
        if (operation == "-") result = numbers[0] - numbers[1];
        if (operation == "*") result = numbers[0] * numbers[1];
        if (operation == "/") result = numbers[0] / numbers[1];

        let num = numbers;
        num[0] = result;
        setNumbers(num);
        setDisplay(result);
    }

    return (
        <View style={[styles.Container]}>
            <Text>Calculator</Text>
            <Display value={display}/>
            <View style={[styles.Buttons]}>
                <Button label="AC" onPress={clear}/>
                <Button label={9} onPress={addDigit}/>
                <Button label={8} onPress={addDigit}/>
                <Button label={7} onPress={addDigit}/>
                <Button label={6} onPress={addDigit}/>
                <Button label={5} onPress={addDigit}/>
                <Button label={4} onPress={addDigit}/>
                <Button label={3} onPress={addDigit}/>
                <Button label={2} onPress={addDigit}/>
                <Button label={1} onPress={addDigit}/>
                <Button label="+" onPress={handleSetOperation}/>
                <Button label="-" onPress={handleSetOperation}/>
                <Button label="*" onPress={handleSetOperation}/>
                <Button label="/" onPress={handleSetOperation}/>
                <Button label="=" onPress={handleSetResult}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#fff'
    }, 
    Buttons: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})

export default Calculator