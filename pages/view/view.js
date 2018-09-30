var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  data: {
    toView: 'red',
    scrollTop: 160,
    scrollLeft: 80,
    wb:0
  },
  onLoad: function(){
    let wd = 0;
    let query = wx.createSelectorQuery();
    let items = query.selectAll(".scroll-view-item_H").boundingClientRect(res => {
      for (let i = 0; i < res.length; i++) {
        wd += res[i].width;
      }
      this.setData({
        wb: wd
      });
    });
    let viewport = query.selectViewport().boundingClientRect(res => console.log(res));
    query.exec(res => console.log(res));

  },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
  scrolltoup: function (e) {    
    this.setData({
      scrollLeft: this.data.wb
    })
  },
  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})