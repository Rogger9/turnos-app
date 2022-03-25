export const validation = ({ name, email }) => {
	const err = {}
	if (!name || /\d|[!,@#$%&*]|\-/ig.test(name)) err.name = 'Please enter a valid name'
	if (!email || !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)) err.email = 'Please enter a valid email'
	return err
}
