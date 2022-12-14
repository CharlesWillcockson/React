import { Component } from "react";
import './card.styles.css';

//------funcional component-------
const Card = ({ monster }) => {
        const { id, name, email } = monster;
        return (
            <div className='card-container' key={id}>
                <img 
                    src={`https://robohash.org/${id}?set=set3`} 
                    alt={`monster ${name}`} 
                />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>)
}





// class Card extends Component {
//     render() {
//         const { id, name, email } = this.props.monster;
//         return (
//                 <div className='card-container' key={id}>
//                     <img 
//                         src={`https://robohash.org/${id}?set=set3`} 
//                         alt={`monster ${name}`} 
//                     />
//                     <h2>{name}</h2>
//                     <p>{email}</p>
//                 </div>)
//     }
// }

export default Card;