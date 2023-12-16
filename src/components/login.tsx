import { FormEvent, useState } from 'react'
import { icon } from '../constants'
import { Input } from '../ui'
import { useDispatch, useSelector } from 'react-redux';
import { authUserStart } from '../slice/auth';
import { RootState } from '../store';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { isLoading } = useSelector((state: RootState) => state.auth);
	console.log(isLoading);

	const dispatch = useDispatch();

	const loginHandler = (e: FormEvent) => {
		e.preventDefault();
		dispatch(authUserStart());
		console.log('s');

	}

	return (
		<div className='text-center mt-5'>
			<main className='form-signin w-25 m-auto'>
				<form onSubmit={loginHandler}>
					<img className='mb-2' src={icon} alt='' width='72' height='60' />
					<h1 className='h3 mb-3 fw-normal'>Please login</h1>

					<Input label={'Email address'} state={email} setState={setEmail} />
					<Input label={'Password'} type={'password'} state={password} setState={setPassword} />

					<button
						className='w-100 btn btn-lg btn-primary mt-2'
						type='submit'
						disabled={!email || !password ? true : false}
					>
						{isLoading ? 'Loading...' : 'Login'}
					</button>
				</form>
			</main>
		</div>
	)
}

export default Login
