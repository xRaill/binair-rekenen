import React from 'react';
import { View, TouchableNativeFeedback, StyleSheet, Text } from 'react-native';

const Button = ({ disabled, onPress, style, textStyle, children }) => (
	<TouchableNativeFeedback onPress={onPress} disabled={disabled}>
		<View style={[styles.button, style, disabled && styles.disabled]}>
			<Text style={textStyle || styles.text}>{children}</Text>
		</View>
	</TouchableNativeFeedback>
);

export default Button;

const styles = StyleSheet.create({
	disabled: {
		opacity: 0.3,
	},
	button: {
		backgroundColor: '#3d6a89',
	},
	text: {
		textAlign: 'center',
		textTransform: 'uppercase',
		lineHeight: 35,
	},
});
