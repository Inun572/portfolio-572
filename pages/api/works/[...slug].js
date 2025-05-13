// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { workSlides } from '../../../constants.js';

export default function handler(req, res) {
  const slug = req.query.slug[0];

  if (slug) {
    const work = workSlides.find(f => f.slug === slug)
    res.status(200).json(work)
  } else {
    res.status(200).json(workSlides);
  }
}
