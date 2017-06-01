<template>
  <div id="app">
    <SlideVideo
      :sources="sources"
      :names="names">
    </SlideVideo>
  </div>
</template>

<script>
import SlideVideo from './vue-slideVideo';

export default {
  name: 'app',
  components: {
    SlideVideo,
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
