import React from 'react';
import { auth } from 'config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { Route as RouteEnum } from 'routes/route.enum';
import { useFormik } from 'formik';
// Styles
import s from './index.module.scss';

export const Login: React.FC = () => {
	const formik = useFormik({
		initialValues: {
			email: '',
			password: ''
		},
		onSubmit: async (values) => {
			try {
				const userCredits = await signInWithEmailAndPassword(
					auth,
					values.email,
					values.password
				);
				console.log(userCredits.user);
			} catch (err) {
				console.error(err);
			}
		}
	});

	return (
		<div className={s.login}>
			<form className={s.login__form} onSubmit={formik.handleSubmit}>
				<p className={s.login__title}>Back to your digital life</p>
				<div className={s.login__inputs}>
					<input
						placeholder="Email"
						className={s.login__input}
						type="email"
						name="email"
						value={formik.values.email}
						onChange={formik.handleChange}
					/>
					<input
						placeholder="Password"
						className={s.login__input}
						type="password"
						name="password"
						value={formik.values.password}
						onChange={formik.handleChange}
					/>
				</div>
				<p>
					Don’t have an account?{' '}
					<Link to={RouteEnum.Registration} className={s.login__signup}>
						{' '}
						Sign up
					</Link>
				</p>
				<div className={s.login__button}>
					<button type="submit" className={s.login__btn}>
						Log in
					</button>
				</div>
			</form>
		</div>
	);
};
