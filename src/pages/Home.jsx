import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Background from "../components/Background";
import morshed from '../assets/Morshed.jpg'
import resume from "../assets/Morshed-Resume.pdf";
const Home = () => {
  
	return (
		<>
			<section>
				<div className="absolute top-0 flex flex-row justify-center items-center w-full h-full bg-transparent z-30 px-6 py-12 md:px-12 text-center lg:text-left">
					<div className="container mx-auto xl:px-32">
						<div className="grid lg:grid-cols-2 gap-12 items-center">
							<div className="mt-12 lg:mt-0">
								<motion.div
									initial={{ x: -100, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{
										type: "spring",
										stiffness: 100,
									}}>
									<h1 className="text-5xl text-zinc-900 dark:text-zinc-50 md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
										I&apos;m S M Morshed
										<br />I am a
										<span className="text-purple-600 hover:text-pink-500 transition duration-150 ease-in-out">
											<TypeAnimation
												sequence={[
													"Web Developer",
													2000,
													"Front-end Developer",
													2000,
													"MERN-stack Developer",
													2000,
												]}
												wrapper="span"
												cursor={false}
												repeat={Infinity}
												className="ml-3 text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight"
											/>
										</span>
									</h1>
								</motion.div>
								<motion.div
									initial={{ y: 100, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{
										type: "spring",
										stiffness: 100,
										delay: 0.5,
									}}>
									<Link
										className="inline-block px-7 py-3 mr-2 border-2 border-purple-600 bg-purple-600 text-zinc-50 font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-zinc-50 hover:text-pink-500 hover:shadow-lg hover:border-pink-500 focus:bg-zinc-50 focus:text-pink-500 focus:border-pink-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-zinc-50 active:shadow-lg transition duration-150 ease-in-out"
										to={resume}
										role="button"
										aria-label="Resume view button"
										locale={false}
										target="_blank"
										rel="noopener noreferrer">
										RESUME
									</Link>
									<Link
										className="inline-block px-7 py-3 mr-2 bg-transparent border-2 border-purple-600 bg-zinc-50 text-purple-600 font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-pink-500 hover:shadow-lg hover:text-zinc-50 hover:border-pink-500 focus:bg-pink-500 focus:border-pink-500 focus:text-zinc-50 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-500 active:shadow-lg transition duration-150 ease-in-out"
										to="/showcase"
										role="button"
										aria-label="Showcase link button">
										Showcase
									</Link>
								</motion.div>
							</div>
							<div className="mb-12 lg:mb-0 flex flex-col justify-center items-center">
								<motion.div
									initial={{ x: 100, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{
										type: "spring",
										stiffness: 100,
										delay: 1,
									}}>
									<img
										src={morshed}
										priority
										alt="S M Morshed"
										width={400}
										height={400}
										className="dark:grayscale rounded-full mx-auto w-1/2 h-1/2 md:w-2/3 md:h-2/3 shadow-2xl"
									/>
								</motion.div>
							</div>
						</div>
					</div>
				</div>
				<Background />
			</section>
		</>
	);
};

export default Home;
