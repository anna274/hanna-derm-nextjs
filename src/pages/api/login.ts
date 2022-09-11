import { NextApiRequest, NextApiResponse } from 'next';

interface ErrorResponse {
  message: string;
}

interface SuccessResponse {
  id: string;
  name: string;
  role: 'admin' | 'manager';
}

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponse | SuccessResponse>
) => {
  if (req.method !== 'POST') {
    res.status(404).send({ message: 'Route not found' });
  }
  if (req.body.email === 'Hanna' && req.body.password === 'Hanna') {
    res.status(200).send({ id: '1', name: 'Hanna', role: 'admin' });
  }
  if (req.body.email === 'Hanna2' && req.body.password === 'Hanna') {
    res.status(200).send({ id: '2', name: 'Hanna', role: 'manager' });
  }
  res.status(401).send({ message: "We don't know you" });
};

export default handler;
