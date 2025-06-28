// api/products/index.js
import products from '../../data/products';

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ success: true, products });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

