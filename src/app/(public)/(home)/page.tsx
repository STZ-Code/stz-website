import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Portfolio } from '@/components/portfolio'
import { Presentation } from '@/components/presentation'
import { Services } from '@/components/services'

export default function HomePage() {
	return (
		<>
			<Header />

			<Presentation />

			<Services />

			<Portfolio />

			<Contact />

			<Footer />
		</>
	)
}
