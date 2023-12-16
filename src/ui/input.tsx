import { FunctionComponent } from "react"

type InputProps = {
	label: string;
	state: string;
	type?: string;
	setState: (value: string) => void;
}

const Input: FunctionComponent<InputProps> = (props) => {
	const { label, state, setState, type } = props;

	return (
		<div className='form-floating'>
			<input
				type={type}
				className='form-control w-100 my-2'
				value={state}
				onChange={e => setState(e.target.value)}
				placeholder='label'
			/>
			<label htmlFor='floatingInput'>{label}</label>
		</div>
	)
}

export default Input
