import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
    button: {
        border: 0,
        color: 'white',
        padding: '0 10px',
        whiteSpace: 'nowrap',
        margin: '0px 0 0 15px',
    },
    label: {
        width: '80%',
    },
    inputColor:{
        color:'white',
    }
});


const TodoCreator = ({ theme, todo, setTodo, clearInput, inputRef, isInputEmpty, preventSubmit }) => {
    const classes = useStyles();

    return (
        <div className="form__input">
            <ThemeProvider theme={theme}>
                <FormControl className={classes.label}>
                    <TextField
                        id="outlined-basic"
                        label="Add a To-do here" // better accessibility with Material UI
                        value={todo}
                        variant="outlined"
                        onChange={(e) => setTodo(e.target.value)}
                        onFocus={clearInput}
                        ref={inputRef}
                        aria-describedby="component-error-text"
                        onKeyPress={preventSubmit}
                    />

                    {!isInputEmpty ?
                        <></>
                        :
                        <>
                            <FormHelperText id="component-error-text">Task can't be empty</FormHelperText>
                        </>
                    }
                </FormControl>
                <Fab 
                type="submit"
                color="primary" 
                aria-label="add"
                className={classes.button}
                onKeyPress={preventSubmit}
                >
                    <AddIcon />
                </Fab>
            </ThemeProvider> 
        </div>
    )

}

export default TodoCreator;