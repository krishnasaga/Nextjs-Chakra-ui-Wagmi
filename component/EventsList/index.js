import { Grid, GridItem } from "@chakra-ui/react";
import EventCard  from "../EventCard";

export const EventsList = () => {
    return <Grid gridTemplateColumns={'1fr 1fr 1fr 1fr'} gap={'8px'} p={'40px'} h={'100vh'}>
        {[1, 2, 3, 5].map((index) => <GridItem><EventCard key={index} /></GridItem>)}
    </Grid>
}
