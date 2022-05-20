import './App.css';
import youtube from './api/youtube';
import Grid from '@mui/material/Grid'
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Grid style={{justifyContent: "center"}} container spacing={10}>
        <Grid item xs={11}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onSubmit={handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              {/* {VideoDetail} */}
            </Grid>
            <Grid item xs={4}>
              {/* {VideoList} */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );

  async function handleSubmit(searchTerm) {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        //key: ,
        q: searchTerm
      }
    })
    console.log(response)
  }
}

export default App;
