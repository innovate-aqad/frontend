import React, {useState, useEffect, useCallback} from 'react';
import {GiftedChat, Bubble} from 'react-native-gifted-chat';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity, StyleSheet, Alert} from 'react-native';
import DocumentPicker from 'react-native-document-picker';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello, Welcome to Omni Market',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Admin',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((newMessages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, newMessages),
    );
  }, []);

  const handleDocumentPick = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [
          DocumentPicker.types.pdf,
          DocumentPicker.types.images,
          DocumentPicker.types.video,
        ],
        allowMultiSelection: true,
      });
      Alert.alert(
        'Document Selected',
        `Document: ${res.name}\nType: ${res.type}\nURI: ${res.uri}`,
      );
      // You can handle the document as per your requirement, such as uploading it to a server or adding it to the chat.
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User canceled the picker');
      } else {
        console.log('Unknown error: ', err);
      }
    }
  };

  const renderActions = props => {
    return (
      <TouchableOpacity
        style={styles.actionButton}
        onPress={handleDocumentPick}>
        <Icon name="paperclip" size={24} color="#007aff" />
      </TouchableOpacity>
    );
  };

  const renderBubble = props => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#007aff',
          },
          left: {
            backgroundColor: '#ececec',
          },
        }}
      />
    );
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
        name: 'User',
      }}
      renderBubble={renderBubble}
      renderActions={renderActions}
    />
  );
};

const styles = StyleSheet.create({
  actionButton: {
    marginLeft: 10,
    marginBottom: 10,
  },
});

export default ChatScreen;
