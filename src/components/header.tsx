import Image from 'next/image'
import Link from 'next/link'
import stzLogo from '@/assets/images/stz-logo.png'

type HeaderVariant = 'default' | 'terms_privacy'

interface HeaderProps {
	variant?: HeaderVariant
}

export function Header({ variant = 'default' }: HeaderProps) {
	return (
		<header className="max-w-screen-2xl w-full fixed opacity-80 h-fit px-4 top-6 flex justify-center">
			<div className="bg-sky-50 w-full md:w-4/5 py-4 items-center flex justify-between rounded-3xl px-6">
				<Link href="/#inicio">
					<Image src={stzLogo} alt="STZCODE logo" width={200} height={34} />
				</Link>

				{variant === 'terms_privacy' ? (
					/* MENU TERMOS & PRIVACIDADE */
					<nav className="hidden md:flex flex-1 items-center justify-center">
						<ul className="flex gap-16">
							<li className="text-slate-800 hover:text-sky-600 transition-colors">
								<Link href="/">Início</Link>
							</li>
							<li className="text-slate-800 hover:text-sky-600 transition-colors">
								<Link href="/privacidade">Política de Privacidade</Link>
							</li>
							<li className="text-slate-800 hover:text-sky-600 transition-colors">
								<Link href="/termos">Termos</Link>
							</li>
						</ul>
					</nav>
				) : (
					/* MENU PADRÃO */
					<nav className="hidden md:flex flex-1 items-center justify-center">
						<ul className="flex gap-16">
							<li className="text-slate-800 hover:text-sky-600 transition-colors">
								<a href="#inicio">Início</a>
							</li>
							<li className="text-slate-800 hover:text-sky-600 transition-colors">
								<a href="#quem-somos">Quem somos</a>
							</li>
							<li className="text-slate-800 hover:text-sky-600 transition-colors">
								<a href="#servicos">Serviços</a>
							</li>
							<li className="text-slate-800 hover:text-sky-600 transition-colors">
								<a href="#portfolio">Portfólio</a>
							</li>
							<li className="text-slate-800 hover:text-sky-600 transition-colors">
								<a href="#contato">Contato</a>
							</li>
						</ul>
					</nav>
				)}
			</div>
		</header>
	)
}
