import { StyleSheet } from 'react-native';

// ====== BIẾN MÀU ======
const VAR_BTN_CLOSE = '#007bff';

export default StyleSheet.create({
  // ====== CONTAINER ======
  container: {
    flex: 1,
    flexDirection: 'column',
    gap: 10,
    backgroundColor: '#f5f5f5',
  },
  appTitle: {
    fontSize: 20,

  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 10,
  },

  // ====== HEADER ======

  header: {
    backgroundColor: '#2196f3',
    paddingTop: 40,
    paddingBottom: 16,
    alignItems: 'center',
    position: 'relative'
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  headerMenuBtn: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    gap: 10,
  },
  headerMenuTitle: {
    fontSize: 20,
  },
  headerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 5,
    marginRight: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  headerButtonText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#333',
  },

  // ====== MODALS ======
  // Modal tổng menu hiệu chỉnh
  menuModalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuModalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    width: '90%',
  },
  // Modal chọn giọng đọc
  voiceModalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  voiceModalContent: {
    width: '90%',
    maxHeight: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  voiceModalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  searchBar: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  voiceItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    width: '100%',
  },
  selectedVoiceItem: {
    backgroundColor: '#e6f7ff',
  },
  voiceName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  voiceDescription: {
    fontSize: 12,
    color: '#666',
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    alignItems: 'center',
    backgroundColor: VAR_BTN_CLOSE,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  // Dropdown chung cho các lựa chọn
  dropdown: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    zIndex: 1000,
    top: 45,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  dropdownItemText: {
    fontSize: 14,
    color: '#333',
  },
  searchReplaceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 10,
    width: '100%',
    justifyContent: 'space-between',
  },
  searchReplaceInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginRight: 5,
    minWidth: 120,
    marginBottom: 5,
  },
  replaceButton: {
    backgroundColor: '#28a745',
    padding: 8,
    borderRadius: 5,
    marginLeft: 0,
    marginBottom: 5,
  },
  replaceButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  // ====== CONTENT ======
  content: {
    flex: 1,
    padding: 10,
  },
  textArea: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    textAlignVertical: 'top',
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  infoCard: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  infoText: {
    fontSize: 12,
    color: '#555',
  },
  convertButton: {
    backgroundColor: '#2196f3',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  convertButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  // ====== FOOTER ======
  footer: {
    marginTop: 10,
    padding: 10,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  footerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },
  emptyStateText: {
    fontSize: 16,
    color: '#888',
    marginTop: 10,
  },
  convertedFileItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  convertedFileName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  convertedFileDetail: {
    fontSize: 14,
    color: '#666',
  },
  playButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e6f7ff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  playButtonText: {
    marginLeft: 5,
    color: '#007bff',
    fontWeight: 'bold',
  },
}); 