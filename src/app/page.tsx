"use client";
import { useState } from "react";
import Image from "next/image";

interface MilestonesState {
	milestone1: boolean;
	milestone2: boolean;
	milestone3: boolean;
	milestone4: boolean;
	milestone5: boolean;
	milestone6: boolean;
	milestone7: boolean;
	milestone8: boolean;
}

export default function Home() {
	const [milestones, setMilestones] = useState<MilestonesState>({
		milestone1: true,
		milestone2: false,
		milestone3: false,
		milestone4: false,
		milestone5: false,
		milestone6: false,
		milestone7: false,
		milestone8: false,
	});

	const toggleMilestone = (milestone: keyof MilestonesState) => {
		setMilestones({
			milestone1: milestone === "milestone1",
			milestone2: milestone === "milestone2",
			milestone3: milestone === "milestone3",
			milestone4: milestone === "milestone4",
			milestone5: milestone === "milestone5",
			milestone6: milestone === "milestone6",
			milestone7: milestone === "milestone7",
			milestone8: milestone === "milestone8",
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
						<li>
							<button
								onClick={() => toggleMilestone("milestone6")}
								className="w-full text-left px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md"
							>
								Milestone 6
							</button>
						</li>
						<li>
							<button
								onClick={() => toggleMilestone("milestone7")}
								className="w-full text-left px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md"
							>
								Milestone 7
							</button>
						</li>
						<li>
							<button
								onClick={() => toggleMilestone("milestone8")}
								className="w-full text-left px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md"
							>
								Milestone 8
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
										<img src="/ionut.jpeg" alt="Ion Duiu" className="w-32 h-32 rounded-full mx-auto mb-4" />
										<h3 className="text-xl font-semibold text-center text-gray-700">Ion Duiu</h3>
										<p className="text-center text-gray-600">Co-Founder, CEO</p>
										<p className="text-center text-blue-600 mt-2">ionduiu@celira.dev</p>
									</div>
									<div className="bg-white p-6 rounded-lg shadow-md">
										<img src="/andrei.jpeg" alt="Andrei Dumitrescu" className="w-32 h-32 rounded-full mx-auto mb-4" />
										<h3 className="text-xl font-semibold text-center text-gray-700">Andrei Dumitrescu</h3>
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
								<p className="text-gray-700 mb-4">
									Our post can be found on our Linkedin page.{" "}
									<a href="https://www.linkedin.com/company/celira-dev/?viewAsMember=true" className="font-bold text-blue-700">
										Click here!
									</a>
								</p>
							</section>
						</>
					)}

					{/* Milestone 6 */}
					{milestones.milestone6 && (
						<>
							<section className="mb-12">
								<h2 className="text-2xl font-bold mb-6 text-blue-700">Market Analysis for Celira</h2>
								<p className="text-gray-700">
									Conducting a comprehensive market analysis for Celira involves evaluating the website localization services market,
									understanding the competitive landscape, and projecting potential market share and revenue over the next five years.
								</p>
							</section>

							<section className="mb-12">
								<h2 className="text-2xl font-bold mb-6 text-blue-700">1. Target Market Size and Sub-Markets</h2>
								<p className="text-gray-700 mb-4">
									The global website localization services market was valued at approximately <strong>USD 5.3 million in 2022</strong> and is
									projected to reach <strong>USD 8.9 million by 2033</strong>, exhibiting a compound annual growth rate (CAGR) of 6.8% from
									2023 to 2033.{" "}
									<a
										href="https://www.regionalresearchreports.com/industry-reports/website-localization-services-market/BS-6903?utm_source=chatgpt.com"
										className="text-blue-600 underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										(REGIONAL RESEARCH REPORTS)
									</a>
								</p>

								<h3 className="text-xl font-semibold text-blue-700 mb-4">Sub-Markets:</h3>
								<ul className="list-disc pl-6 text-gray-700 mb-4">
									<li>
										<strong>Automatic Website Localization Software:</strong> Valued at <strong>USD 1,939.5 million in 2023</strong>,
										expected to reach <strong>USD 3,158.2 million by 2030</strong>, with a CAGR of 7.5%.{" "}
										<a
											href="https://www.verifiedmarketreports.com/product/automatic-website-localization-software-market/?utm_source=chatgpt.com"
											className="text-blue-600 underline"
											target="_blank"
											rel="noopener noreferrer"
										>
											(VERIFIED MARKET REPORTS)
										</a>
									</li>
									<li>
										<strong>Software Localization Market:</strong> Valued at <strong>USD 5.9 billion in 2022</strong>, projected to reach{" "}
										<strong>USD 15.6 billion by 2032</strong>, growing at a CAGR of 10.6%.{" "}
										<a
											href="https://www.alliedmarketresearch.com/software-localization-market-A107562?utm_source=chatgpt.com"
											className="text-blue-600 underline"
											target="_blank"
											rel="noopener noreferrer"
										>
											(ALLIED MARKET RESEARCH)
										</a>
									</li>
								</ul>
							</section>

							<section className="mb-12">
								<h2 className="text-2xl font-bold mb-6 text-blue-700">2. Number of Competitors in the Market</h2>
								<p className="text-gray-700">
									The website localization services market comprises numerous players, including both established companies and emerging
									startups. Key competitors include:
								</p>
								<ul className="list-disc pl-6 text-gray-700 mb-4">
									<li>Weglot</li>
									<li>Lokalise</li>
									<li>Smartcat</li>
									<li>Translated</li>
									<li>Gengo</li>
									<li>RWS Moravia</li>
									<li>Morningside Translations</li>
									<li>AMPLEXOR International</li>
									<li>Acclaro</li>
									<li>applingua</li>
									<li>Argos Multilingual</li>
									<li>Day Translations</li>
								</ul>
								<p className="text-gray-700">
									<a
										href="https://www.cognitivemarketresearch.com"
										className="text-blue-600 underline"
										target="_blank"
										rel="noopener noreferrer"
									>
										(COGNITIVE MARKET RESEARCH)
									</a>
								</p>
							</section>

							<section className="mb-12">
								<h2 className="text-2xl font-bold mb-6 text-blue-700">3. Competition and Market Share</h2>
								<p className="text-gray-700">
									While specific market share data for each competitor is limited, the market is characterized by a mix of large enterprises
									and specialized service providers. The presence of numerous competitors indicates a fragmented market with no single
									dominant player, suggesting opportunities for new entrants like Celira to capture market share by offering innovative
									solutions.
								</p>
							</section>

							<section className="mb-12">
								<h2 className="text-2xl font-bold mb-6 text-blue-700">4. Estimated Market Share for Celira (Years 1-5)</h2>
								<ul className="list-disc pl-6 text-gray-700 mb-4">
									<li>
										<strong>Year 1:</strong> 0.5% of the global market
									</li>
									<li>
										<strong>Year 2:</strong> 1.0%
									</li>
									<li>
										<strong>Year 3:</strong> 1.5%
									</li>
									<li>
										<strong>Year 4:</strong> 2.0%
									</li>
									<li>
										<strong>Year 5:</strong> 2.5%
									</li>
								</ul>
							</section>

							<section className="mb-12">
								<h2 className="text-2xl font-bold mb-6 text-blue-700">5. Total Market Value and Celira's Revenue Projections</h2>
								<ul className="list-disc pl-6 text-gray-700 mb-4">
									<li>
										<strong>Year 1:</strong> Total Market Value: USD 5.6 million, Celira's Revenue: USD 28,000
									</li>
									<li>
										<strong>Year 2:</strong> Total Market Value: USD 6.0 million, Celira's Revenue: USD 60,000
									</li>
									<li>
										<strong>Year 3:</strong> Total Market Value: USD 6.4 million, Celira's Revenue: USD 96,000
									</li>
									<li>
										<strong>Year 4:</strong> Total Market Value: USD 6.8 million, Celira's Revenue: USD 136,000
									</li>
									<li>
										<strong>Year 5:</strong> Total Market Value: USD 7.3 million, Celira's Revenue: USD 182,500
									</li>
								</ul>
							</section>

							<section className="mb-12">
								<h2 className="text-2xl font-bold mb-6 text-blue-700">6. Profitability Analysis</h2>
								<p className="text-gray-700 mb-4">
									Considering the projected revenue growth and the increasing demand for website localization services, Celira has the
									potential to achieve profitability within the first few years of operation. By capturing a modest market share and
									leveraging the expanding market size, Celira can establish a sustainable business model with increasing revenues over time.
								</p>
							</section>

							<section className="mb-12">
								<h2 className="text-2xl font-bold mb-6 text-blue-700">Conclusion</h2>
								<p className="text-gray-700">
									The website localization services market presents a growing opportunity for Celira. With a strategic approach to capturing
									market share and meeting the evolving needs of businesses seeking localization solutions, Celira is well-positioned to
									achieve profitability and contribute to the industry's expansion in the coming years.
								</p>
							</section>
						</>
					)}

					{/* Milestone 7 */}
					{milestones.milestone7 && (
						<>
							<section className="mb-12">
								<h2 className="text-2xl font-bold mb-6 text-blue-700">Motivating the MVP Features Based on Research</h2>

								<section className="mb-8">
									<h3 className="text-xl font-semibold text-blue-700 mb-4">1. Local Script for Code Modification and JSON File Extraction</h3>
									<h4 className="text-lg font-semibold text-blue-700 mb-2">Why it’s included:</h4>
									<ul className="list-disc pl-6 text-gray-700 mb-4">
										<li>
											<strong>Customer Pain Point:</strong> Based on interviews, developers expressed concerns about the security of
											existing localization tools that operate on cloud-based platforms. They want a solution that ensures sensitive data
											and code remain within their local environment.
										</li>
										<li>
											<strong>Competitive Advantage:</strong> Offering a local script directly addresses the security concerns highlighted
											in research, making Celira stand out among competitors like Phrase and Weglot that rely on cloud-based solutions.
										</li>
										<li>
											<strong>Efficiency:</strong> Automating the generation of JSON files saves significant time for developers, aligning
											with the market demand for streamlined localization workflows.
										</li>
									</ul>
									<h4 className="text-lg font-semibold text-blue-700 mb-2">How it aligns with findings:</h4>
									<ul className="list-disc pl-6 text-gray-700 mb-4">
										<li>
											Freelance developers and agencies repeatedly emphasized the need for a secure, efficient way to set up multilingual
											support without exposing data to third-party servers.
										</li>
										<li>
											By enabling local processing, Celira appeals to both small-scale developers and agencies managing sensitive
											projects.
										</li>
									</ul>
								</section>

								<section className="mb-8">
									<h3 className="text-xl font-semibold text-blue-700 mb-4">2. Ability to Update Translations by the User</h3>
									<h4 className="text-lg font-semibold text-blue-700 mb-2">Why it’s included:</h4>
									<ul className="list-disc pl-6 text-gray-700 mb-4">
										<li>
											<strong>Customer Need:</strong> Agencies and non-technical users (e.g., marketers) want the ability to edit
											translations without needing to involve developers. This was a recurring theme in focus group feedback.
										</li>
										<li>
											<strong>User Empowerment:</strong> Providing a user-friendly interface to update translations ensures that project
											owners and clients can maintain control over content without requiring technical expertise.
										</li>
										<li>
											<strong>Versatility:</strong> This feature allows for ongoing adjustments and corrections, making the tool valuable
											not just for initial setup but also for long-term localization needs.
										</li>
									</ul>
									<h4 className="text-lg font-semibold text-blue-700 mb-2">How it aligns with findings:</h4>
									<ul className="list-disc pl-6 text-gray-700 mb-4">
										<li>
											Agencies specifically requested tools that facilitate client collaboration. The ability to edit translations gives
											Celira a competitive edge by addressing both developer and non-technical user requirements.
										</li>
										<li>
											E-commerce businesses expressed interest in tools that enable quick updates to product descriptions and promotional
											content, supporting this feature’s inclusion.
										</li>
									</ul>
								</section>

								<section className="mb-8">
									<h3 className="text-xl font-semibold text-blue-700 mb-4">3. Freemium Plan with 50,000 Credits and Paid Credit Purchases</h3>
									<h4 className="text-lg font-semibold text-blue-700 mb-2">Why it’s included:</h4>
									<ul className="list-disc pl-6 text-gray-700 mb-4">
										<li>
											<strong>Lower Barrier to Entry:</strong> Research revealed that many small developers and startups are hesitant to
											commit to expensive solutions without testing their value first. A freemium plan encourages adoption by removing
											upfront costs.
										</li>
										<li>
											<strong>Scalability:</strong> Offering 50,000 credits allows new users to experiment with Celira’s capabilities on
											smaller projects, while the option to purchase more credits ensures scalability for larger projects.
										</li>
										<li>
											<strong>Proven Model:</strong> Competitors like Vercel and other SaaS platforms have successfully used freemium
											models to attract a wide user base, converting free users into paying customers over time.
										</li>
									</ul>
									<h4 className="text-lg font-semibold text-blue-700 mb-2">How it aligns with findings:</h4>
									<ul className="list-disc pl-6 text-gray-700 mb-4">
										<li>
											Developers and small agencies highlighted budget constraints, especially during the initial stages of project
											localization. The freemium plan addresses this need while showcasing the tool’s value.
										</li>
										<li>
											The token-based model was specifically well-received during interviews, as it offers flexibility and ensures that
											users pay only for what they need, making it appealing to both small and large customers.
										</li>
									</ul>
								</section>
							</section>

							<section className="mb-12">
								<h2 className="text-2xl font-bold mb-6 text-blue-700">Conclusion</h2>
								<p className="text-gray-700">
									The MVP features are directly inspired by customer pain points and feedback gathered during market research:
								</p>
								<ul className="list-disc pl-6 text-gray-700 mb-4">
									<li>The local script addresses the security and efficiency concerns that are critical to developers and agencies.</li>
									<li>
										The ability to update translations empowers users to maintain and refine their projects without technical barriers,
										ensuring long-term relevance and usability.
									</li>
									<li>The freemium plan removes initial friction for adoption, builds trust in the product, and supports scalable growth.</li>
								</ul>
								<p className="text-gray-700">
									These features strike a balance between addressing the core needs of the target audience and setting Celira apart from its
									competitors, ensuring a solid foundation for future growth.
								</p>
							</section>
						</>
					)}

					{/* Milestone 8 */}
					{milestones.milestone8 && (
						<>
							<section className="mb-12">
								<h2 className="text-2xl font-bold mb-6 text-blue-700">Milestone: Getting People to Use the MVP</h2>

								<h3 className="text-xl font-semibold text-blue-700 mb-4">Objective</h3>
								<p className="text-gray-700 mb-4">
									The goal of this milestone was to validate that our MVP solves real problems for users and that it can attract paying
									customers. We aimed to document user engagement and, if possible, secure commitments in the form of payments, subscriptions,
									or signed agreements.
								</p>

								<h3 className="text-xl font-semibold text-blue-700 mb-4">Process Documentation</h3>

								<h4 className="text-lg font-semibold text-blue-700 mb-2">1. Preparing the MVP for Launch</h4>
								<ul className="list-disc pl-6 text-gray-700 mb-4">
									<li>
										<strong>Final Adjustments:</strong> Addressed minor bugs and usability issues reported during initial internal testing
										to ensure a smooth user experience.
									</li>
									<li>
										<strong>Freemium Plan Activation:</strong> Enabled the 50,000 free credits to lower barriers for new users and encourage
										trial usage.
									</li>
									<li>
										<strong>Analytics Setup:</strong> Integrated Hotjar for user behavior tracking and Google Analytics for traffic insights
										to measure engagement.
									</li>
								</ul>

								<h4 className="text-lg font-semibold text-blue-700 mb-2">2. Reaching Out to Potential Users</h4>
								<ul className="list-disc pl-6 text-gray-700 mb-4">
									<li>
										<strong>Target Audience:</strong> Focused on freelance developers, small agencies, and e-commerce managers who showed
										interest during the customer discovery phase.
									</li>
									<li>
										<strong>Channels Used:</strong>
										<ul className="list-disc pl-6">
											<li>
												<strong>Email Campaigns:</strong> Sent personalized emails to contacts who had signed up on our landing page
												during the discovery phase.
											</li>
											<iframe
												className="w-full h-[1000px]"
												src="https://docs.google.com/document/d/1LgwMw0NpquhT4jgq04YgwtKFtshZPOyPKv_VYYscef8/edit?usp=sharing"
											></iframe>
											<li>
												<strong>Developer Forums:</strong> Shared the MVP on communities like Reddit (
												<em>r/webdev, r/saas, r/agency</em>) and Dev.to, emphasizing the free credits and security features.
											</li>
											<li>
												<strong>Social Media:</strong> Promoted Celira on LinkedIn and Twitter, targeting developers and small business
												owners through hashtags and industry groups.
											</li>
										</ul>
									</li>
								</ul>

								<h4 className="text-lg font-semibold text-blue-700 mb-2">3. Gathering Feedback</h4>
								<ul className="list-disc pl-6 text-gray-700 mb-4">
									<li>
										<strong>Hotjar Recordings:</strong> Tracked user interactions to identify areas of friction or confusion within the
										application.
									</li>
									<li>
										<strong>Direct Communication:</strong> Reached out to users who spent significant time on the platform, offering
										one-on-one calls to understand their needs.
									</li>
								</ul>
							</section>

							<section className="mb-12">
								<h3 className="text-xl font-semibold text-blue-700 mb-4">Results and Evidence</h3>

								<h4 className="text-lg font-semibold text-blue-700 mb-2">Engagement Metrics </h4>
								<ul className="list-disc pl-6 text-gray-700 mb-4">
									<li>
										<strong>Google Analytics:</strong> Recorded 250+ unique visitors.
									</li>
									<li>
										<strong>Hotjar Insights:</strong>
										<ul className="list-disc pl-6">
											<li>Captured 150+ session recordings showing users successfully interacting with the app.</li>
										</ul>
									</li>
								</ul>

								<h4 className="text-lg font-semibold text-blue-700 mb-2">Feedback Highlights</h4>
								<ul className="list-disc pl-6 text-gray-700 mb-4">
									<li>
										<strong>Positive Feedback:</strong>
										<ul className="list-disc pl-6">
											<li>"The local script saved me hours of manual work." – Freelance Developer</li>
											<li>
												"It’s refreshing to have a secure localization tool that doesn’t rely on cloud-based processing." – Agency Owner
											</li>
										</ul>
									</li>
									<li>
										<strong>Constructive Feedback:</strong>
										<ul className="list-disc pl-6">
											<li>Some users requested clearer instructions for first-time use.</li>
											<li>Agencies suggested adding a feature for bulk translation updates.</li>
										</ul>
									</li>
								</ul>
							</section>

							<section className="mb-12">
								<h4 className="text-lg font-semibold text-blue-700 mb-2">Evidence</h4>
								<ul className="list-disc pl-6 text-gray-700 mb-4">
									<li>Hotjar Screenshots: Photos and session recordings of users interacting with the app.</li>
								</ul>

								<div className="grid md:grid-cols-2 gap-8 mt-6">
									<img src="/stats1.jpeg" alt="Hotjar Insights" className="w-full rounded-lg shadow-md" />
									<img src="/stats2.jpeg" alt="Engagement Metrics" className="w-full rounded-lg shadow-md" />
								</div>
							</section>

							<section className="mb-12">
								<h3 className="text-xl font-semibold text-blue-700 mb-4">Lessons Learned</h3>
								<ul className="list-disc pl-6 text-gray-700 mb-4">
									<li>Onboarding is Key: Simplified instructions can reduce the learning curve for new users.</li>
									<li>
										Feature Prioritization: Based on feedback, bulk translation updates and enhanced onboarding materials will be added to
										the roadmap.
									</li>
								</ul>
							</section>

							<section className="mb-12">
								<h3 className="text-xl font-semibold text-blue-700 mb-4">Next Steps</h3>
								<ul className="list-disc pl-6 text-gray-700 mb-4">
									<li>Implement feature improvements based on feedback.</li>
									<li>Focus on converting more freemium users into paying customers.</li>
									<li>Expand outreach efforts to reach more agencies and e-commerce managers.</li>
								</ul>
							</section>
						</>
					)}
				</main>
			</div>
		</div>
	);
}
