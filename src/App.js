import './App.css';
import Grid from '@mui/material/Grid'

function App() {
  return (
    <div className="App">
      <Grid style={{justifyContent: "center"}} container spacing={10}>
        <Grid item xs={11}>
          <Grid container spacing={10}>
            <Grid>
              {/* {SearchBar} */}
            </Grid>
            <Grid>
              {/* {VideoDetail} */}
            </Grid>
            <Grid>
              {/* {VideoList} */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
