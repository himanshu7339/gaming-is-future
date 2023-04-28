import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Box, Heading, Image } from '@chakra-ui/react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';

const MyCarousel = () => {
  const headingOptions = {
    pos: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    textTransform: 'uppercase',
    p: '4',
    size: '4xl',
  };
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={1000}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
    >
      <Box w={'full'} h={'100vh'}>
        <Image src={img1} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Watch The Future
        </Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image src={img2} />
        <Heading {...headingOptions} bgColor={'whiteAlpha.900'} color={'black'}>
          Future is Gaming
        </Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image src={img3} />
        <Heading {...headingOptions} bgColor={'whiteAlpha.900'} color={'black'}>
          Gaming On Console
        </Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image src={img4} />
        <Heading {...headingOptions} bgColor={'whiteAlpha.600'} color={'black'}>
          Night Life is Cool
        </Heading>
      </Box>
    </Carousel>
  );
};

export default MyCarousel;
