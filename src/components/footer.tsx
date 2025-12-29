import Image from 'next/image'
import {
	CaretDoubleUp,
	InstagramLogo,
	LinkedinLogo,
	MessengerLogo,
	TwitterLogo,
} from 'phosphor-react'
import stzLogo from '@/assets/images/gray-logo.png'

export function Footer() {
	return (
		<footer className="bg-slate-400">
			<div className="p-12 flex justify-between">
				<div className="w-1/4 gap-12 flex flex-col">
					<div className="flex flex-col gap-6">
						<Image src={stzLogo} alt="STZCODE logo" width={200} height={34} />

						<p className="text-justify text-slate-50 font-medium">
							Na STZCODE, transformamos ideias em tecnologia. Oferecemos
							soluções digitais completas para impulsionar negócios no presente
							e prepará-los para o futuro.
						</p>
					</div>

					<div className="flex gap-4">
						<button type="button">
							<TwitterLogo size={24} className="text-slate-50" />
						</button>
						<button type="button">
							<InstagramLogo size={24} className="text-slate-50" />
						</button>
						<button type="button">
							<MessengerLogo
								weight="fill"
								size={24}
								className="text-slate-50"
							/>
						</button>
						<button type="button">
							<LinkedinLogo weight="fill" size={24} className="text-slate-50" />
						</button>
					</div>

					<button
						type="button"
						className="text-slate-50 text-sm border-2 border-slate-50 w-fit px-4 py-2 flex items-center gap-4"
					>
						<CaretDoubleUp size={24} />
						Voltar ao topo
					</button>
				</div>
				<div className="w-1/3 flex gap-32">
					<nav>
						<span className="text-slate-50 font-semibold">Navegação</span>
						<ul className="flex flex-col gap-2 mt-4">
							<li className="text-slate-100 text-sm">Início</li>
							<li className="text-slate-100 text-sm">Quem somos</li>
							<li className="text-slate-100 text-sm">Serviços</li>
							<li className="text-slate-100 text-sm">Portfólio</li>
							<li className="text-slate-100 text-sm">Contato</li>
						</ul>
					</nav>
					<nav>
						<span className="text-slate-50 font-semibold">Legal</span>
						<ul className="flex flex-col gap-2 mt-4">
							<li className="text-slate-100 text-sm">
								Política de Privacidade
							</li>
							<li className="text-slate-100 text-sm">Termos de Serviço</li>
							<li className="text-slate-100 text-sm">Cookies</li>
						</ul>
					</nav>
				</div>
			</div>

			<div className="bg-slate-600 flex items-center justify-center py-2">
				<span className="font-semibold text-slate-50">
					©2025 STZCODE® Todos os direitos reservados.
				</span>
			</div>
		</footer>
	)
}
