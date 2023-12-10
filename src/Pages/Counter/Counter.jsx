import { Box, Container, Grid, Typography, Button } from "@mui/material";
import React, { useEffect } from "react";
import "../../stylessheet/Counter.css";
import { useSelector, useDispatch } from "react-redux";
import { addCount, clrCount, decCount } from "../../store/slices/CounterSlice";
const Counter = () => {
  const dispatch = useDispatch();
 

  const count = useSelector((state) => state.count);
  const handleIncrement = () => {
    dispatch(addCount());
  };
  const handleDecrement = () => {
    dispatch(decCount());
  };
  const handleClearCount = () => {
    dispatch(clrCount());
  };
 
  
  return (
    <>
      <Box className="counter_sec" component={"section"}>
        <Container>
          <Grid container>
            <Grid item lg={12} className="col-c">
              <Box className="content" component={"div"}>
                <div>
                  <h1>Count : {count}</h1>

                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleIncrement}
                  >
                    Increment
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleDecrement}
                  >
                    Decrement
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleClearCount}
                  >
                    Clear Count
                  </Button>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Counter;
