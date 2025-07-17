import React, { useState } from 'react';
import styles from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, Modal, FlatList, TextInput, StyleSheet } from 'react-native';



const TextToSpeech = () => {
  const [isVoiceModalVisible, setVoiceModalVisible] = useState(false);
  const [isSpeedDropdownVisible, setSpeedDropdownVisible] = useState(false);
  const [isFormatDropdownVisible, setFormatDropdownVisible] = useState(false);
  const [isBreakDropdownVisible, setBreakDropdownVisible] = useState(false);
  const [isQualityDropdownVisible, setQualityDropdownVisible] = useState(false);
  const [isSearchReplaceVisible, setSearchReplaceVisible] = useState(false);

  const [selectedVoice, setSelectedVoice] = useState('HN - Ngọc Huyền');
  const [selectedSpeed, setSelectedSpeed] = useState('1x Bình thường');
  const [selectedFormat, setSelectedFormat] = useState('.mp3');
  const [selectedBreak, setSelectedBreak] = useState('1s');
  const [selectedQuality, setSelectedQuality] = useState('128 kbps');

  const [searchText, setSearchText] = useState('');
  const [replaceText, setReplaceText] = useState('');
  const [inputText, setInputText] = useState('');
  // Định nghĩa kiểu cho file đã chuyển đổi
  interface ConvertedFile {
    id: number;
    name: string;
    createdAt: string;
    duration: string;
    text: string;
  }
  const [convertedFiles, setConvertedFiles] = useState<ConvertedFile[]>([]);

  const voices = [
    { id: '1', name: 'HN - Ngọc Huyền', description: 'Giọng Vbee' },
    { id: '2', name: 'SG - Tường Vy', description: 'Tổng Đài' },
    { id: '3', name: 'HN - Việt Bách', description: 'Trẻ Em' },
    { id: '4', name: 'HN - Ngân Hà', description: 'Beta' },
    { id: '5', name: 'HN - Minh Quân', description: 'Beta' },
    { id: '6', name: 'SG - Thảo Trinh', description: 'Nhân Nhạ' },
    { id: '7', name: 'SG - Chí Đạt', description: 'Đọc Truyện' },
    { id: '8', name: 'HN - Hà Chi', description: 'Thuyết Minh' },
    { id: '9', name: 'HN - Anh Khôi', description: 'Đọc Truyện' },
    { id: '10', name: 'HN - Ngọc Lan', description: 'Đọc Truyện' },
  ];

  const speeds = ['0.25x Rất chậm', '0.5x Chậm', '0.75x', '1x Bình thường', '1.15x Nhanh', '1.25x Rất nhanh'];
  const formats = ['.mp3', '.wav'];
  const breaks = ['Close', '1s', '2s', '3s'];
  const qualities = ['8 kbps', '16 kbps', '32 kbps', '64 kbps', '128 kbps'];

  const handleConvertText = () => {
    if (inputText.trim() === '') {
      alert('Vui lòng nhập nội dung văn bản!');
      return;
    }
    // Logic để chuyển đổi văn bản thành audio
    // Đây là ví dụ, bạn sẽ cần tích hợp API hoặc thư viện TTS thực tế
    const newFile = {
      id: convertedFiles.length + 1,
      name: `File ${convertedFiles.length + 1}`,
      createdAt: new Date().toLocaleDateString('vi-VN'),
      duration: '00:00', // Thời lượng dự kiến, cần tính toán thực tế
      text: inputText,
    };
    setConvertedFiles([...convertedFiles, newFile]);
    setInputText(''); // Xóa nội dung sau khi chuyển đổi
    alert('Đã chuyển đổi văn bản!');
  };

  const estimatedCharacters = inputText.length;
  // Giả sử 10 ký tự tương đương 1 giây audio, đây chỉ là ví dụ
  const estimatedDuration = Math.ceil(estimatedCharacters / 10);
  const minutes = Math.floor(estimatedDuration / 60);
  const seconds = estimatedDuration % 60;
  const formattedDuration = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* 1.1 Nút chọn giọng đọc */}
        <TouchableOpacity style={styles.headerButton} onPress={() => setVoiceModalVisible(true)}>
          <Text style={styles.headerButtonText}>HN - Ngọc Huyền</Text>
          <MaterialIcons name="arrow-drop-down" size={20} color="#333" />
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isVoiceModalVisible}
          onRequestClose={() => setVoiceModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Chọn giọng đọc</Text>
              <TextInput style={styles.searchBar} placeholder="Tìm kiếm" />
              <FlatList
                data={voices}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={[styles.voiceItem, selectedVoice === item.name && styles.selectedVoiceItem]}
                    onPress={() => {
                      setSelectedVoice(item.name);
                      setVoiceModalVisible(false);
                    }}
                  >
                    <Text style={styles.voiceName}>{item.name}</Text>
                    <Text style={styles.voiceDescription}>{item.description}</Text>
                  </TouchableOpacity>
                )}
              />
              <TouchableOpacity style={styles.closeButton} onPress={() => setVoiceModalVisible(false)}>
                <Text style={styles.closeButtonText}>Đóng</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* 1.2 Nút điều chỉnh tốc độ đọc */}
        <TouchableOpacity style={styles.headerButton} onPress={() => setSpeedDropdownVisible(!isSpeedDropdownVisible)}>
          <Text style={styles.headerButtonText}>{selectedSpeed}</Text>
          <MaterialIcons name="arrow-drop-down" size={20} color="#333" />
        </TouchableOpacity>
        {isSpeedDropdownVisible && (
          <View style={styles.dropdown}>
            {speeds.map((speed) => (
              <TouchableOpacity key={speed} style={styles.dropdownItem} onPress={() => {setSelectedSpeed(speed); setSpeedDropdownVisible(false);}}>
                <Text style={styles.dropdownItemText}>{speed}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* 1.3 Nút tải tệp lên */}
        <TouchableOpacity style={styles.headerButton}>
          <MaterialIcons name="cloud-upload" size={20} color="#333" />
          <Text style={styles.headerButtonText}>Tải tệp lên</Text>
        </TouchableOpacity>

        {/* 1.4 Nút thay đổi định dạng audio */}
        <TouchableOpacity style={styles.headerButton} onPress={() => setFormatDropdownVisible(!isFormatDropdownVisible)}>
          <Text style={styles.headerButtonText}>{selectedFormat}</Text>
          <MaterialIcons name="arrow-drop-down" size={20} color="#333" />
        </TouchableOpacity>
        {isFormatDropdownVisible && (
          <View style={styles.dropdown}>
            {formats.map((format) => (
              <TouchableOpacity key={format} style={styles.dropdownItem} onPress={() => {setSelectedFormat(format); setFormatDropdownVisible(false);}}>
                <Text style={styles.dropdownItemText}>{format}</Text>
              </TouchableOpacity>
            ))}

            
          </View>
        )}

        {/* 1.5 Nút tùy chỉnh thời gian ngắt nghỉ */}
        <TouchableOpacity style={styles.headerButton} onPress={() => setBreakDropdownVisible(!isBreakDropdownVisible)}>
          <Text style={styles.headerButtonText}>{selectedBreak}</Text>
          <MaterialIcons name="arrow-drop-down" size={20} color="#333" />
        </TouchableOpacity>
        {isBreakDropdownVisible && (
          <View style={styles.dropdown}>
            {breaks.map((_break) => (
              <TouchableOpacity key={_break} style={styles.dropdownItem} onPress={() => {setSelectedBreak(_break); setBreakDropdownVisible(false);}}>
                <Text style={styles.dropdownItemText}>{_break}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* 1.6 Nút điều chỉnh chất lượng âm thanh */}
        <TouchableOpacity style={styles.headerButton} onPress={() => setQualityDropdownVisible(!isQualityDropdownVisible)}>
          <Text style={styles.headerButtonText}>{selectedQuality}</Text>
          <MaterialIcons name="arrow-drop-down" size={20} color="#333" />
        </TouchableOpacity>
        {isQualityDropdownVisible && (
          <View style={styles.dropdown}>
            {qualities.map((quality) => (
              <TouchableOpacity key={quality} style={styles.dropdownItem} onPress={() => {setSelectedQuality(quality); setQualityDropdownVisible(false);}}>
                <Text style={styles.dropdownItemText}>{quality}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* 1.7 Nút thêm nhạc nền */}
        <TouchableOpacity style={styles.headerButton}>
          <MaterialIcons name="music-note" size={20} color="#333" />
          <Text style={styles.headerButtonText}>Thêm nhạc nền</Text>
        </TouchableOpacity>

        {/* 1.8 Nút điều chỉnh âm lượng nhạc nền */}
        <TouchableOpacity style={styles.headerButton}>
          <MaterialIcons name="volume-up" size={20} color="#333" />
          <Text style={styles.headerButtonText}>Âm lượng</Text>
        </TouchableOpacity>

        {/* 1.9 Khung tìm kiếm và thay thế */}
        <TouchableOpacity style={styles.headerButton} onPress={() => setSearchReplaceVisible(!isSearchReplaceVisible)}>
          <MaterialIcons name="search" size={20} color="#333" />
          <Text style={styles.headerButtonText}>Tìm và thay thế</Text>
        </TouchableOpacity>
        {isSearchReplaceVisible && (
          <View style={styles.searchReplaceContainer}>
            <TextInput
              style={styles.searchReplaceInput}
              placeholder="Tìm kiếm"
              value={searchText}
              onChangeText={setSearchText}
            />
            <TextInput
              style={styles.searchReplaceInput}
              placeholder="Thay thế"
              value={replaceText}
              onChangeText={setReplaceText}
            />
            <TouchableOpacity style={styles.replaceButton} onPress={() => {
                const newText = inputText.replace(new RegExp(searchText, 'g'), replaceText);
                setInputText(newText);
                setSearchText('');
                setReplaceText('');
                setSearchReplaceVisible(false);
            }}>
              <Text style={styles.replaceButtonText}>Thay thế</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View style={styles.divider} />

      {/* 2. Phần Nội dung */}
      {/* Phần nội dung bao gồm một khung nhập văn bản và một menu dưới cùng với thông tin và nút chuyển đổi. */}
      <View style={styles.content}>
        {/* 2.1. Phần text area để nhập nội dung văn bản cần đọc */}
        <TextInput
          style={styles.textArea}
          multiline
          placeholder="Nhập, copy văn bản hoặc tải tệp lên để chuyển đổi thành giọng nói..."
          value={inputText}
          onChangeText={setInputText}
        />

        {/* 2.2. Phần menu bên dưới */}
        <View style={styles.bottomMenu}>
          {/* Thẻ thông báo nhỏ về số ký tự đang dùng */}
          <View style={styles.infoCard}>
            <Text style={styles.infoText}>Số ký tự đang dùng: {estimatedCharacters}</Text>
          </View>
          {/* Thẻ thông báo nhỏ về thời gian audio dự kiến */}
          <View style={styles.infoCard}>
            <Text style={styles.infoText}>Độ dài audio dự kiến: {formattedDuration}</Text>
          </View>
          {/* Nút chuyển văn bản */}
          <TouchableOpacity style={styles.convertButton} onPress={handleConvertText}>
            <Text style={styles.convertButtonText}>Chuyển văn bản</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.divider} />

      {/* 3. Phần Footer của Component */}
      {/* Phần footer hiển thị danh sách các file đã chuyển đổi của người dùng. */}
      <View style={styles.footer}>
        <Text style={styles.footerTitle}>Danh sách chuyển đổi</Text>
        {convertedFiles.length === 0 ? (
          <View style={styles.emptyState}>
            <MaterialIcons name="inbox" size={50} color="#ccc" />
            <Text style={styles.emptyStateText}>Chưa có file nào được chuyển đổi.</Text>
          </View>
        ) : (
          <FlatList
            data={convertedFiles}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.convertedFileItem}>
                <Text style={styles.convertedFileName}>Tên: {item.name}</Text>
                <Text style={styles.convertedFileDetail}>Ngày tạo: {item.createdAt}</Text>
                <Text style={styles.convertedFileDetail}>Độ dài: {item.duration}</Text>
                <TouchableOpacity style={styles.playButton}>
                  <MaterialIcons name="play-arrow" size={24} color="#007bff" />
                  <Text style={styles.playButtonText}>Phát</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
};
export default TextToSpeech;