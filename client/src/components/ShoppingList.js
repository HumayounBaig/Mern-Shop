import React, { useState, useEffect } from 'react'
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { v4 as uuid } from 'uuid';

function ShoppingList(props) {
  const [items, setItems] = useState([
    { id: uuid(), name: 'Eggs' },
    { id: uuid(), name: 'Milk' },
    { id: uuid(), name: 'Steak' },
    { id: uuid(), name: 'Water' }
  ]);

  const handleClick = () => {
    const name = prompt('Enter Item')
    if(name){
      setItems(
        [...items, {id: uuid(), name: name}]
      )
    }
  }

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id))
  }

  console.log(items)
  return (
    <div>
      <Container>
        <Button
          color='dark'
          style={{ marginBottom: '2rem' }}
          onClick={handleClick}
        >
          Add Item
        </Button>

        <ListGroup>
          <TransitionGroup className='shopping-list'>
            {
              items.map(({ id, name }) => (
                <CSSTransition key={id} timeout={500} classNames='fade'>
                  <ListGroupItem>
                    <Button
                      className='remove-btn'
                      color='danger'
                      size='sm'
                      onClick={() => deleteItem(id)}  
                    >
                      &times;
                    </Button>
                    {name}
                  </ListGroupItem>
                </CSSTransition>
              ))
            }
          </TransitionGroup>
        </ListGroup>
      </Container>
    </div>
  )
}

export default ShoppingList