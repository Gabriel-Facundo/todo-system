import { Button, Divider, Grid, Paper, Typography, Box, AppBar, Toolbar, TextField,} from '@material-ui/core'
import { AuthContext } from 'contexts';
import ITodoInterface from 'interfaces/ITodoInterface';
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { LOGIN } from 'routes';
import { CenterGrid, CenterGridItem, CenterPaper } from 'shared';
import {todosUtil} from './hooks/todosUtil'

const Todo = () => {
    const [todos, setTodos] = useState([] as ITodoInterface[]);
    const [text, setText] = useState('');
    const {getTodos, postTodo, changeTodo, removeTodo} = todosUtil();
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

    function handleText(e: React.ChangeEvent<HTMLInputElement>) {
        setText(e.target.value);
    }
    
    return(
        <>
            <AppBar style={{padding: '10px'}}>
                <Toolbar>
                    <TextField placeholder="Saudações viajante, insira seu novo objetivo de vida aqui 🧙" 
                    variant='outlined' 
                    style={{width: '70%', paddingRight: '10px'}} 
                    color='secondary'
                    value={text}
                    onChange={handleText}
                    />

                    <Button variant='contained' color='secondary' onClick={ () =>  postTodo({
                        title: text,
                        createdAt: new Date(),
                        status: "Uncompleted"
                    }, todos).then((response) => {setTodos(response); setText('')})
                    }>
                        Adicionar!
                    </Button>

                    <Grid item sm={1}>
                    
                    </Grid>
                    

                    <Button component={Link} to={LOGIN}
                    variant='contained' color='secondary' onClick={() => logout()}
                    > 
                        Dar o fora daqui!
                    </Button>
                </Toolbar>
            </AppBar>
            
            {todos.length > 0 && 
                <Grid container spacing={2} style={{marginTop: '100px'}}>
                    {todos.length > 0 && todos.map((todo) => (
                        <Grid item xs={4} key={todo.id}>
                            <Paper style={{textAlign: 'center'}} elevation={24}>
                                <Typography style={todo.status === "Completed" ? {textDecoration: 'line-through'} : {}}>
                                    {todo.title}
                                </Typography>
    
                                <Divider />
    
                                <Typography >
                                    Criado em: {todo.createdAt}
                                </Typography>
    
                                <Box style={{paddingBottom: '20px'}}>
                                    <Button color='secondary' variant='contained' style={{marginRight: '20px'}}
                                    onClick={() => removeTodo(todo.id, todos).then((response) => setTodos(response))}
                                    >
                                        Remover tarefa
                                    </Button>
    
                                    <Button color='primary' variant='contained'
                                    onClick={() => changeTodo(todo, todos).then((response) => setTodos(response))}
                                    >
                                        {todo.status === 'Completed' ? "Descompletar?" : "Completar?"}
                                    </Button>
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            }
             {todos.length === 0 && 
                    <CenterGrid>
                        <CenterGridItem>
                            <CenterPaper>
                                <Typography style={{marginLeft: '40px', marginRight: '40px',marginBottom: '100px'}}>
                                    Salve meu companheiro de revolução! <br />
                                    Então, parece que ninguém adicionou nenhum "Todo" até então <br />
                                    Aproveita ai meu patrão, seja o <b>primeiro</b> e faça inveja em todos <br />
                                    e não se esqueça<br />
                                    <b>Viva lá revolución!</b>
                                </Typography>
                            </CenterPaper>
                        </CenterGridItem>
                    </CenterGrid>}
           
        </>
    )
    
}

export default Todo;