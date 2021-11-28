import { Button, Divider, Grid, Paper, Typography, Box, AppBar, Toolbar, TextField,} from '@material-ui/core'
import { AuthContext } from 'contexts';
import ITodoInterface from 'interfaces/ITodoInterface';
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { LOGIN } from 'routes';
import {todosUtil} from './hooks/todosUtil'

const Todo = () => {
    const [todos, setTodos] = useState([] as ITodoInterface[]);
    const {getTodos} = todosUtil();
    const {logout} = useContext(AuthContext);
    
    useEffect(() => {
        let inPage = true;
        let todos:ITodoInterface[] = [];
        async function fetchData() {
            todos = await getTodos();
            if(inPage){
                setTodos(todos);
            }
        }
        fetchData();
        return () => {
            inPage = false
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    return(
        <>
            <AppBar style={{padding: '10px'}}>
                <Toolbar>
                    <TextField placeholder="Saudações viajante, insira seu novo objetivo de vida aqui 🧙" variant='outlined' style={{width: '80%'}} color='secondary'/>
                    <Grid item sm={1}>
                    </Grid>

                    <Button component={Link} to={LOGIN}
                    variant='contained' color='secondary' onClick={() => logout()}
                    > 
                        Dar o fora daqui!
                    </Button>
                </Toolbar>
            </AppBar>

            <Grid container spacing={2} style={{marginTop: '100px'}}>
                {todos.length > 0 && todos.map((todo) => (
                    <Grid item xs={4} key={todo.id}>
                        <Paper style={{textAlign: 'center'}} elevation={24}>
                            <Typography style={todo.status === "Completed" ? {} : {textDecoration: 'line-through'}}>
                                {todo.title}
                            </Typography>

                            <Divider />

                            <Typography >
                                Criado em: {todo.createdAt}
                            </Typography>

                            <Box style={{paddingBottom: '20px'}}>
                                <Button color='secondary' variant='contained' style={{marginRight: '20px'}}>
                                    Remover tarefa
                                </Button>

                                <Button color='primary' variant='contained'
                                onClick={todo.status === 'Completed'? () => {} : () => {}}
                                >
                                    {todo.status === 'Completed' ? "Completar?" : "Descompletar?"}
                                </Button>
                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </>
    )
    
}

export default Todo;