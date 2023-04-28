import React from 'react';
import MyCarousel from './MyCarousel';
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import img5 from '../assets/5.png';
const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container p={'16'} maxW={'container.xl'} minH={'100vh'}>
        <Heading
          borderBottom={'2px solid'}
          m={'auto'}
          textTransform={'uppercase'}
          py={'2'}
          w={'fit-content'}
        >
          Services
        </Heading>

        <Stack
          h={'full'}
          p={'4'}
          alignItems={'centre'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose injected humour
            and the like
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
