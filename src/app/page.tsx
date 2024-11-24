"use client";
import { useState } from "react";
import Image from "next/image";

interface MilestonesState {
	milestone1: boolean;
	milestone2: boolean;
	milestone3: boolean;
	milestone4: boolean;
	milestone5: boolean;
}

export default function Home() {
	const [milestones, setMilestones] = useState<MilestonesState>({
		milestone1: true,
		milestone2: false,
		milestone3: false,
		milestone4: false,
		milestone5: false,
	});

	const toggleMilestone = (milestone: keyof MilestonesState) => {
		setMilestones({
			milestone1: milestone === "milestone1",
			milestone2: milestone === "milestone2",
			milestone3: milestone === "milestone3",
			milestone4: milestone === "milestone4",
			milestone5: milestone === "milestone5",
		});
	};

	return (
		<div className="bg-gray-100 min-h-screen flex">
			{/* Sidebar Navigation */}
			<aside className="w-64 bg-blue-700 text-white shadow-md">
				<div className="p-6">
					<h2 className="text-2xl font-bold mb-4">Milestones</h2>
					<ul className="space-y-2">
						<li>
							<button
								onClick={() => toggleMilestone("milestone1")}
								className="w-full text-left px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md"
							>
								Milestone 1
							</button>
						</li>
						<li>
							<button
								onClick={() => toggleMilestone("milestone2")}
								className="w-full text-left px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md"
							>
								Milestone 2
							</button>
						</li>
						<li>
							<button
								onClick={() => toggleMilestone("milestone3")}
								className="w-full text-left px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md"
							>
								Milestone 3
							</button>
						</li>
						<li>
							<button
								onClick={() => toggleMilestone("milestone4")}
								className="w-full text-left px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md"
							>
								Milestone 4
							</button>
						</li>
						<li>
							<button
								onClick={() => toggleMilestone("milestone5")}
								className="w-full text-left px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md"
							>
								Milestone 5
							</button>
						</li>
					</ul>
				</div>
			</aside>

			{/* Main Content */}
			<div className="flex-grow">
				<header className="bg-white shadow-md">
					<div className="container mx-auto px-4 py-6 flex items-center justify-between">
						<Image src="https://www.celira.dev/image/logo-celira.png" alt="Celira Logo" width={150} height={40} />
						<h1 className="text-3xl font-bold text-blue-700">Celira Wiki</h1>
					</div>
				</header>

				<main className="container mx-auto px-4 py-8">
					{/* Milestone 1 */}
					{milestones.milestone1 && (
						<>
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
									Website localization is often a costly, complex process, especially for single-language sites needing to go multilingual.
									For many developers and agencies, setting up internationalization frameworks involves significant time, technical
									challenges, and costs, often resulting in a cumbersome, inefficient workflow that also risks exposing sensitive data.
								</p>
							</section>

							<section className="mb-12">
								<h2 className="text-2xl font-bold mb-4 text-blue-700">Solution / Value Proposition</h2>
								<p className="text-gray-700">
									Celira automates website localization by creating translation-ready JSON files and integrates seamlessly into existing
									projects. With AI-powered parsing and a secure local processing approach, Celira ensures a high level of security while
									making the setup intuitive and cost-effective. Developers benefit from Celira's dashboard, enabling quick edits, previewing,
									and management of translations without exposing code or data online.
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
										<strong>Weglot:</strong> User-friendly plugin for rapid translation but limited to on-the-fly edits rather than
										code-based solutions.
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
										<strong>User-Friendly Dashboard:</strong> Allows developers and clients to easily manage and modify translations in one
										place.
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
										<strong>Token-Based Pricing:</strong> Celira follows a Vercel-style model where users purchase tokens to access
										translation services. This flexible approach allows customers to pay based on usage, offering cost efficiency for small
										projects and scalability for larger ones.
									</li>
									<li>
										<strong>Enterprise Packages:</strong> Custom token bundles and additional support for teams with large or complex
										projects.
									</li>
								</ul>
							</section>
						</>
					)}

					{/* Milestone 2 */}
					{milestones.milestone2 && (
						<>
							<section className="mb-12">
								<h2 className="text-2xl font-bold mb-6 text-blue-700">How We Identified the Problem</h2>
								<p className="text-gray-700 mb-4">
									The problem became apparent during discussions with developers and agencies managing multilingual projects. Common pain
									points included:
								</p>
								<ul className="list-disc pl-6 text-gray-700 mb-4">
									<li>The time-consuming and error-prone process of adding internationalization frameworks to single-language websites.</li>
									<li>
										High costs associated with manual localization and hiring translators or developers with expertise in i18n frameworks.
									</li>
									<li>Security concerns about exposing code and data to third-party localization platforms.</li>
								</ul>
								<p className="text-gray-700">
									By listening to industry professionals and observing market trends, we identified that many developers lacked efficient,
									secure, and affordable tools for localization.
								</p>
							</section>

							<section className="mb-12">
								<h2 className="text-2xl font-bold mb-6 text-blue-700">Proposed Solution for the Problem</h2>
								<p className="text-gray-700 mb-4">
									We envisioned Celira, a tool to automate the process of adding multilingual support to websites, offering:
								</p>
								<ul className="list-disc pl-6 text-gray-700 mb-4">
									<li>
										<strong>Secure, local processing:</strong> All code changes happen locally to ensure data privacy.
									</li>
									<li>
										<strong>AI-driven automation:</strong> Rapid generation of translation-ready JSON files.
									</li>
									<li>
										<strong>Intuitive dashboard:</strong> Allowing both developers and non-technical users (e.g., marketers) to manage and
										edit translations easily.
									</li>
								</ul>
								<p className="text-gray-700">
									This solution addresses the identified pain points by reducing costs, enhancing security, and simplifying the process.
								</p>
							</section>

							<section className="mb-12">
								<h2 className="text-2xl font-bold mb-6 text-blue-700">Plan for Customer Discovery</h2>
								<ul className="list-disc pl-6 text-gray-700 mb-4">
									<li>
										<strong>Identify customer segments:</strong> Developers, digital agencies, and e-commerce businesses.
									</li>
									<li>
										<strong>Reach out through multiple channels:</strong> Networking events (HowToWeb), focus groups, online forms, and
										landing pages.
									</li>
									<li>
										<strong>Gather data systematically:</strong> Use interviews, questionnaires, and analytics to collect actionable
										insights.
									</li>
								</ul>
							</section>

							<section className="mb-12">
								<h2 className="text-2xl font-bold mb-6 text-blue-700">Customer Discovery Process (In Detail)</h2>

								<h3 className="text-xl font-semibold mb-4 text-blue-700">Identifying Customer Segments</h3>
								<ul className="list-disc pl-6 text-gray-700 mb-4">
									<li>
										<strong>Primary Segment:</strong> Freelance developers and small-to-medium development agencies.
									</li>
									<li>
										<strong>Secondary Segment:</strong> E-commerce businesses expanding to international markets.
									</li>
								</ul>

								<h3 className="text-xl font-semibold mb-4 text-blue-700">Reaching Customers</h3>
								<ul className="list-disc pl-6 text-gray-700 mb-4">
									<li>
										<strong>Networking Events:</strong> Presented our concept at tech meetups like "Tech and Startups" and HowToWeb.
									</li>
									<li>
										<strong>Landing Page:</strong> Set up email collection forms for interested developers and agencies.
									</li>
									<li>
										<strong>Social Media:</strong> Engaged communities on platforms like Reddit and LinkedIn.
									</li>
								</ul>

								<h3 className="text-xl font-semibold mb-4 text-blue-700">Collecting Information</h3>

								<h4 className="text-lg font-semibold mb-2 text-blue-700">Face-to-Face Interviews:</h4>
								<p className="text-gray-700 mb-4">
									Attended industry events to meet potential users and gather direct feedback. Questions included:
								</p>
								<ul className="list-disc pl-6 text-gray-700 mb-4">
									<li>What challenges do you face when localizing websites?</li>
									<li>How much time and budget do you allocate to localization?</li>
									<li>What tools do you currently use, and what do you like/dislike about them?</li>
								</ul>

								<h4 className="text-lg font-semibold mb-2 text-blue-700">Online Questionnaires:</h4>
								<p className="text-gray-700 mb-4">Distributed surveys via email and developer forums. Questions included:</p>
								<ul className="list-disc pl-6 text-gray-700 mb-4">
									<li>Would you use an AI-powered tool for localization? Why or why not?</li>
									<li>How important is data security in localization tools?</li>
									<li>What price point would be acceptable for this service?</li>
								</ul>

								<h4 className="text-lg font-semibold mb-2 text-blue-700">Focus Groups:</h4>
								<p className="text-gray-700 mb-4">
									Organized small groups of developers to demo a prototype and provide feedback. Focused on usability, functionality, and
									perceived value.
								</p>

								<h3 className="text-xl font-semibold mb-4 text-blue-700">Findings</h3>
								<ul className="list-disc pl-6 text-gray-700 mb-4">
									<li>80% of developers found manual localization too costly and inefficient.</li>
									<li>60% cited data security as a top concern.</li>
									<li>
										Agencies were particularly interested in a tool that could integrate into their workflow without requiring extensive
										training.
									</li>
								</ul>
							</section>

							<section className="mb-12">
								<h2 className="text-2xl font-bold mb-6 text-blue-700">Impact on Product Development</h2>
								<p className="text-gray-700 mb-4">Based on customer feedback:</p>
								<ul className="list-disc pl-6 text-gray-700 mb-4">
									<li>
										<strong>Security Features:</strong> Ensured all operations were local to address security concerns.
									</li>
									<li>
										<strong>Dashboard Design:</strong> Simplified UI to accommodate non-technical users.
									</li>
									<li>
										<strong>Flexible Pricing:</strong> Adopted a token-based model to cater to varying usage levels.
									</li>
								</ul>
							</section>

							<section className="mb-12">
								<h2 className="text-2xl font-bold mb-6 text-blue-700">Readiness for Customer Validation Stage</h2>
								<p className="text-gray-700">We are ready to move to the Customer Validation stage because:</p>
								<ul className="list-disc pl-6 text-gray-700">
									<li>We have validated the problem through extensive interviews and surveys.</li>
									<li>Our prototype has received positive feedback, particularly from agencies and developers.</li>
									<li>The token-based pricing model aligns with customer expectations and budgets.</li>
								</ul>
							</section>
						</>
					)}

					{/* Milestone 3 */}
					{milestones.milestone3 && (
						<>
							<section className="mb-12">
								<h2 className="text-2xl font-bold mb-6 text-blue-700">Figma: </h2>
								<iframe
									className="w-full"
									height="500"
									src="https://embed.figma.com/design/cw6ZxVi3hBMz993P7Mv5HI/App?node-id=0-1&embed-host=share"
								></iframe>
							</section>

							<section className="mb-12">
								<h2 className="text-2xl font-bold mb-6 text-blue-700">Landing: </h2>
								<iframe className="w-full" height="700" src="https://celira.dev"></iframe>
							</section>
						</>
					)}

					{/* Milestone 4 */}
					{milestones.milestone4 && (
						<>
							<section className="mb-12">
								<h2 className="text-2xl font-bold mb-6 text-blue-700">User Persona</h2>
								<h3 className="text-xl font-semibold text-blue-700 mb-4">Main Persona: Freelance Developer</h3>
								<p className="text-gray-700 mb-4">
									<strong>Name:</strong> Alex Johnson
								</p>
								<p className="text-gray-700 mb-4">
									<strong>Age:</strong> 30
								</p>
								<p className="text-gray-700 mb-4">
									<strong>Role:</strong> Full-stack Developer
								</p>
								<p className="text-gray-700 mb-4">
									<strong>Needs:</strong>
								</p>
								<ul className="list-disc pl-6 text-gray-700 mb-4">
									<li>A cost-effective tool to add multilingual support.</li>
									<li>A secure platform to handle client projects.</li>
									<li>Intuitive UI to reduce setup time.</li>
								</ul>
								<p className="text-gray-700 mb-4">
									<strong>Pain Points:</strong>
								</p>
								<ul className="list-disc pl-6 text-gray-700 mb-4">
									<li>Struggles with complex i18n frameworks.</li>
									<li>Concerns about data privacy.</li>
									<li>Limited budget for tools.</li>
								</ul>
							</section>

							<section className="mb-12">
								<h2 className="text-2xl font-bold mb-6 text-blue-700">User Stories, Use Cases, and User Flows</h2>

								<h3 className="text-xl font-semibold text-blue-700 mb-4">User Story 1: Adding Multilingual Support</h3>
								<p className="text-gray-700 mb-4">
									<strong>As a developer:</strong> I want to automate the creation of translation files, so that I can save time and focus on
									development.
								</p>
								<h4 className="text-lg font-semibold text-blue-700 mb-2">Flow for Celira:</h4>
								<ul className="list-disc pl-6 text-gray-700 mb-4">
									<li>Upload a single-language project.</li>
									<li>Let Celira generate JSON translation files.</li>
									<li>Integrate the files into the project and test.</li>
								</ul>

								<h3 className="text-xl font-semibold text-blue-700 mb-4">User Story 2: Managing Translations</h3>
								<p className="text-gray-700 mb-4">
									<strong>As a marketer:</strong> I want to edit translations through a dashboard, so that I can optimize content without
									coding.
								</p>
								<h4 className="text-lg font-semibold text-blue-700 mb-2">Flow for Celira:</h4>
								<ul className="list-disc pl-6 text-gray-700 mb-4">
									<li>Access the Celira dashboard.</li>
									<li>Edit translations directly from the UI.</li>
									<li>Save changes and preview them instantly.</li>
								</ul>
							</section>

							<section className="mb-12">
								<h2 className="text-2xl font-bold mb-6 text-blue-700">Interviews</h2>

								<h3 className="text-xl font-semibold text-blue-700 mb-4">Interview 1: Freelance Developer</h3>
								<p className="text-gray-700 mb-4">
									<strong>Profile:</strong> Full-Stack Developer, Freelance
								</p>
								<p className="text-gray-700 mb-4">
									<strong>Key Insights:</strong>
								</p>
								<ul className="list-disc pl-6 text-gray-700 mb-4">
									<li>Time-saving: Alex spends 20–30% of project time on adding multilingual support manually.</li>
									<li>Preferred Tools: Has used Phrase and i18next but finds them complex and time-consuming.</li>
									<li>Security Concerns: Clients often request that sensitive data not leave the development environment.</li>
								</ul>
								<p className="text-gray-700 mb-4">
									<strong>Conclusion:</strong> Freelance developers prioritize tools that save time and integrate seamlessly into their
									workflow. Data security is a critical selling point, and emphasizing local processing in Celira will resonate strongly.
								</p>

								<h3 className="text-xl font-semibold text-blue-700 mb-4">Interview 2: Agency Owner</h3>
								<p className="text-gray-700 mb-4">
									<strong>Profile:</strong> Founder of Web Agency
								</p>
								<p className="text-gray-700 mb-4">
									<strong>Key Insights:</strong>
								</p>
								<ul className="list-disc pl-6 text-gray-700 mb-4">
									<li>
										Scalability: Lisa's team works on multiple localization projects simultaneously and struggles with scaling due to the
										high cost of current solutions.
									</li>
									<li>Client Management: Lisa wants a solution that allows her clients to preview and tweak translations directly.</li>
									<li>Pricing: Interested in a token-based pricing model, as it offers flexibility for small and large projects.</li>
								</ul>
								<p className="text-gray-700 mb-4">
									<strong>Conclusion:</strong> Agencies need a tool that supports collaboration, scales cost-effectively, and allows client
									involvement without requiring technical expertise. Celira’s dashboard and pricing structure align well with these needs.
								</p>

								<h3 className="text-xl font-semibold text-blue-700 mb-4">Interview 3: E-commerce Manager</h3>
								<p className="text-gray-700 mb-4">
									<strong>Profile:</strong> E-commerce Manager, Small Business Owner
								</p>
								<p className="text-gray-700 mb-4">
									<strong>Key Insights:</strong>
								</p>
								<ul className="list-disc pl-6 text-gray-700 mb-4">
									<li>
										Localization Challenges: Marco recently expanded his store internationally and struggled with integrating translations
										without breaking existing functionality.
									</li>
									<li>
										DIY Preferences: Prefers a tool that doesn’t require deep technical skills and can be used by non-technical team
										members.
									</li>
									<li>Budget Constraints: Looks for a solution priced lower than enterprise-grade localization tools.</li>
								</ul>
								<p className="text-gray-700 mb-4">
									<strong>Conclusion:</strong> Small e-commerce businesses value user-friendly, affordable solutions that don’t rely heavily
									on technical expertise. Highlighting Celira’s simplicity and affordability will appeal to this segment.
								</p>
							</section>

							<section className="mb-12">
								<h2 className="text-2xl font-bold mb-6 text-blue-700">Overall Conclusions</h2>
								<ul className="list-disc pl-6 text-gray-700 mb-4">
									<li>
										<strong>Time-Saving and Automation:</strong> All customer segments appreciate tools that reduce manual work and
										streamline localization.
									</li>
									<li>
										<strong>Security and Data Privacy:</strong> Local processing is a significant competitive advantage for developers and
										agencies.
									</li>
									<li>
										<strong>Client-Focused Features:</strong> Agencies and businesses want dashboards that allow easy editing and client
										collaboration.
									</li>
									<li>
										<strong>Flexible Pricing:</strong> Token-based pricing aligns well with customer expectations, offering affordability
										for small users and scalability for larger projects.
									</li>
								</ul>

								<p className="text-gray-500 italic">*Names and specific details have been changed to protect the privacy of interviewees.</p>
							</section>
						</>
					)}

					{/* Milestone 5 */}
					{milestones.milestone5 && (
						<>
							<section className="mb-12">
								<h2 className="text-2xl font-bold mb-6 text-blue-700">Klaviyo: </h2>
								<img src="/klavyio.jpeg" alt="Klaviyo" className="w-full" />
							</section>

							<section className="mb-12">
								<h2 className="text-2xl font-bold mb-6 text-blue-700">Hotjar: </h2>
								<img src="/hotjar.jpeg" alt="Hotjar" className="w-full" />
							</section>

							<section className="mb-12">
								<h2 className="text-2xl font-bold mb-6 text-blue-700">Analytics: </h2>
								<img src="/analytics.jpeg" alt="Analytics" className="w-full" />
							</section>

							<section className="mb-12">
								<h2 className="text-2xl font-bold mb-6 text-blue-700">Social media: </h2>
								<p>
									Our post can be found on our Linkedin page.{" "}
									<a href="https://www.linkedin.com/company/celira-dev/?viewAsMember=true" className="font-bold text-blue-700">
										Click here!
									</a>
								</p>
							</section>
						</>
					)}
				</main>
			</div>
		</div>
	);
}
