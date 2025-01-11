import { useCallback, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { getRealPath } from 'react-native-actual-path';
import { pickSingle } from 'react-native-document-picker';

export default function App() {
  const [actualUri, setActualUri] = useState('');

  const onPressPick = useCallback(async () => {
    const result = await pickSingle();
    setActualUri(result.uri);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a File</Text>
      <TouchableOpacity style={styles.button} onPress={onPressPick}>
        <Text style={styles.buttonText}>Pick File</Text>
      </TouchableOpacity>
      {actualUri ? (
        <>
          <Text style={styles.textColor}>Picked URI:</Text>
          <Text style={styles.uriText}>{actualUri}</Text>
          <Text style={styles.textColor}>Actual URI:</Text>
          <Text style={styles.uriText}>{getRealPath(actualUri)}</Text>
        </>
      ) : (
        <Text style={styles.placeholderText}>No file selected yet.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4CAF50', // Green
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
  textColor: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 5,
  },
  uriText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#666',
    marginBottom: 15,
    textAlign: 'center',
    marginHorizontal: 20,
    overflow: 'hidden',
  },
  placeholderText: {
    fontSize: 16,
    color: '#888',
    fontStyle: 'italic',
  },
});
