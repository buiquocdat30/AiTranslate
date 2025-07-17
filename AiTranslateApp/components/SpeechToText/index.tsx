import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import styles from './styles';

export default function SpeechToText() {
  const [isRecording, setIsRecording] = useState(false);
  const [result, setResult] = useState('');

  const handleStart = () => {
    setIsRecording(true);
    setResult('Đang ghi âm...');
    // TODO: Thêm logic Speech to Text ở đây
    setTimeout(() => {
      setResult('Đây là kết quả nhận dạng!');
      setIsRecording(false);
    }, 2000);
  };

  const handleStop = () => {
    setIsRecording(false);
    setResult('Đã dừng ghi âm.');
  };

  return (
    <View style={styles.container}>
      <Button title={isRecording ? 'Đang ghi...' : 'Bắt đầu ghi âm'} onPress={handleStart} disabled={isRecording} />
      <Text style={styles.result}>{result}</Text>
      <Button title="Dừng" onPress={handleStop} disabled={!isRecording} />
    </View>
  );
} 