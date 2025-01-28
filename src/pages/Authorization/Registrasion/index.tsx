import React from 'react';
import { Route as RouteEnum } from 'routes/route.enum';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from 'config/firebase';
// Styles
import s from './index.module.scss';

export const Registrasion: React.FC = () => {
	const formik = useFormik({
		initialValues: {
			username: '',
			email: '',
			password: ''
		},
		onSubmit: async (values) => {
			try {
				const userCredits = await createUserWithEmailAndPassword(
					auth,
					values.email,
					values.password
				);

				const user = userCredits.user;

				await updateProfile(user, {
					displayName: values.username
				});
				console.log(values);
			} catch (err) {
				console.error(err);
			}
		}
	});

	return (
		<div className={s.registration}>
			<form className={s.registration__form} onSubmit={formik.handleSubmit}>
				<p className={s.registration__title}>Back to your digital life</p>
				<div className={s.registration__inputs}>
					<input
						placeholder="First Name"
						className={s.registration__input}
						type="text"
						name="username"
						value={formik.values.username}
						onChange={formik.handleChange}
					/>
					<input
						placeholder="Email"
						className={s.registration__input}
						type="email"
						name="email"
						value={formik.values.email}
						onChange={formik.handleChange}
					/>
					<input
						placeholder="Password"
						className={s.registration__input}
						type="password"
						name="password"
						value={formik.values.password}
						onChange={formik.handleChange}
					/>
				</div>
				<p>
					Already have an account?
					<Link to={RouteEnum.General} className={s.registration__signup}>
						{' '}
						Login
					</Link>
				</p>
				<div className={s.registration__button}>
					<button type="submit" className={s.registration__btn}>
						Create an account
					</button>
				</div>
			</form>
		</div>
	);
};
