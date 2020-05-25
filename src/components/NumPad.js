import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { View, Text, StyleSheet, Vibration } from 'react-native';
import Button from './Button';

const maxChar = 15;

const NumPad = (props, ref) => {
	const [value, setValue] = useState(0);

	useImperativeHandle(ref, () => ({
		getValue: () => value,
	}));

	const handlePress = action => {
		Vibration.vibrate(50);
		switch (action) {
			default:
				action
					? value.toString().length < maxChar
						? setValue(value * 10 + action)
						: null
					: setValue(action);
				break;
			case 0:
				value.toString().length < maxChar ? setValue(value * 10) : null;
				break;
			case 'C':
				setValue(0);
				break;
			case 'DEL':
				value < 10
					? setValue(0)
					: setValue(parseInt(value.toString().slice(0, -1), 10));
		}
	};

	const data = [[7, 8, 9], [4, 5, 6], [1, 2, 3], ['C', 0, 'DEL']];

	return (
		<View style={styles.container}>
			{data.map((val, i) => (
				<View key={i} style={styles.row}>
					{val.map((val2, i2) => (
						<Button
							key={i2}
							onPress={() => handlePress(val2)}
							style={styles.col}
							textStyle={styles.text}>
							{val2}
						</Button>
					))}
				</View>
			))}
		</View>
	);
};

export default forwardRef(NumPad);

const styles = StyleSheet.create({
	container: {
		justifyContent: 'space-around',
		flex: 1,
	},
	row: {
		justifyContent: 'space-around',
		flexDirection: 'row',
		height: '20%',
	},
	col: {
		backgroundColor: '#556e53',
		justifyContent: 'center',
		borderRadius: 10,
		width: '30%',
	},
	text: {
		textAlign: 'center',
		fontSize: 30,
	},
});
