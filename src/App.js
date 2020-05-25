import React from 'react';
import {} from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './screens/Main';
import Help from './screens/Help';

const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name={'Main'}
					component={Main}
					options={{
						headerShown: false,
						navigationBar: { backgroundColor: 'black' },
					}}
				/>
				<Stack.Screen
					name={'Help'}
					component={Help}
					options={{
						title: 'Uitleg',
						headerStyle: { backgroundColor: '#264459' },
						headerTintColor: 'white',
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
