// routes/DrawerNavigator.tsx
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MegaSenaScreen from '../pages/MegaSenaScreen';
import QuinaScreen from '../pages/QuinaScreen';
import TimemaniaScreen from '../pages/TimemaniaScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="MegaSena">
      <Drawer.Screen name="Mega-Sena" component={MegaSenaScreen} />
      <Drawer.Screen name="Quina" component={QuinaScreen} />
      <Drawer.Screen name="Timemania" component={TimemaniaScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
