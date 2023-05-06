import { View, VStack, Box, Divider, FlatList, Pressable } from 'native-base';
import React from 'react';

//react native hook to get sm,md,lg
import { useBreakpointValue } from 'native-base';
import { useRouter } from 'expo-router';

const useNumColumns = () => {
  const size = useBreakpointValue({
    base: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
    '2xl': '2xl',
    sm: 'sm',
  });
  console.log(size);

  switch (size) {
    case 'sm':
      return 1;
    case 'md':
      return 2;
    case 'lg':
    case 'xl':
      return 3;

    case '2xl':
      return 4;
  }
};

export default function Home() {
  const numColumns = useNumColumns();
  const router = useRouter();
  return (
    <View flex={1} style={{ gap: 10 }}>
      <FlatList
        key={numColumns}
        padding={10}
        data={[12, 3, 4, 5, 5, 6]}
        numColumns={numColumns}
        renderItem={() => {
          return (
            <Pressable
              flex={1}
              onPress={() => {
                router.push('/post/');
              }}
            >
              <Box borderWidth={1} borderRadius="md" m={5} flex={1}>
                <VStack space="4" divider={<Divider />}>
                  <Box px="4" pt="4">
                    NativeBase
                  </Box>
                  <Box px="4">
                    NativeBase is a free and open source framework that enable
                    developers to build high-quality mobile apps using React
                    Native iOS and Android apps with a fusion of ES6.
                  </Box>
                  <Box px="4" pb="4">
                    GeekyAnts
                  </Box>
                </VStack>
              </Box>
            </Pressable>
          );
        }}
      />
    </View>
  );
}
