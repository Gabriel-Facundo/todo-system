import { Button, Divider, Grid, Box, Toolbar} from '@material-ui/core'
import { AuthContext } from 'contexts';
import ITodoInterface from 'interfaces/ITodoInterface';
import { useContext, useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { LOGIN, NOT_AUTHORIZED } from 'routes';
import { CenterGrid, CenterGridItem, CenterPaper, FullDiv } from 'shared';
import {getTodos, postTodo, changeTodo, removeTodo} from './hooks/todosUtil'
import img from 'shared/images/universe.jpg'
import { StyledTypography, StyledTextField, StyledAppBar, GridItemDirection, StyledPaper} from 'style/styledsComponents';

const Todo = () => {
    const [todos, setTodos] = useState([] as ITodoInterface[]);
    const [text, setText] = useState('');
    const [fetched, setFetching] = useState(false);
    const {logout, token} = useContext(AuthContext);
  
    useEffect(() => {
        let inPage = true;
        let todos:ITodoInterface[] = [];
        async function fetchData() {
            todos = await getTodos();
            if(inPage){
                setTodos(todos);
                setFetching(true);
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
        <FullDiv img={img}>  
            {!token && <Redirect to={NOT_AUTHORIZED} />}
            <StyledAppBar padding={10} backgroundcolor={'#F0723C'}>
                <Toolbar>
                    <StyledTextField placeholder="Saudações viajante, insira seu novo objetivo de vida aqui 🧙" data-testid="input-text"
                    variant='outlined' 
                    mainwidth={85} marginright={10} backgroundcolor={'#7F1C07'} borderradius={5}
                    color='secondary'
                    value={text}
                    onChange={handleText}
                    />

                    <Button variant='contained' style={{backgroundColor: '#F03E16'}} onClick={ () =>  postTodo({
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
                    variant='contained' style={{backgroundColor: '#EE0303'}} onClick={() => logout()}
                    > 
                        Sair
                    </Button>
                </Toolbar>
            </StyledAppBar>
            {todos.length > 0 && fetched &&
                <Grid container style={{marginTop: '100px'}}>
                    {todos.length > 0 && todos.map((todo) => (
                        <GridItemDirection item xs={4} key={todo.id} padding={10}>
                            <StyledPaper backgroundcolor={'#FF8232'} elevation={24}>
                                <StyledTypography textDecoration={todo.status === "Completed" ? 'line-through' : ''} paddingtop={10} maincolor={"#8B3600"}>
                                    {todo.title}
                                </StyledTypography>
    
                                <Divider />
    
                                <StyledTypography maincolor={"#8B3600"}>
                                    Criado em: {new Date(todo.createdAt).toLocaleDateString()}
                                </StyledTypography>
    
                                <Box style={{paddingBottom: '20px'}}>
                                    <Button variant='contained' style={{marginRight: '20px', backgroundColor: '#EE0303'}}
                                    onClick={() => removeTodo(todo.id, todos).then((response) => setTodos(response))}
                                    >
                                        Remover tarefa
                                    </Button>
    
                                    <Button color='primary' variant='contained'
                                    onClick={() => changeTodo(todo, todos).then((response) => setTodos(response))}
                                    style={{backgroundColor: '#BD5102', color: "black"}}
                                    >
                                        {todo.status === 'Completed' ? "Descompletar?" : "Completar?"}
                                    </Button>
                                </Box>
                            </StyledPaper>
                        </GridItemDirection>
                    ))}
                </Grid>
            }
             {todos.length === 0 && fetched &&
                <CenterGrid>
                    <CenterGridItem>
                        <CenterPaper color={'#F0723C'}>
                            <StyledTypography padding={40} data-testid="no-todos">
                                Opa meu companheiro de revolução! <br />
                                Então, parece que ninguém adicionou nenhuma anotação até então <br />
                                Aproveita ai meu patrão, seja o <b>primeiro</b> e faça inveja em todos! <br />
                                E não se esqueça<br />
                                <b>Viva lá revolución!</b>
                            </StyledTypography>
                        </CenterPaper>
                    </CenterGridItem>
                </CenterGrid>
            }
        </FullDiv>
    )
}

export default Todo;