import { Container } from "@/components/Container";
import { ItemMenu } from "@/components/ItemMenu";
import { Search } from "@/components/Search";

import Image from "next/image";
import Logo from '@/assets/logo.svg'
import IconUser from "@/assets/icon-user.svg"

export function Header() {
    return (
        <header className="flex items-center w-full h-20 bg-primary-orange">
          <Container>
            <div className="flex flex-1 items-center justify-between">
              <div className="flex items-center gap-14">
                <Image 
                  src={Logo}
                  alt="Logo itaú"
                />
                <ul className="flex items-center gap-12">
                  <ItemMenu 
                    name="Para você"
                  />
                  <ItemMenu 
                    name="Para empresa"
                  />
                  <ItemMenu 
                    name="Serviços"
                  />
                  <ItemMenu 
                    name="Ajuda"
                  />
                </ul>
              </div>
              <Search />
            </div>
          </Container>
          <button className="flex items-center gap-4 bg-primary-blue h-20 px-10">
              <Image 
                src={IconUser}
                alt="Icon user"
              />
              <span className="text-white font-bold">Acessar conta</span>
            </button>
        </header>
    )
}