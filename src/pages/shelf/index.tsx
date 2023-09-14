import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import DocumentPicker, { DocumentPickerResponse, isCancel, isInProgress, types } from 'react-native-document-picker';
import * as RNFS from 'react-native-fs';

export function ShelfPage() {
  const [bookList, setBookList] = useState<Array<DocumentPickerResponse>>([]);

  useEffect(() => {
    (async () => {
      const jsonBooks = await AsyncStorage.getItem('bookListInfo');
      const books = jsonBooks !== null ? (JSON.parse(jsonBooks) as DocumentPickerResponse[]) : [];

      setBookList(books);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const books = JSON.stringify(bookList);

      await AsyncStorage.setItem('bookListInfo', books);
    })();
  }, [bookList]);

  const handleError = (err: unknown) => {
    if (isCancel(err)) {
      console.warn('cancelled');
      // User cancelled the picker, exit any dialogs or menus and move on
    } else if (isInProgress(err)) {
      console.warn('multiple pickers were opened, only the last will be considered');
    } else {
      throw err;
    }
  };

  return (
    <View>
      <Button
        title="open picker for multi file selection"
        onPress={() => {
          DocumentPicker.pick({
            allowMultiSelection: true,
            type: [types.plainText],
            copyTo: 'cachesDirectory',
          })
            .then(async result => {
              if (result?.length) {
                console.log('RNFS.DocumentDirectoryPath', RNFS.DocumentDirectoryPath);

                for (const file of result) {
                  await RNFS.copyFile(file.fileCopyUri!, RNFS.DocumentDirectoryPath + file.name);
                }

                setBookList(sourceBooks => [...sourceBooks, ...result]);
              }
            })
            .catch(handleError);
        }}
      />

      <View className="flex flex-row flex-wrap gap-2">
        {bookList.map(book => (
          <View className="w-[30%] border border-gray-50" key={book.uri}>
            <Text>{book.name?.replace('.txt', '')}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
