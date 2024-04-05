import Image from "next/image";
import IconPhone from "@/assets/icon-phone.svg"
import IconSolutions from "@/assets/icon-solutions.svg"
import IconCard from "@/assets/icon-card.svg"
import IconOptions from "@/assets/icon-options.svg"

export function ItemSection() {
    return (
        <ul className="flex flex-col items-start gap-9">
            <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                <div className="w-7 h-7 flex items-center justify-center">
                    <Image 
                        src={IconPhone}
                        alt="Icon Phone"
                    />
                </div>
                <p className="flex-1 text-txt-gray pr-2">
                    Acompanhar sua conta, fazer transferências e pagamentos de onde estiver
                </p>
            </li>

            <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                <div className="w-7 h-7 flex items-center justify-center">
                    <Image 
                        src={IconSolutions}
                        alt="Icon Solutions "
                    />
                </div>
                <p className="flex-1 text-txt-gray pr-2">
                    Soluções de empréstimos e renogociação para organizar suas finanças
                </p>
            </li>

            <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                <div className="w-7 h-7 flex items-center justify-center">
                    <Image 
                        src={IconOptions}
                        alt="Icon Options "
                    />
                </div>
                <p className="flex-1 text-txt-gray pr-2">
                    Diversas opções de investimentos, de acordo com o seu perfil de investidor
                </p>
            </li>

            <li className="flex items-center gap-9 pb-9">
                <div className="w-7 h-7 flex items-center justify-center">
                    <Image 
                        src={IconCard}
                        alt="Icon Card"
                    />
                </div>
                <p className="flex-1 text-txt-gray pr-2">
                    Acompanhe a fatura do seu cartão de crédito e faça compras online com seu cartão virtual
                </p>
            </li>
        </ul>
    )
}