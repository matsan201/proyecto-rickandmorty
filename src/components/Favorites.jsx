import {connect, useDispatch  } from 'react-redux'
import Card from './Card/Card';
import { filterCards, orderCards } from '../Redux/action';
import { useState } from 'react';

const Favorites = ({myFavorites}) =>{
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);


    const handleOrder = (evnet)=> {
        dispatch(orderCards(evnet.target.value))
        setAux(true);
    }

    const handleFilter = (event)=> {
        dispatch(filterCards(event.target.value))
    }

    return(
        <div>
            <select onChange={handleOrder}>
                <option value='A'>Asendente</option>
                <option value='B'>Desendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='Genderless'>Gender</option>
                <option value='unknown'>Unknown</option>
                <option value='allCharacters'>allCharacters</option>
            </select>
            {  
                myFavorites?.map(({id, name, status, species, gender, origin, image, onClose})=>{
                    return (
                        <Card
                        key={id}
                        id={id}
                        name={name}
                        status={status}
                        species={species}
                        gender={gender}
                        origin={origin}
                        image={image}
                         onClose={onClose}
                        />
                    )
                })
            }

        </div>
    )
};

const mapStateToProps = (state)=>{
    return {
        myFavorites: state.myFavorites
    }
};

export default connect(mapStateToProps, null)(Favorites)