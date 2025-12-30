import Image from 'next/image'

import stzLogo from '@/assets/images/stz-logo.png'

export function Header() {
	return (
		<header className="max-w-screen-2xl w-full fixed opacity-80 h-fit px-4 top-6">
			<div className="bg-sky-50 w-full py-4 items-center flex justify-between rounded-3xl px-6">
				<Image src={stzLogo} alt="STZCODE logo" width={200} height={34} />

				<nav>
					<ul className="flex gap-16">
						<li>Início</li>
						<li>Quem somos</li>
						<li>Serviços</li>
						<li>Portfólio</li>
						<li>Contato</li>
					</ul>
				</nav>

				<button
					type="button"
					className="bg-[#3277E6] text-gray-50 px-4 py-1 rounded-3xl text-md"
				>
					Orçamento
				</button>
			</div>
		</header>
	)
}
