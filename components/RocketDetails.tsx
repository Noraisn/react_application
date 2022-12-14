//mui imports
import { Grid } from '@mui/material';

//interfaces import
import RocketDetailsInterface from '../model/RocketDetails/RocketDetails';

export default function RocketDetails ( { links, rocket, details} : RocketDetailsInterface ) {

    const rocketImageSrc = links?.flickr_images?.[0] ?? 'N/A';

    return (
        <Grid container>
            <Grid item xs = { 5 } > 
                <img src = { rocketImageSrc } style = { {width: "100%", maxHeight: "90vh"} } />
            </Grid>
            <Grid item xs = { 3 } > 
                <h1> { rocket?.rocket_name } (type: { rocket?.rocket_type } )</h1>
            </Grid>
            <Grid item xs = { 4 } > 
                <h1> {details} )</h1>
            </Grid>
        </Grid>
    )
}
