import axios from 'axios';

const initialState = {
    animals: [],
    animal: {}
}

const FULFILLED = '_FULFILLED';
const GET_ANIMAL= "GET_ANIMAL";
const CLEAR_ANIMAL="CLEAR_ANIMAL";

export function clearAnimal() {
    return {
        type: CLEAR_ANIMAL,
        payload: {}
    }
}

export function getAnimal(id){
    console.log(id)
    let animal = axios.get(`/api/animal/${id}`)
    .then(animal => {
        return animal.data
    })
    return {
        type: GET_ANIMAL,
        payload: animal
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ANIMAL + FULFILLED:
        return Object.assign({}, state, {animal: action.payload})
        case CLEAR_ANIMAL:
        return Object.assign({}, state, {animal: action.payload})
        default:
            return state;          
    }
}