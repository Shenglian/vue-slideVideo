<template>
  <div id="app">
    <Slideshow
      :sources="sources"
      :names="names">
    </Slideshow>
  </div>
</template>

<script>
import Slideshow from './vue-slideshow';

export default {
  name: 'app',
  components: {
    Slideshow,
  },
  data() {
    return {
      names: 'sss',
      sources: [
        // {
        //   src: '../static/001.mp4',
        //   type: 'video/mp4',
        // },
        {
          src: '../static/0001.mp4',
          type: 'video/mp4',
          url: '',
          title: '0001',
        },
        // {
        //   src: '../static/0002.mp4',
        //   type: 'video/mp4',
        //   url: '',
        //   title: '0002',
        // },
        // {
        //   src: '../static/0003.mp4',
        //   type: 'video/mp4',
        //   url: '',
        //   title: '0003',
        // },
        // {
        //   src: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
        //   type: 'video/mp4',
        // },
        // {
        //   src: '../static/001.mp4',
        //   type: 'video/mp4',
        // },
        // {
        //   src: '../static/001.mp4',
        //   type: 'video/mp4',
        // },
      ],
    };
  },
};
</script>
