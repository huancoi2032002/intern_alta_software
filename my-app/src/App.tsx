import React, {useState} from 'react';
import { Login } from './components/auth/Login';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';
import { RandomNumber } from './components/restriction/RandomNumber';
import { Toast } from './components/templateliterals/Toast';
import { CustomButton } from './components/html/Button';
import { CustomInput } from './components/html/Input';
import { CustomComponent } from './components/html/CustomComponent';
import { Text } from './components/polymorphic/Text';

function App() {

  return (
    
    <div className="App">

      <Text as='a' size='sm' >Heading</Text>
      <Text as='p' size='md' >Paragraph</Text>
      <Text as='label' size='lg' color='secondary'>Label</Text>

      
    </div>
  );
}

export default App;
