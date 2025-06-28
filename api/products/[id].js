// api/products/[id].js
import products from '../../../data/products';

export default function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  if (method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${method} Not Allowed`);
  }

  const pid = parseInt(id, 10);
  const product = products.find((p) => p.id === pid);
  if (!product) {
    return res.status(404).json({ success: false, message: 'Product not found' });
  }

  res.status(200).json({ success: true, product });
}
