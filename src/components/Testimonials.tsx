import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const Testimonials = () => {
	const { ref, inView } = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	const [activeTestimonial, setActiveTestimonial] = useState(0);

	const testimonials = [
		{
			name: "Emily Bishop",
			role: "Business Owner",
			image: "👩‍💼",
			rating: 5,
			text: "Quick service, was able to get me in last minute for tire repairs and reasonable prices",
			service: "Tire Repair",
		},
		{
			name: "Ivann Cortez",
			role: "Heating Business Owner",
			image: "👨‍💼",
			rating: 5,
			text: "One Auto Body did an amazing job on my truck! I brought it in for a full detail and a tire change, and they went above and beyond. The truck came out looking super clean, and the service was fast and professional. The staff were really friendly and easy to talk to. Highly recommend them — I’ll definitely be coming back!",
			service: "Premium Car Wash",
		},
		{
			name: "Cora Peters",
			role: "Marketing Manager",
			image: "👩‍🎨",
			rating: 5,
			text: "Worked after hours to ensure my car was good to go! Found issues that other mechanics did not catch or misdiagnosed. So glad to have my car back running smoothly and only making noises that a car should make. 100% recommended The mechanics here!",
			service: "Brakes Repair",
		},
		{
			name: "John Rice",
			role: "Truck Driving Instructor",
			image: "👨‍💼",
			rating: 5,
			text: "I have gotten a very good price for my tires and very good service. I will continue to bring my vehicles here and tell all my family and friends. Highly recommended.*****",
			service: "New Tires Installation",
		},
		{
			name: "Darren Dyck",
			role: "Doctor",
			image: "👩‍⚕️",
			rating: 5,
			text: "My vehicle broke down on December 23rd an hour outside of Saskatoon. After calling a number of shops that all told me they wouldn't be able to look at my vehicle until after Christmas, I called Akaal Autohub. They told me if I got the vehicle towed to their shop before 11 am on December 24th, they'd have a look. I did that, and they worked until 5 pm on CHRISTMAS EVE fixing my vehicle. They were supposed to close at 3 pm. These guys are amazing. They went way above and beyond.",
			service: "Engine Mechanical Repair",
		},
		{
			name: "George Lemaigre",
			role: "Business Owner",
			image: "👨‍🔧",
			rating: 5,
			text: "The owner and his crew were great. Had my truck worked on at this location, and the results were great! I will definitely come back",
			service: "Lift Kit Install",
		},
	];

	const nextTestimonial = () => {
		setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
	};

	const prevTestimonial = () => {
		setActiveTestimonial(
			(prev) => (prev - 1 + testimonials.length) % testimonials.length,
		);
	};

	return (
		<section
			id="testimonials"
			className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden"
		>
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-3">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage: `radial-gradient(circle at 2px 2px, #5B051F 1px, transparent 0)`,
						backgroundSize: "120px 120px",
					}}
				/>
			</div>

			<div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 max-w-7xl">
				<motion.div
					ref={ref}
					className="text-center mb-16 md:mb-20"
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
				>
					<motion.div
						className="inline-flex items-center px-6 py-3 bg-[#5B051F]/8 rounded-full text-[#5B051F] text-sm font-semibold mb-8 border border-[#5B051F]/10"
						initial={{ opacity: 0, y: 20 }}
						animate={inView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.8, delay: 0.1 }}
					>
						<span className="w-2 h-2 bg-[#5B051F] rounded-full mr-3 animate-pulse"></span>
						Customer Reviews
					</motion.div>

					<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
						What Our{" "}
						<span className="bg-gradient-to-r from-[#5B051F] to-red-600 bg-clip-text text-transparent imperial">
							Customers Say
						</span>
					</h2>
					<p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
						Don't just take our word for it. Here's what our
						satisfied customers have to say about their experience
						with Akaal Autohub.
					</p>
				</motion.div>

				{/* Main Testimonial Display */}
				<motion.div
					className="max-w-5xl mx-auto mb-12 md:mb-16"
					initial={{ opacity: 0, scale: 0.95 }}
					animate={inView ? { opacity: 1, scale: 1 } : {}}
					transition={{ duration: 0.8, delay: 0.3 }}
				>
					<div className="bg-white rounded-3xl md:rounded-[2rem] shadow-2xl p-8 md:p-12 lg:p-16 relative overflow-hidden border border-gray-100">
						{/* Background decoration */}
						<div className="absolute top-0 right-0 w-32 h-32 bg-[#5B051F]/5 rounded-full transform translate-x-16 -translate-y-16"></div>
						<div className="absolute bottom-0 left-0 w-24 h-24 bg-red-500/5 rounded-full transform -translate-x-12 translate-y-12"></div>

						<div className="relative z-10">
							{/* Quote icon */}
							<div className="text-5xl md:text-6xl text-[#5B051F]/20 mb-6">
								"
							</div>

							{/* Testimonial content */}
							<motion.div
								key={activeTestimonial}
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5 }}
							>
								<p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 md:mb-10">
									{testimonials[activeTestimonial].text}
								</p>

								<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
									<div className="flex items-center space-x-4">
										<div className="text-3xl md:text-4xl">
											{
												testimonials[activeTestimonial]
													.image
											}
										</div>
										<div>
											<h4 className="text-lg md:text-xl font-bold text-gray-900">
												{
													testimonials[
														activeTestimonial
													].name
												}
											</h4>
											<p className="text-gray-600 text-sm md:text-base">
												{
													testimonials[
														activeTestimonial
													].role
												}
											</p>
											<p className="text-sm md:text-base text-[#5B051F] font-medium">
												{
													testimonials[
														activeTestimonial
													].service
												}
											</p>
										</div>
									</div>

									{/* Star rating */}
									<div className="flex space-x-1">
										{[
											...Array(
												testimonials[activeTestimonial]
													.rating,
											),
										].map((_, i) => (
											<span
												key={i}
												className="text-yellow-400 text-xl md:text-2xl"
											>
												⭐
											</span>
										))}
									</div>
								</div>
							</motion.div>
						</div>
					</div>
				</motion.div>

				{/* Navigation Controls */}
				<div className="flex items-center justify-center space-x-6 mb-12 md:mb-16">
					<motion.button
						onClick={prevTestimonial}
						className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-600 hover:text-[#5B051F] hover:border-[#5B051F]/20 transition-all"
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						<svg
							className="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M15 19l-7-7 7-7"
							/>
						</svg>
					</motion.button>

					{/* Dots indicator */}
					<div className="flex space-x-3">
						{testimonials.map((_, index) => (
							<button
								key={index}
								onClick={() => setActiveTestimonial(index)}
								className={`h-3 rounded-full transition-all duration-300 ${
									index === activeTestimonial
										? "bg-[#5B051F] w-8"
										: "bg-gray-300 hover:bg-gray-400 w-3"
								}`}
							/>
						))}
					</div>

					<motion.button
						onClick={nextTestimonial}
						className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-600 hover:text-[#5B051F] hover:border-[#5B051F]/20 transition-all"
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						<svg
							className="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</motion.button>
				</div>

				{/* Testimonial Grid */}
				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 md:mb-20"
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8, delay: 0.6 }}
				>
					{testimonials.slice(0, 3).map((testimonial, index) => (
						<motion.div
							key={index}
							className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
							whileHover={{
								y: -8,
								transition: { duration: 0.3 },
							}}
						>
							<div className="flex items-center space-x-4 mb-6">
								<div className="text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-300">
									{testimonial.image}
								</div>
								<div>
									<h5 className="font-bold text-gray-900 text-base md:text-lg">
										{testimonial.name}
									</h5>
									<p className="text-sm md:text-base text-gray-600">
										{testimonial.role}
									</p>
								</div>
							</div>
							<p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
								{testimonial.text.substring(0, 120)}...
							</p>
							<div className="flex justify-between items-center pt-4 border-t border-gray-100">
								<span className="text-xs md:text-sm text-[#5B051F] font-medium">
									{testimonial.service}
								</span>
								<div className="flex space-x-1">
									{[...Array(testimonial.rating)].map(
										(_, i) => (
											<span
												key={i}
												className="text-yellow-400 text-sm md:text-base"
											>
												⭐
											</span>
										),
									)}
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* Enhanced Call to Action */}
				<motion.div
					className="text-center"
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8, delay: 0.8 }}
				>
					<div className="bg-gradient-to-br from-[#5B051F] via-[#5B051F] to-red-600 rounded-3xl md:rounded-[2rem] p-8 md:p-12 lg:p-16 text-white relative overflow-hidden">
						{/* Background decorations */}
						<div className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full"></div>
						<div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full"></div>

						<div className="relative z-10">
							<div className="text-4xl md:text-5xl mb-6">🎉</div>
							<h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
								Ready to Join Our Happy Customers?
							</h3>
							<p className="text-white/80 text-lg md:text-xl mb-8 md:mb-10 max-w-2xl mx-auto">
								Experience the difference that professional car
								care can make. Book your service today and see
								why thousands trust us.
							</p>

							<div className="flex justify-center">
								<motion.a
									href="tel:(639) 637-0009"
									className="bg-white text-[#5B051F] px-8 md:px-12 py-4 md:py-6 rounded-2xl font-bold text-base md:text-lg hover:shadow-xl transition-all cursor-pointer inline-flex items-center gap-3"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									<svg
										className="w-6 h-6"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
										/>
									</svg>
									Call Us Now: (639) 637-0009
								</motion.a>
							</div>
						</div>
					</div>
				</motion.div>
			</div>

			{/* Floating Elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<motion.div
					className="absolute top-40 right-16 w-12 h-12 bg-[#5B051F]/5 rounded-full"
					animate={{
						y: [0, -30, 0],
						scale: [1, 1.4, 1],
					}}
					transition={{
						duration: 14,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
				<motion.div
					className="absolute bottom-40 left-20 w-8 h-8 bg-red-500/10 rounded-full"
					animate={{
						x: [0, 25, 0],
						y: [0, -15, 0],
					}}
					transition={{
						duration: 16,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
			</div>
		</section>
	);
};

export default Testimonials;
