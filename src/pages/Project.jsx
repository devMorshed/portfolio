import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Heading from "../components/Heading";
import portfolioData from "../assets/portfolioData";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaGithub, FaLink } from "react-icons/fa";

const Project = () => {
	const isBrowser = () => typeof window !== "undefined";

	useEffect(() => {
		if (!isBrowser()) return;
		document.querySelector("body").scrollTo(0, 0);
	}, []);

	const param = useParams();
	const {
		title,
		imageUrl,
		alt,
		description,
		client,
		server,
		to,
		tags,
		images,
		features,
		technologies,
	} = portfolioData.find((project) => project.title === param.id);

	const [currentIndex, setCurrentIndex] = useState(0);

	const nextImage = () => {
		setCurrentIndex((currentIndex + 1) % images.length);
	};

	const prevImage = () => {
		setCurrentIndex((currentIndex - 1 + images.length) % images.length);
	};


	return (
		<>
			<section>
				<Heading title={title} delay={0.5} />
				<motion.div
					initial={{ x: -100, opacity: 0, duration: 1 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
					className="w-full max-w-screen-xl p-4 mx-auto">
					{/* Imagae Carousal Start  */}
					<div className="w-11/12 max-w-4xl h-72 sm:h-96 md:h-[450px] lg:h-[520px] mx-auto mb-10">
						<motion.img
							className="w-full h-full object-fill rounded shadow-lg aspect-auto"
							key={currentIndex}
							src={images[currentIndex]}
							alt={`${title} Images`}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5 }}
							style={{ maxWidth: "100%" }}
						/>
						<div className="relative bottom-10 w-11/12 mx-auto">
							<button
								className="bg-white p-2 rounded-full absolute left-0"
								hidden={currentIndex === 0}
								onClick={prevImage}>
								<FaArrowLeft />
							</button>
							<button
								className="bg-white p-2 rounded-full absolute right-0 "
								hidden={currentIndex === 3}
								onClick={nextImage}>
								<FaArrowRight />
							</button>
						</div>
					</div>
					{/* Imagae Carousal EEnds  */}
				</motion.div>
				<motion.div
					initial={{ x: -100, opacity: 0, duration: 1 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{
						type: "spring",
						stiffness: 100,
						delay: 0.75,
					}}>
					<div className="mx-auto w-screen p-4 flex items-center text-center justify-center">
						<p className="text-zinc-800 dark:text-zinc-50 w-11/12 text-center font-medium">
							{description}
						</p>
					</div>
				</motion.div>
				<motion.div
					initial={{ y: 100, opacity: 0, duration: 1 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ type: "spring", stiffness: 100, delay: 1 }}
					className="w-full max-w-4xl flex flex-col md:flex-row text-center mx-auto my-20">
					<div className="flex flex-col prose p-6 dark:prose-invert text-zinc-800 dark:text-zinc-50 ">
						<p className="mb-4 mx-auto p-2 border w-40 border-purple-600 rounded-sm">
							Features:
						</p>

						<ul className="font-light text-start w-10/12 mx-auto list-decimal">
							{features?.map((item, index) => (
								<li key={index}> {item} </li>
							))}
						</ul>
					</div>

					<div className="flex flex-col prose p-6 dark:prose-invert text-zinc-800 dark:text-zinc-50 ">
						<p className="mb-4 mx-auto text-center p-2 border w-40 border-purple-600 rounded-sm">
							Technologies:
						</p>

						<ul className="font-light text-start w-10/12 mx-auto list-decimal">
							{technologies?.map((item, index) => (
								<li key={index}> {item} </li>
							))}
						</ul>
					</div>
				</motion.div>
				<div className="flex flex-row justify-center items-center w-full my-10">
					<div className="inline-flex gap-4 px-6 pt-4 pb-3 text-xl">
						<Link
							to={client}
							target="_blank"
							aria-label="S M Morshed | Project Repository Link"
							className="text-zinc-800 dark:text-zinc-50 inline-flex gap-1 items-center font-medium text-primary-600 hover:text-purple-600 dark:hover:text-purple-600 transition duration-300 ease-in-out">
							<FaGithub className="ml-5" /> Client
						</Link>

						<Link
							to={server && server}
							target="_blank"
							aria-label="S M Morshed | Project Repository Link"
							className="text-zinc-800 dark:text-zinc-50 inline-flex gap-1 items-center font-medium text-primary-600 hover:text-purple-600 dark:hover:text-purple-600 transition duration-300 ease-in-out">
							<FaGithub className="ml-5" /> Server
						</Link>

						<Link
							to={to}
							target={to !== "#" ? "_blank" : null}
							aria-label="S M Morshed | Project View Live Link"
							className="text-zinc-800 dark:text-zinc-50 inline-flex gap-1 items-center font-medium text-primary-600 hover:text-purple-600 dark:hover:text-purple-600 transition duration-300 ease-in-out">
							<FaLink className="ml-5" /> Site
						</Link>
					</div>
				</div>
			</section>
		</>
	);
};

export default Project;
