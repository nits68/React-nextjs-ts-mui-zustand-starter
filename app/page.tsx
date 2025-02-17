"use client";

import * as React from "react";
import NextLink from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import CounterExample from "components/CounterExample";

import ApiCallExample from "../components/ApiCallExample";
import Copyright from "../components/Copyright";
import ProTip from "../components/ProTip";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI - Next.js - Zustand App Router example with TypeScript
        </Typography>
        <Link href="/about" color="secondary" component={NextLink}>
          Go to the about page
        </Link>
        <ProTip />
        <CounterExample />
        <ApiCallExample />
        <Copyright />
      </Box>
    </Container>
  );
}
