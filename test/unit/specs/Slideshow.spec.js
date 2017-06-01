// import Vue from 'vue';
import SlideShow from '../../../src/vue-slideshow';

describe('SlideShow - Info', () => {
  it('SlideShow named slideshow', () => {
    expect(SlideShow.name).equal('slideshow');
  });
});

describe('SlideShow - Data', () => { 
  const defaultData = SlideShow.data();

  it('init data === function', (done) => {
    expect(typeof SlideShow.data).to.equal('function');
    done();
  });

  it('currentIndex === 0', () => {
    expect(defaultData.currentIndex).to.equal(0);
  });

  it('paginations.length === 0', () => {
    expect(defaultData.paginations.length).to.equal(0);
  });

  it('timer === null', () => {
    expect(defaultData.timer).to.equal(null);
  });
});
