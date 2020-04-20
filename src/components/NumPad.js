import React, { useState, forwardRef, useImperativeHandle, useEffect } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableNativeFeedback,
	Vibration,
	ToastAndroid,
} from 'react-native';

const NumPad = (props, ref) => {
	const [value, setValue] = useState(0);

	useImperativeHandle(ref, () => ({
		getValue: () => value,
	}));

	const handlePress = action => {
		Vibration.vibrate(50);
		switch (action) {
			default:
				action ? setValue(value * 10 + action) : setValue(action);
				break;
			case 0:
				setValue(value * 10);
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

	useEffect(() => {
		ToastAndroid.show(value.toString(), 100);
	}, [value]);

	const data = [[7, 8, 9], [4, 5, 6], [1, 2, 3], ['C', 0, 'DEL']];

	return (
		<View style={styles.container}>
			{data.map((val, i) => (
				<View key={i} style={styles.row}>
					{val.map((val2, i2) => (
						<TouchableNativeFeedback key={i2} onPress={() => handlePress(val2)}>
							<View style={styles.col}>
								<Text style={styles.text}>{val2}</Text>
							</View>
						</TouchableNativeFeedback>
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
		backgroundColor: '#29435c',
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
	},
});
