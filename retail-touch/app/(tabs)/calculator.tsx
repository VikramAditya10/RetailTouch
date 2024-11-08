import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, TextInput, Switch } from 'react-native';
import { Stack } from 'expo-router';

export default function CalculatorScreen() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [promptVisible, setPromptVisible] = useState(false);
  const [promptValue, setPromptValue] = useState('');
  const [promptType, setPromptType] = useState('');
  const [isPercentage, setIsPercentage] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [currentTransactionIndex, setCurrentTransactionIndex] = useState(-1);

  useEffect(() => {

  }, []);

  const handlePress = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input));
      } catch (e) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult(null);
    } else if (value === 'Discount' || value === 'Tax') {
      setPromptType(value);
      setPromptVisible(true);
    } else {
      setInput(input + value);
    }
  };

  const handlePromptSubmit = () => {
    const amount = parseFloat(promptValue);
    const currentResult = eval(input);
    const discountOrTax = isPercentage ? currentResult * (amount / 100) : amount;
    setInput(`${currentResult + (promptType === 'Discount' ? -discountOrTax : discountOrTax)}`);
    setPromptVisible(false);
    setPromptValue('');
  };

  const startNewTransaction = () => {
    setTransactions([...transactions, { input: '', result: null }]);
    setCurrentTransactionIndex(transactions.length);
    setInput('');
    setResult(null);
  };

  const goToPreviousTransaction = () => {
    if (currentTransactionIndex > 0) {
      const previousTransaction = transactions[currentTransactionIndex - 1];
      setInput(previousTransaction.input);
      setResult(previousTransaction.result);
      setCurrentTransactionIndex(currentTransactionIndex - 1);
    }
  };

  const goToNextTransaction = () => {
    if (currentTransactionIndex < transactions.length - 1) {
      const nextTransaction = transactions[currentTransactionIndex + 1];
      setInput(nextTransaction.input);
      setResult(nextTransaction.result);
      setCurrentTransactionIndex(currentTransactionIndex + 1);
    }
  };

  return (
    <>
      <Stack.Screen options={{ title: 'Calculator' }} />
      <View style={styles.container}>
        <Text style={styles.display}>{input}</Text>
        {result !== null && <Text style={styles.result}>Result: {result}</Text>}
        <View style={styles.row}>
          {['7', '8', '9', '/'].map((value) => (
            <TouchableOpacity key={value} style={styles.button} onPress={() => handlePress(value)}>
              <Text style={styles.buttonText}>{value}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.row}>
          {['4', '5', '6', '*'].map((value) => (
            <TouchableOpacity key={value} style={styles.button} onPress={() => handlePress(value)}>
              <Text style={styles.buttonText}>{value}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.row}>
          {['1', '2', '3', '-'].map((value) => (
            <TouchableOpacity key={value} style={styles.button} onPress={() => handlePress(value)}>
              <Text style={styles.buttonText}>{value}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.row}>
          {['0', '.', '=', '+', '%'].map((value) => (
            <TouchableOpacity key={value} style={styles.button} onPress={() => handlePress(value)}>
              <Text style={styles.buttonText}>{value}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.row}>
          {['Discount', 'Tax'].map((value) => (
            <TouchableOpacity key={value} style={styles.button} onPress={() => handlePress(value)}>
              <Text style={styles.buttonText}>{value}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity style={styles.clearButton} onPress={() => handlePress('C')}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <View style={styles.row}>
          <TouchableOpacity style={styles.transactionButton} onPress={startNewTransaction}>
            <Text style={styles.buttonText}>New Transaction</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.transactionButton} onPress={goToPreviousTransaction}>
            <Text style={styles.buttonText}>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.transactionButton} onPress={goToNextTransaction}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
        {promptVisible && (
          <View style={styles.promptContainer}>
            <Text style={styles.promptText}>Enter {promptType.toLowerCase()} amount or percentage</Text>
            <TextInput
              style={styles.promptInput}
              value={promptValue}
              onChangeText={setPromptValue}
              keyboardType="numeric"
            />
            <View style={styles.switchContainer}>
              <Text>Percentage</Text>
              <Switch
                value={isPercentage}
                onValueChange={setIsPercentage}
              />
            </View>
            <View style={styles.promptButtons}>
              <TouchableOpacity style={styles.promptButton} onPress={() => setPromptVisible(false)}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.promptButton} onPress={handlePromptSubmit}>
                <Text style={styles.buttonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  display: {
    fontSize: 32,
    marginBottom: 16,
    textAlign: 'right',
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  result: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'right',
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  button: {
    flex: 1,
    margin: 4,
    padding: 16,
    backgroundColor: '#ddd',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 24,
  },
  clearButton: {
    margin: 4,
    padding: 16,
    backgroundColor: '#ff6666',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  transactionButton: {
    flex: 1,
    margin: 4,
    padding: 16,
    backgroundColor: '#66b3ff',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  promptContainer: {
    position: 'absolute',
    top: '50%',
    left: '10%',
    right: '10%',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 4,
    alignItems: 'center',
  },
  promptText: {
    fontSize: 18,
    marginBottom: 8,
  },
  promptInput: {
    width: '100%',
    padding: 8,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 8,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  promptButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  promptButton: {
    flex: 1,
    margin: 4,
    padding: 8,
    backgroundColor: '#ddd',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});