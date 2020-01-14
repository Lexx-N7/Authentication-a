import React,{useContext} from 'react'
import AddTodo from './AddTodo'
import Todo from './Todo'
import {MyContext} from '../context'
import styled from 'styled-components'
import Spinner from './Spinner'

export default function Todos() {
    let context= useContext(MyContext)
    return(
        <>
        <AddTodo/>
         <Grid>
             {context.todos.map(todo=> <Todo key={todo.id} todo={todo} />)}
         </Grid>
         {context.loading && <Spinner/>}
        </>
    )
}

let Grid = styled.div `
display: grid;
grid-template-columns: repeat(auto-fill,minmax(250px,1fr))
`