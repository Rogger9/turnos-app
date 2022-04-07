import { data } from 'data'

export default function turns (req, res) {
	const get = req.method === 'GET'

	if(get) return res.status(200).json(data)
}
