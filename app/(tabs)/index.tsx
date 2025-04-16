// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar, } from 'react-native';
// import App from './buoi2';

// export default function Calculator(): JSX.Element {
//     const [expression, setExpression] = useState<string>('');
//     const [result, setResult] = useState<string>('');

//     const handlePress = (value: string): void => {
//         if (value === '+/-') {
//             if (expression) {
//                 if (expression.startsWith('-')) {
//                     setExpression(expression.slice(1));
//                 } else {
//                     setExpression('-' + expression);
//                 }
//             } 
//             return;
//         }

//         if (result) {
//             setExpression(result + value);
//             setResult('');
//         } else {
//             setExpression((prev) => prev + value);
//         }
//     };

//     const handleClear = (): void => {
//         setExpression('');
//         setResult('');
//     };

//     const handleEqual = (): void => {
//         try {
//             const fixedExpr = expression.replace(/×/g, '*').replace(/÷/g, '/');
//             const evalResult = eval(fixedExpr);
//             setResult(evalResult.toString());
//         } catch (e) {
//             setResult('Lỗi');
//         }
//     };

//     const buttons: string[][] = [
//         ['AC', '+/-', '%', '÷'],
//         ['7', '8', '9', '×'],
//         ['4', '5', '6', '-'],
//         ['1', '2', '3', '+'],
//         ['0', '.', '='],
//     ];

//     return (
//         <SafeAreaView style={styles.container}>
//             <StatusBar barStyle="light-content" />
//             <View style={styles.display}>
//                 <Text style={styles.expression}>{expression}</Text>
//                 <Text style={styles.result}>{result}</Text>
//             </View>

//             <View style={styles.buttons}>
//                 {buttons.map((row, rowIndex) => (
//                     <View key={rowIndex} style={styles.row}>
//                         {row.map((btn, btnIndex) => {
//                             if (btn === '')
//                                 return (
//                                     <View
//                                         key={btnIndex}
//                                         style={[styles.button, { backgroundColor: 'transparent' }]}
//                                     />
//                                 );

//                             const isOperator = ['÷', '×', '-', '+', '='].includes(btn);
//                             const isFunction = ['AC', '+/-', '%'].includes(btn);

//                             return (
//                                 <TouchableOpacity
//                                     key={btn}
//                                     style={[
//                                         styles.button,
//                                         isOperator
//                                             ? styles.operator
//                                             : isFunction
//                                                 ? styles.function
// : styles.number,
//                                         btn === '0' ? styles.zeroButton : {},
//                                     ]}
//                                     onPress={() =>
//                                         btn === 'AC'
//                                             ? handleClear()
//                                             : btn === '='
//                                                 ? handleEqual()
//                                                 : handlePress(btn)
//                                     }>
//                                     <Text style={styles.btnText}>{btn}</Text>
//                                 </TouchableOpacity>
//                             );
//                         })}
//                     </View>
//                 ))}
//             </View>
//         </SafeAreaView>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#000',
//     },
//     display: {
//         flex: 1.2,
//         justifyContent: 'flex-end',
//         padding: 24,
//     },
//     expression: {
//         fontSize: 36,
//         color: '#888',
//         textAlign: 'right',
//     },
//     result: {
//         fontSize: 48,
//         color: '#fff',
//         textAlign: 'right',
//         marginTop: 8,
//     },
//     buttons: {
//         flex: 2,
//         padding: 12,
//         gap: 12,
//     },
//     row: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginVertical: 6,
//     },
//     button: {
//       flex: 1,
//       marginHorizontal: 4,
//       backgroundColor: '#222',
//       borderRadius: 24,
//       height: 40,
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     number: {
//         backgroundColor: '#333',
//     },
//     operator: {
//         backgroundColor: '#f1a33c',
//     },
//     function: {
//         backgroundColor: '#a5a5a5',
//     },
//     btnText: {
//       fontSize: 24, // 👈 giảm từ 32 xuống 24
//       color: '#fff',
//     },
//     zeroButton: {
//         flex: 2,
//         alignItems: 'flex-start',
//         paddingLeft: 32,
//     },
// });



import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert, StyleSheet } from 'react-native';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    Alert.alert('Thông tin đăng nhập', `Username: ${username}\nPassword: ${password}`);
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://th.bing.com/th/id/OIP.k-ijBSTJDzSSNaiXUuMGmgHaEK?rs=1&pid=ImgDetMain' }}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.registerText}>REGISTER</Text>

      <TextInput
        style={styles.input}
        placeholder="USERNAME"
        placeholderTextColor="#444"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="PASSWORD"
        placeholderTextColor="#444"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c2a800', // màu vàng giống trong ảnh
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: '80%',
    height: 150,
    marginBottom: 10,
  },
  registerText: {
    alignSelf: 'flex-end',
    marginBottom: 20,
    marginRight: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    backgroundColor: '#f4f4f4',
    borderRadius: 5,
    padding: 10,
    marginVertical: 8,
  },
  loginButton: {
    backgroundColor: '#c66a6a', // màu đỏ hồng giống nút login
    padding: 12,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
