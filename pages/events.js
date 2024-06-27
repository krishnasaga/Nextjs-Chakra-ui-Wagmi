import Head from "next/head";
import { Box, Grid,GridItem } from "@chakra-ui/react";
import { Navbar, Landpage, Footer, EventCard } from "../component";
import { EventsList } from "../component/EventsList";

export default function Home() {
    return (
        <Box>
            <Head>
                <title> Web3.0 Starter Template</title>
                <meta name="description" content="Web3.0 Starter Template" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
              <EventsList/>
            <Footer />
        </Box>
    );
}
