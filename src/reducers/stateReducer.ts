
// create a type for storing the more complex state
import {ClientData} from "@/types";
import {Dispatch} from "react";

export type State = {
    clients: ClientData[],
    username: string
}

export type Action =
    | {
    type: "CLIENT_CREATE",
    payload: ClientData
}
    | {
    type: "CLIENT_DELETE",
    payload: number // a client's ID
} | {
    type: "CLIENT_READ",
    payload: ClientData[]
} | {
    type: "SET_USERNAME",
    payload: string
}

// used to send state and dispatch to each web page
export type StateDispatch = Dispatch<Action>
export type PageProps = {
    state: State,
    dispatch: StateDispatch
}

export default function stateReducer(state: State, action: Action) {
    let oldClients
    let newClients
    switch (action.type) {
        case "CLIENT_READ":
            // // what happens on the API
            // res = await fetch("/api/clients");
            // data = await res.json();
            // what happens with the local state:
            return {...state, clients: action.payload};

        case "CLIENT_CREATE":
            // res = await fetch("/api/clients", {
            //     method: 'POST',
            //     body: JSON.stringify(action.payload)  // send the client's data, but transformed into a string
            // });
            // data = await res.json();
            // TODO check if error occured inside data
            oldClients = state.clients;
            // [1,2,3]   atunci   [...[1,2,3]] este o copie, adica tot [1,2,3]
            //    [...[1,2,3], 4]  =>   [1,2,3,4]
            newClients = [...oldClients, action.payload]
            return {...state, clients: newClients};
        // // TODO same as:
        // return {
        //     ...state,
        //     clients: [...state.clients, action.payload]
        // };

        case "CLIENT_DELETE":
            // // update data on API:
            // res = await fetch('/api/clients', {
            //     method: 'DELETE',
            //     body: `{"id": ${action.payload}}`
            // })
            // data = await res.json();
            // TODO check if error occured inside data
            // change local state:
            console.log(state, action.payload)
            console.log(state.clients.filter(
                ({id}) => id != action.payload
            ))
            return {
                ...state,
                clients: state.clients.filter(
                    ({id}) => id != action.payload
                )
            }
        case "SET_USERNAME":
            return {
                ...state,
                username: action.payload
            }
        default:
            throw new Error();
    }
}
