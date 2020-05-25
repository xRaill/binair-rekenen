import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import NumPad from '../components/NumPad';
import Button from '../components/Button';

const Main = ({ navigation }) => {
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

	changeNavigationBarColor('#264459', false);

	return (
		<View style={styles.container}>
			<View style={styles.display}>
				<Text style={styles.text}>{decimalNum ? decimalNum : null}</Text>
				<Text style={styles.label}>Decimal</Text>
				<View style={styles.separator} />
				<Text style={styles.text}>{decimalNum ? binaryNum : null}</Text>
				<Text style={styles.label}>Binary</Text>
			</View>
			<Button
				disabled={!decimalNum}
				onPress={() =>
					navigation.navigate('Help', {
						binaryNum: binaryNum,
						decimalNum: decimalNum,
					})
				}>
				<Text>Uitleg</Text>
			</Button>
			<NumPad ref={numPadCallback} />
		</View>
	);
};

export default Main;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#152a38',
		flex: 1,
		justifyContent: 'space-between',
		paddingBottom: 5,
	},
	display: {
		height: '60%',
	},
	text: {
		marginTop: 30,
		color: 'white',
		fontSize: 30,
		textAlign: 'right',
		paddingHorizontal: 10,
	},
	label: {
		borderTopWidth: 1,
		borderTopColor: 'white',
		color: 'white',
		marginLeft: '30%',
		paddingLeft: '5%',
	},
	separator: {
		height: 30,
	},
});
