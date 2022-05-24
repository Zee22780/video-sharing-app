import './App.css';
import { useState } from 'react';
import youtube from './api/youtube';
import Grid from '@mui/material/Grid'
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';

function App() {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState({id : {}, snippet: {} })

  return (
      <Grid style={{justifyContent: "center"}} container spacing={10}>
        <Grid item xs={11}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onSubmit={handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              {/* {VideoList} */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  );

  async function handleSubmit(searchTerm) {
    const {data : { items: videos } } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: process.env.API_KEY,
        q: searchTerm,
      }
    })
    setVideos(videos)
    setSelectedVideo(videos[0])
  }
}

export default App;
