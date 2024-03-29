import { motion } from "framer-motion";

const Heading = ({ title, paragraph, delay }) => {
	return (
		<motion.div
			initial={{ y: 100, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			transition={{
				type: "spring",
				stiffness: 100,
				delay: delay ? delay : 0,
			}}
			className="px-6 mx-auto text-center my-20 relative z-30">
			<h1 className="mb-12 text-5xl md:text-6xl font-extrabold leading-none tracking-tight text-zinc-900 dark:text-zinc-50">
				{title}
			</h1>
			{paragraph ? (
				<motion.div
					initial={{ y: -100, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{
						type: "spring",
						stiffness: 100,
						delay: delay ? delay : 0.5,
					}}>
					<p className="font-light text-zinc-800 text-xl dark:text-zinc-400">
						{paragraph}
					</p>
				</motion.div>
			) : (
				""
			)}
		</motion.div>
	);
};

export default Heading;
