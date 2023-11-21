import YouTube from 'react-youtube';

const YoutubePlayer = () => {
  const onPlayerReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://youtu.be/VkM87pog_gM?si=Lx2joax5s_STAx33
      autoplay: 1,
    },
  };

  return <YouTube videoId="VkM87pog_gM" opts={opts} onReady={onPlayerReady} />;
};

export default YoutubePlayer;