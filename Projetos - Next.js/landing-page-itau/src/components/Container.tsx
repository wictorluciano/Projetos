import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export function Container({children}: Props) {
    return (
        <div className="flex item-center justify-between w-full max-w-[1246px] pl-[15px] mx-auto">
            {children}
        </div>
    )
}