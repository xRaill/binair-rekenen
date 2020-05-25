import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

const Help = ({ route }) => {
	const binaryNum = route.params.binaryNum.toString().split('');
	return (
		<View style={styles.container}>
			<Text style={styles.explanation}>
				Binaire getallen zijn opgemaakt uit de cijfers 0 en 1. Om een decimale
				getal van binair uittereken doe je 2 macht de positie waar een 1 staat.,
				tel je dat bij elkaar op en heb je het decimale getal.
			</Text>
			<ScrollView style={styles.wrapper} centerContent={true}>
				{binaryNum.reverse().map((num, i) => (
					<View key={i} style={styles.row}>
						<Text style={[styles.col1, num < 1 && styles.disabled]}>{num}</Text>
						<Text style={[styles.col2, num < 1 && styles.disabled]}>
							2^{i} =
						</Text>
						<Text
							style={[
								styles.col3,
								num < 1 && styles.disabled,
								binaryNum.length - 1 === i && styles.line,
							]}>
							{Math.pow(2, i)}
						</Text>
						{binaryNum.length - 1 === i && <Text style={styles.line}>+</Text>}
					</View>
				))}
				<View style={styles.row}>
					<Text style={styles.last}>{route.params.decimalNum}</Text>
				</View>
			</ScrollView>
		</View>
	);
};

export default Help;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#152a38',
		flex: 1,
	},
	explanation: {
		color: 'white',
		textAlign: 'center',
		marginVertical: 30,
		marginHorizontal: 50,
	},
	wrapper: {
		width: '80%',
		alignSelf: 'center',
	},
	row: {
		flexDirection: 'row',
		height: 25,
	},
	col1: {
		width: '20%',
		textAlign: 'left',
		lineHeight: 25,
		color: 'white',
	},
	col2: {
		width: '20%',
		textAlign: 'center',
		lineHeight: 25,
		color: 'white',
	},
	col3: {
		width: '57%',
		textAlign: 'right',
		lineHeight: 25,
		color: 'white',
	},
	last: {
		width: '97%',
		textAlign: 'right',
		lineHeight: 25,
		color: 'white',
	},
	disabled: {
		color: 'grey',
	},
	line: {
		borderBottomColor: 'white',
		borderBottomWidth: 1,
		textAlign: 'right',
		lineHeight: 29,
		color: 'white',
		minWidth: '3%',
	},
});
