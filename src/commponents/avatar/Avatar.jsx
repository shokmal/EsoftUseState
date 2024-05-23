import * as React from "react";
import Container from "@mui/material/Container";

export default function Avatar({ image }) {
  return (
    <Container>
      <img src={image} />
    </Container>
  );
}
