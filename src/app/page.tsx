import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
	return (
		<div className="bg-gray-100 min-h-screen">
			<header className="bg-white shadow-md">
				<div className="container mx-auto px-4 py-6 flex items-center justify-between">
					<Image src="https://www.celira.dev/image/logo-celira.png" alt="Celira Logo" width={150} height={40} />
					<h1 className="text-3xl font-bold text-blue-700">Celira Wiki</h1>
				</div>
			</header>

			<main className="container mx-auto px-4 py-8">
				<section className="mb-12">
					<h2 className="text-2xl font-bold mb-6 text-blue-700">Team Presentation</h2>
					<div className="grid md:grid-cols-2 gap-8">
						<div className="bg-white p-6 rounded-lg shadow-md">
							<img
								src="https://media.licdn.com/dms/image/v2/D4D03AQHnGahpof07Kw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1695993853348?e=1735776000&v=beta&t=0kim0E12_CFacZD7cSry_c51KpE3aJAfcKHbg_6tfiA"
								alt="Ion Duiu"
								className="w-32 h-32 rounded-full mx-auto mb-4"
							/>
							<h3 className="text-xl font-semibold text-center">Ion Duiu</h3>
							<p className="text-center text-gray-600">Co-Founder, CEO</p>
							<p className="text-center text-blue-600 mt-2">ionduiu@celira.dev</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-md">
							<img
								src="https://media.licdn.com/dms/image/v2/D4D03AQHIKtd_Bk7p9g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1690832848959?e=1735776000&v=beta&t=WzKYHiWBP8gymAQcbgs5gX9Tms_44d1LmdE1UNwKFQE"
								alt="Andrei Dumitrescu"
								className="w-32 h-32 rounded-full mx-auto mb-4"
							/>
							<h3 className="text-xl font-semibold text-center">Andrei Dumitrescu</h3>
							<p className="text-center text-gray-600">Co-Founder, CTO</p>
							<p className="text-center text-blue-600 mt-2">andreidumitrescu@celira.dev</p>
						</div>
					</div>
				</section>

				<section className="mb-12">
					<h2 className="text-2xl font-bold mb-4 text-blue-700">Problem Identification</h2>
					<p className="text-gray-700">
						Website localization is often a costly, complex process, especially for single-language sites needing to go multilingual. For many
						developers and agencies, setting up internationalization frameworks involves significant time, technical challenges, and costs, often
						resulting in a cumbersome, inefficient workflow that also risks exposing sensitive data.
					</p>
				</section>

				<section className="mb-12">
					<h2 className="text-2xl font-bold mb-4 text-blue-700">Solution / Value Proposition</h2>
					<p className="text-gray-700">
						Celira automates website localization by creating translation-ready JSON files and integrates seamlessly into existing projects. With
						AI-powered parsing and a secure local processing approach, Celira ensures a high level of security while making the setup intuitive and
						cost-effective. Developers benefit from Celira's dashboard, enabling quick edits, previewing, and management of translations without
						exposing code or data online.
					</p>
				</section>

				<section className="mb-12">
					<h2 className="text-2xl font-bold mb-4 text-blue-700">Customer Segments</h2>
					<ul className="list-disc pl-6 text-gray-700">
						<li>
							<strong>Software Development Companies:</strong> Looking to streamline localization in client projects.
						</li>
						<li>
							<strong>Freelance Developers:</strong> Seeking cost-efficient ways to add multilingual support.
						</li>
						<li>
							<strong>Digital Agencies:</strong> Focused on reducing time-to-market for translated websites.
						</li>
					</ul>
				</section>

				<section className="mb-12">
					<h2 className="text-2xl font-bold mb-4 text-blue-700">Competition</h2>
					<ul className="list-disc pl-6 text-gray-700">
						<li>
							<strong>Phrase:</strong> Comprehensive localization management platform.
						</li>
						<li>
							<strong>Crowdin:</strong> Popular among larger teams, focusing on collaborative translation management.
						</li>
						<li>
							<strong>Localize:</strong> Specializes in real-time localization but can be costly for small projects.
						</li>
						<li>
							<strong>Weglot:</strong> User-friendly plugin for rapid translation but limited to on-the-fly edits rather than code-based
							solutions.
						</li>
					</ul>
				</section>

				<section className="mb-12">
					<h2 className="text-2xl font-bold mb-4 text-blue-700">Celira's Advantage</h2>
					<ul className="list-disc pl-6 text-gray-700">
						<li>
							<strong>Security:</strong> All code changes are executed locally, ensuring data security and compliance.
						</li>
						<li>
							<strong>Cost Efficiency:</strong> Reduces the cost of localization by over 90% compared to manual internationalization.
						</li>
						<li>
							<strong>User-Friendly Dashboard:</strong> Allows developers and clients to easily manage and modify translations in one place.
						</li>
						<li>
							<strong>Versatile:</strong> Compatible with any website, making it ideal for a broad range of project sizes and types.
						</li>
					</ul>
				</section>

				<section className="mb-12">
					<h2 className="text-2xl font-bold mb-4 text-blue-700">Key Metrics</h2>
					<ul className="list-disc pl-6 text-gray-700">
						<li>
							<strong>Customer Acquisition Rate:</strong> Tracking onboarding rates from target segments.
						</li>
						<li>
							<strong>Retention Rate:</strong> Percentage of customers continuing to use Celira after initial deployment.
						</li>
						<li>
							<strong>Monthly Active Users (MAU):</strong> Measures product engagement on a recurring basis.
						</li>
					</ul>
				</section>

				<section className="mb-12">
					<h2 className="text-2xl font-bold mb-4 text-blue-700">Cost Structure</h2>
					<ul className="list-disc pl-6 text-gray-700">
						<li>
							<strong>Infrastructure:</strong> Hosting, maintenance, and updates for Celira's dashboard.
						</li>
						<li>
							<strong>AI Development:</strong> Continuous improvements to parsing and localization accuracy.
						</li>
						<li>
							<strong>Sales & Marketing:</strong> Campaigns targeting developers and agencies.
						</li>
						<li>
							<strong>Customer Support:</strong> Ongoing assistance to ensure a smooth user experience.
						</li>
					</ul>
				</section>

				<section className="mb-12">
					<h2 className="text-2xl font-bold mb-4 text-blue-700">Revenue Streams</h2>
					<ul className="list-disc pl-6 text-gray-700">
						<li>
							<strong>Token-Based Pricing:</strong> Celira follows a Vercel-style model where users purchase tokens to access translation
							services. This flexible approach allows customers to pay based on usage, offering cost efficiency for small projects and scalability
							for larger ones.
						</li>
						<li>
							<strong>Enterprise Packages:</strong> Custom token bundles and additional support for teams with large or complex projects.
						</li>
					</ul>
				</section>
			</main>
		</div>
	);
}
