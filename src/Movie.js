import React, { useMemo } from "react";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useStateValue } from "./Util";
function Movie() {
  const [state, dispatch] = useStateValue();
  const movieData = state.selectedMovie;

  return useMemo(() => {
    function handleClose() {
      dispatch({ type: "showModal", data: false });
    }
    return (
      <div>
        <Dialog
          open={state.showModal}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{movieData.title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {movieData.description}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }, [dispatch, movieData.description, movieData.title, state.showModal]);
}
export default Movie;
