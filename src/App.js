import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

import NumPad from './components/NumPad';

const App = () => {
	const [decimalNum, setDecimalNum] = useState();
	const [binaryNum, setBinaryNum] = useState();

	const numPadCallback = useCallback(numPad => {
		if (numPad) {
			setDecimalNum(numPad.getValue());
			setBinaryNum(numPad.getValue().toString(2));
		}
	}, []);

	StatusBar.setTranslucent(true);
	StatusBar.setBackgroundColor('rgba(0, 0, 0, 0.1)');

	return (
		<View style={styles.container}>
			<View style={styles.display}>
				<Text style={styles.text}>{decimalNum ? decimalNum : null}</Text>
				<Text style={styles.text}>{decimalNum ? binaryNum : null}</Text>
			</View>
			<NumPad ref={numPadCallback} />
		</View>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#152a38',
		flex: 1,
		justifyContent: 'space-between',
	},
	display: {
		height: '60%',
	},
	text: {
		marginTop: 30,
		color: 'white',
		fontSize: 30,
	},
});
