import { useState, useEffect, useCallback, ReactElement } from "react";
import { useLocation, useHistory } from "react-router";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

function Search(): ReactElement {
  const location = useLocation();
  const history = useHistory();

  const [state, setState] = useState<string>("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get("q");
    if (search) setState(search);
  }, [location.search]);

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>): void => {
      history.push(`/?q=${state}`);
    },
    [history, state]
  );

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setState(e.target.value);
    },
    []
  );

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>): void => {
      if (e.key === "Enter") history.push(`/?q=${state}`);
    },
    [history, state]
  );

  return (
    <Grid container alignItems="center">
      <Grid item>
        <IconButton onClick={onClick}>
          <Box color="white">
            <SearchIcon />
          </Box>
        </IconButton>
      </Grid>
      <Grid item>
        <TextField
          InputProps={{ style: { color: "#fff" } }}
          placeholder="Search..."
          onKeyDown={onKeyDown}
          onChange={onChange}
          value={state}
        />
      </Grid>
    </Grid>
  );
}

export default Search;
