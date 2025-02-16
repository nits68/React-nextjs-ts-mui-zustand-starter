import { Badge, Button } from "@mui/material";

import useStore from "../store/store";

export default function ApiCallExample() {
  const s = useStore();

  return (
    <div id="counterExample" style={{ margin: "1rem" }}>
      <Button sx={{ textTransform: "none" }} variant="contained" disabled={s.data} onClick={s.getUsers}>
        Execute API call - getUsers()
      </Button>
      <Badge
        badgeContent={`Number of users: ${s.data ? s.data.length : 0}`}
        color="error"
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Button sx={{ textTransform: "none" }} variant="contained" disabled={!s.data} onClick={s.clearUsers}>
          Clear users data
        </Button>
      </Badge>
      <div>
        {s.unpressed ? (
          <h3>Users: Click "Execute API call" button</h3>
        ) : s.loading ? (
          <p>Loading...</p>
        ) : s.error ? (
          <p>Error fetching data: {s.errorData}</p>
        ) : (
          <div>
            <h3>Users:</h3>
            <ul>{s.data?.map(({ name, id }: { name: string; id: number }) => <li key={id}>{name}</li>)}</ul>
          </div>
        )}
      </div>
    </div>
  );
}
