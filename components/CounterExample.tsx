import { Badge, Button } from "@mui/material";

import useStore from "../store/store";

export default function CounterExample() {
  const s = useStore();

  return (
    <div id="counterExample" style={{ margin: "1rem" }}>
      <Badge
        badgeContent={`Count: ${s.counter}`}
        color="error"
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Button
          sx={{ textTransform: "none" }}
          variant="contained"
          onClick={s.incrementCounter}
          color={s.counter % 2 == 0 ? "primary" : "secondary"}
        >
          Hello Material UI (MUI) - Increment counter
        </Button>
      </Badge>
    </div>
  );
}
