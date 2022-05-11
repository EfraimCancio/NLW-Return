
import * as Icon from "phosphor-react";
import { Popover } from '@headlessui/react'
import { WidgetForm } from "./WidguetForm";


export function Widget ()  {
   
    return (
        <Popover className="
            absolute 
            bottom-5 
            left-5
            flex
            flex-col
            items-end">
            <Popover.Panel>
                <WidgetForm/>
            </Popover.Panel> 

            < Popover.Button  className="
                bg-brand-500 
                hover:bg-brand-100  
                text-brand-100 
                hover:text-brand-500 
                border-brand-500
                hover:border-2
                rounded-full 
                px-3
                h-12 
                flex
                items-center
                group ">
                <Icon.Alien className="w-6 h-6" />
                <span className="
                 max-w-0 
                 overflow-hidden 
                 group-hover:max-w-xl
                 transition-all duration-500 ease-linear">
                    <span className="pl-2"></span>
                    Fale com o ET
                </span>
            </Popover.Button>
        </Popover>
    )
}

