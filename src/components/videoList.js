angular.module('video-player')
.component('videoList', {
  bindings: {
    currentVideo: '<',
    foo: '<'
  },
  templateUrl: 'src/templates/videoList.html',
  controller: function () {
   
    this.videos = window.exampleVideoData;
    this.onClick = function() {};
    console.log(this);
  }
});
