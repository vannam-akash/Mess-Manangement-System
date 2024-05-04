import MainNavbar from "components/Navbars/MainNavbar.js";
import MainFooter from "components/Footers/MainFooter.js";
import React, { useEffect, useRef } from "react";
import styles from "./Error.module.css"
import { Link } from "react-router-dom";



const Error = () => {
	return (
		<>

		<MainNavbar />

		<section className="section section-shaped section-lg">
        <div className="shape shape-style-1 bg-gradient-primary">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

			{/* <section className="flex items-center h-full p-16 bg-gray-900 text-gray-100">
				<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
					<div className="max-w-md text-center">
						<h2 className="mb-8 font-extrabold text-9xl text-gray-600">
							<span className="sr-only">Error</span><h1>404</h1>
						</h2>
						<p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
						<p className="mt-4 mb-8 text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
						<a rel="noopener noreferrer" href="http://localhost:3000/" className="px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900">Back to homepage</a>
					</div>
				</div>
			</section> */}

			<section className={styles.msg}>
				<h1>ERROR!</h1>
				<div className={styles.msg}>
				<p>Sorry, we couldn't find this page.</p>
				<p>But dont worry, you can find plenty of other things on our homepage.</p>
				<Link  to="/">Back to homepage</Link>
				</div>
			</section>

			

			</section>
			<MainFooter />
		</>)
}
export default Error;

