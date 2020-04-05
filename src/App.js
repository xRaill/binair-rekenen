import React, { useState, useCallback } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	input: {
		backgroundColor: 'gray',
		fontSize: 30
	},
	cubes : {
		backgroundColor: 'red',
		width: 200,
		height: 200,
		margin: 5
	},
	output: {
		textAlign: 'center',
		fontSize: 25,
		fontWeight: "bold"
	}
});

const App = () => {

	const [inputNum, setInputNum] = useState('');
	const [output, setOutput] = useState();

	const calculate = useCallback(() => {
		setOutput((inputNum >>> 0).toString(2));
		setInputNum('');
	}, [inputNum]);

	return (
		<View>
			<TextInput
				style={styles.input}
				placeholder={'Placeholder'}
				keyboardType={'number-pad'}
				textAlign={'center'}
				value={inputNum}
				onChangeText={val => setInputNum(val)}
				onSubmitEditing={calculate}
			/>
			<Text style={styles.output}>{output}</Text>
		</View>
	)
};

export default App;