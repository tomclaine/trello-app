import React from "react"
import './Column.scss'
import { mapOrder } from "utilities/sorts"
import Card from "components/Card/Card"

function Column(props){
    const {column} = props 
    const cards = mapOrder(column.cards, column.cardOrder, 'id')
    return( 
        <div className='column'>
            <div className='header'>
                {column.title}
            </div>
            <ul className="card-list">
                {cards.map((card, index) => <Card key={index} card={card} />)}
            </ul>
            <div className='footer'>
                Add new todo
            </div>
        </div> 
    )
}

export default Column