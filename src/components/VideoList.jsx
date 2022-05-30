import Grid from "@mui/material/Grid";
import VideoItem from "./VideoItem"

const VideoList = ({ videos, onSelectVideo }) => {
  const listOfVideos = videos.map(video => (
    <VideoItem
      onSelectVideo={onSelectVideo}
      key={video.VideoItem.videoId}
      video={video}
    />
  ))

  return ( 
    <Grid container spacing={10}>
      {listOfVideos}
    </Grid>
  );
}

export default VideoList;