<template>
    <div class="slidevideo">
      <div id="slides">
        <a class="slide" :class="{ 'active': currentSlide(index, source) }"
          target="_blank"
          v-for="(source, index) in sources" 
          :href="source.url">
            <h4> {{source.title}} </h4>
            <div class="cover">
              <video name="media" controls playsinline muted controls>
                <source :src="source.src" :type="source.type">
              </video>
            </div>
        </a>  
      </div>

      <div v-if="paginations > 1" class="paginations">
        <div v-for="(p, index) in paginations" 
          class="pagination"
          :class="{ 'active': currentSlide(index) }"
          @click="goToSlide(index)"></div>
      </div>
      
      <div v-if="paginations > 1" class="prev" @click="previousSlideshow"> < </div>
      <div v-if="paginations > 1" class="next" @click="nextSlideshow"> > </div>
          
    </div>
</template>

<script>
  export default {
    name: 'slidevideo',
    props: {
      sources: {
        type: Array,
        required: true,
        default() { return []; },
      },
    },
    data() {
      return {
        currentIndex: 0,
        paginations: [],
      };
    },
    mounted() {
      this.init();
      this.paginations = this.sources.length;
    },
    methods: {
      currentSlide(val) {
        return val === this.currentIndex;
      },
      init() {
        this.$el.style.display = 'block';
        this.slides = this.$el.querySelectorAll('#slides .slide');
        this.videos = this.$el.querySelectorAll('#slides .slide video');

        // First Videos play
        this.videos[0].play();

        // add eventListeners
        this.videos.forEach((s) => {
          // hide control
          s.controls = false;
          // add end event
          s.addEventListener('ended', this.nextSlideshow, false);
        });
      },

      previousSlideshow() {
        this.goToSlide(this.currentIndex - 1);
      },
      nextSlideshow() {
        this.goToSlide(this.currentIndex + 1);
      },
      goToSlide(n = 0) {
        // 1 % 5 = 1, 2 % 5 = 2, 3 % 5 = 3, 4 % 5 = 4, and 5 % 5 = 0
        this.currentIndex = (this.slides.length + n) % this.slides.length;

        this.$el.querySelectorAll('video').forEach((v) => {
          v.pause();
        });

        this.$el.querySelectorAll('video')[this.currentIndex].play();
      },
    },
  };
</script>

<style lang="scss">

$slidesZIndex: 2;
$paginationsZIndex: 3;
$arrowsZIndex: 4;

// if javascript is available，
// it will replace none to block;
.slidevideo {
  display: none;
  position: relative;
  height: auto;
  * {
    box-sizing: border-box;
  }
}

#slides {
  position: relative;
  padding: 0px;
  margin: 0px;
  height: 500px;
  list-style-type: none;
}

.slide {
  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  background-color: #000;
  transition: opacity 1s ease-out;
  z-index: $slidesZIndex;
  color: #fff;

  &.active {
    opacity: 1;
    z-index: 3;
  }
  h4 {
    position: absolute;
    left: 20px;
    bottom: 20px;
  }
}

.slide .cover {
  position: relative;
  margin: auto;
  height: auto;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -20px 20px 20px rgba(0, 0, 0, 1) inset;
  }
}

.slide video {
  width: auto;
  height: 500px;
}

.prev,
.next {
  position: absolute;
  top: 50%;

  font-size: 36px;
  color: #d3d3d3;

  transform: translateY(-50%);
  z-index: $arrowsZIndex;

  cursor: pointer;
}

.prev { left: 30px; }
.next { right: 30px; }

.paginations {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 20px;

  display: flex;
  justify-content: center;

  z-index: $paginationsZIndex;

  .pagination {
    margin: auto 5px;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    border: 1px solid #e89022;
    background-color: #e89022;

    cursor: pointer;
    transition: all, .3s;
    &:hover {
      border: 1px solid #fff;
      background-color: #fff;
    }
    &.active {
      background-color: #fff;
    }
  }
}

</style>
