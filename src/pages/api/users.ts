import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {

    const users = [
        { id: 1, name: 'Jackson' },
        { id: 2, name: 'Aneline' },
        { id: 3, name: 'Raul' }
    ]

    return response.json(users)

}