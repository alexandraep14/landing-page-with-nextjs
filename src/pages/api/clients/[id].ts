// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {ClientData} from "@/types";

type ErrorData = {
    msg: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ClientData | ErrorData >
) {
    const id = parseInt(req.query.id as string);

    let allClients = [
        {
            name: 'John Doe',
            id: 1,
            age: 22
        },
        {
            name: 'Reagan',
            id: 2,
            age: 42
        },
        {
            name: 'George W. Bush',
            id: 3,
            age: 72
        },
    ];

    let client: ClientData|undefined = allClients.find(client => client.id === id)
    if (client) {
        res
            .status(200)
            .json(client as ClientData)
    } else {
        res
            .status(404)
            .json({msg: "The client was not found"})
    }

}
