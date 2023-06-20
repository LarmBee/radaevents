import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
	const [showMessage, setShowMessage] = useState(false);

	const buttonClick = () => {
		setShowMessage(true);
	};

	return (
		<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm mb-3">
				<div className="text-center mb-7">
					<h1 className="text-2xl font-bold align-middle ">
						Forgot Password ?
					</h1>
					<h3 className="text-xl">
						No worries,we'll send you reset instructions
					</h3>
				</div>
				<div>
					<form>
						<label className="mb-6">Enter your email</label>
						<div className="mb-4">
							<input
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
								placeholder="Uname@email.com"
								id="email"
								name="email"
								type="email"
								autoComplete="email"
								required
							/>
						</div>
						{showMessage ? (
							<div className="mb-3 bg-amber-100 rounded p-2">
								<p>
									Reset link has been sent to your email .Follow link and
									instructions to reset your password and access your account
								</p>
							</div>
						) : null}

						<button
							className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							onClick={buttonClick}
                            type="submit"
						>
							Reset Password
						</button>
						<div className="mt-10 text-center text-sm text-gray-500">
							<Link to="/">Back to Login</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ForgotPassword;
