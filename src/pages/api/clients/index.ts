// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {ClientData} from "@/types";


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ClientData[]>
) {
    res
        .status(200)
        .json([
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
        ])
}
