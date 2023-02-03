// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {ClientData} from "@/types";

let clients: ClientData[] = [
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
]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ClientData[]>
) {
    let client: ClientData;
    switch (req.method) {
        case 'POST':
            client = JSON.parse(req.body)
            clients.push(
                client
            )
            break;
        case 'GET':
            res
                .status(200)
                .json(clients)
            break;
    }

}
