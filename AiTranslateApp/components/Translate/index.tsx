import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import styles from './styles';

const LANGUAGES = ['English', 'Vietnamese', 'Chinese', 'Japanese'];

export default function Translate() {
  const [fromLang, setFromLang] = useState('English');
  const [toLang, setToLang] = useState('Vietnamese');
  const [input, setInput] = useState('');
  const [result, setResult] = useState('Băng dính vịt');
  const [multiResult, setMultiResult] = useState([
    { provider: 'Microsoft', text: 'Băng keo dính' },
    { provider: 'Baidu', text: 'DuckTape' },
    { provider: 'Yandex', text: '' },
  ]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>ĐÂY LÀ TÊN APP</Text>
        <MaterialIcons name="emoji-events" size={28} color="#ffc107" style={{ position: 'absolute', right: 50, top: 18 }} />
        <MaterialIcons name="more-vert" size={28} color="#fff" style={{ position: 'absolute', right: 10, top: 18 }} />
      </View>
      {/* Language Selector */}
      <View style={styles.langRow}>
        <TouchableOpacity style={styles.langBtn}>
          <Text style={styles.langText}>{fromLang}</Text>
          <MaterialIcons name="arrow-drop-down" size={20} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.swapBtn}>
          <MaterialIcons name="swap-horiz" size={28} color="#2196f3" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.langBtn}>
          <Text style={styles.langText}>{toLang}</Text>
          <MaterialIcons name="arrow-drop-down" size={20} color="#333" />
        </TouchableOpacity>
      </View>
      {/* Input Box */}
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          placeholder="Enter text..."
          value={input}
          onChangeText={setInput}
        />
        <View style={styles.inputActions}>
          <MaterialIcons name="content-paste" size={22} color="#888" style={styles.inputIcon} />
          <MaterialIcons name="content-copy" size={22} color="#888" style={styles.inputIcon} />
          <MaterialIcons name="image" size={22} color="#888" style={styles.inputIcon} />
          <MaterialIcons name="close" size={22} color="#888" style={styles.inputIcon} />
        </View>
        <TouchableOpacity style={styles.translateBtn}>
          <Text style={styles.translateBtnText}>Translate</Text>
        </TouchableOpacity>
      </View>
      {/* Result Box */}
      <View style={styles.resultBox}>
        <Text style={styles.resultText}>{result}</Text>
        <View style={styles.resultActions}>
          <MaterialIcons name="content-copy" size={22} color="#888" style={styles.inputIcon} />
          <MaterialIcons name="volume-up" size={22} color="#2196f3" style={styles.inputIcon} />
        </View>
      </View>
      {/* Multi Result */}
      <ScrollView style={styles.multiResultBox}>
        {multiResult.map((item, idx) => (
          <View key={item.provider} style={styles.multiResultItem}>
            <Text style={styles.provider}>{item.provider}</Text>
            <Text style={styles.providerResult}>{item.text}</Text>
            <View style={styles.resultActions}>
              <MaterialIcons name="content-copy" size={22} color="#888" style={styles.inputIcon} />
              <MaterialIcons name="volume-up" size={22} color="#2196f3" style={styles.inputIcon} />
            </View>
          </View>
        ))}
      </ScrollView>
      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomBtn}>
          <MaterialIcons name="mic" size={28} color="#2196f3" />
          <Text style={styles.bottomBtnText}>{fromLang}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBtn}>
          <MaterialIcons name="mic" size={28} color="#2196f3" />
          <Text style={styles.bottomBtnText}>{toLang}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
} 