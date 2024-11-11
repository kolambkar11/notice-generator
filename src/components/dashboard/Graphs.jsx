import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";

export default function Graphs(props) {
  const client = props.data;

  return (
    <>
      <li
        key={client.id}
        className="overflow-hidden rounded-xl border border-gray-200"
      >
        <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
          <div className="text-sm font-medium leading-6 text-gray-900">
            {client.name}
          </div>
          <Menu as="div" className="relative ml-auto">
            <MenuButton className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
              <span className="sr-only">Open options</span>
              <EllipsisHorizontalIcon aria-hidden="true" className="h-5 w-5" />
            </MenuButton>
            <MenuItems
              transition
              className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <MenuItem>
                <a
                  href="#"
                  className="block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50"
                >
                  View<span className="sr-only">, {client.name}</span>
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50"
                >
                  Edit<span className="sr-only">, {client.name}</span>
                </a>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
        <div className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
          include graphs
        </div>
      </li>
    </>
  );
}
