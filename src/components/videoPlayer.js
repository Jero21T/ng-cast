angular.module('video-player')
.component('videoPlayer', {
  controller: function() {
    //work on iframeContent property below
    this.iframeContent = '<iframe class=\"embed-responsive-item\" src=\"{{\'https://www.youtube.com/embed/\'+$ctrl.video.id.videoId}}\" allowFullScreen></iframe>';
    
    if (!$this.video) {
      console.log(ctrl);
      this.iframeContent = 'Please wait';
    }
  },
  bindings: {
    video: '<'
  },
  
  templateUrl: 'src/templates/videoPlayer.html'
});
