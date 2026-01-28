'use client'

import Image from 'next/image'
import Link from 'next/link'
import { CaretDoubleUp, InstagramLogo, LinkedinLogo } from 'phosphor-react'
import { STZLogo } from '@/assets/icons/logo'
import stzLogo from '@/assets/images/gray-logo.png'

export function Footer() {
	return (
		<footer className="bg-slate-400 relative overflow-hidden">
			<STZLogo
				className="absolute top-4 md:-right-24 md:top-0 rotate-12 z-10 opacity-40"
				color="#CAD5E2"
			/>
			<div className="p-12 flex justify-between flex-col gap-6 md:flex-row md:gap-0">
				<div className="w-full md:w-1/4 gap-12 flex flex-col">
					<div className="flex flex-col gap-6">
						<Image src={stzLogo} alt="STZCODE logo" width={200} height={34} />

						<p className="text-justify text-slate-50 font-medium">
							Na STZCODE, transformamos ideias em tecnologia. Oferecemos
							soluções digitais completas para impulsionar negócios no presente
							e prepará-los para o futuro.
						</p>
					</div>

					<div className="flex gap-4">
						<a
							href="https://www.instagram.com/stzcode"
							target="_blank"
							rel="noopener"
						>
							<InstagramLogo size={24} className="text-slate-50" />
						</a>
						<a
							href="https://www.linkedin.com/company/stzcode/"
							target="_blank"
							rel="noopener"
						>
							<LinkedinLogo weight="fill" size={24} className="text-slate-50" />
						</a>
					</div>

					<a
						href="#inicio"
						className="text-slate-50 text-sm border-2 hover:bg-slate-100/20 transition-colors border-slate-50 w-fit px-4 py-2 flex items-center gap-4"
					>
						<CaretDoubleUp size={24} />
						Voltar ao topo
					</a>
				</div>
				<div className="w-1/3 flex gap-32">
					<nav className="z-50">
						<span className="text-slate-50 font-semibold">Navegação</span>
						<ul className="flex flex-col gap-2 mt-4">
							<li className="text-slate-100 text-sm hover:text-sky-400 transition-colors">
								<Link href="/#inicio">Início</Link>
							</li>
							<li className="text-slate-100 text-sm hover:text-sky-400 transition-colors">
								<Link href="/#quem-somos">Quem somos</Link>
							</li>
							<li className="text-slate-100 text-sm hover:text-sky-400 transition-colors">
								<Link href="/#servicos">Serviços</Link>
							</li>
							<li className="text-slate-100 text-sm hover:text-sky-400 transition-colors">
								<Link href="/#portfolio">Portfólio</Link>
							</li>
							<li className="text-slate-100 text-sm hover:text-sky-400 transition-colors">
								<Link href="/#contato">Contato</Link>
							</li>
						</ul>
					</nav>
					<nav className="z-50">
						<span className="text-slate-50 font-semibold">Legal</span>
						<ul className="flex flex-col gap-2 mt-4">
							<Link href="/privacidade">
								<li className="text-slate-100 text-sm hover:text-sky-400 transition-colors">
									Política de Privacidade
								</li>
							</Link>
							<Link href="/termos">
								<li className="text-slate-100 text-sm hover:text-sky-400 transition-colors">
									Termos de Serviço
								</li>
							</Link>
						</ul>
					</nav>
				</div>
			</div>

			<div className="relative w-full h-10">
				<div className="bg-slate-600 h-full items-center justify-center absolute bottom-0 z-50 w-full flex">
					<span className="font-semibold text-slate-50">
						©2025 STZCODE® Todos os direitos reservados.
					</span>
				</div>
			</div>
		</footer>
	)
}
