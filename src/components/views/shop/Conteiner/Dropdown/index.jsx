import { BiChevronDown } from "react-icons/bi";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Drop({activeC}) {
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center gap-x-8 bg-[#f5f7fa] px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm  ring-gray-300">
            {activeC ? "Popular" : "96"}
            <BiChevronDown
              className="-mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 z-10 mt-2 w-20 origin-top-right bg-[#f5f7fa] ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-[#f6f6f6] text-[#fbb710] font-semibold" : "text-[#212529]",
                      "block px-4 py-2 text-sm font-semibold"
                    )}
                  >
                    {activeC ? "Date" : "12"}
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-[#f6f6f6] text-[#fbb710] font-semibold" : "text-[#212529]",
                      "block px-4 py-2 text-sm font-semibold"
                    )}
                  >
                    {activeC ? "Mewest" : "34"}
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-[#f6f6f6] text-[#fbb710] font-semibold" : "text-[#212529]",
                      "block px-4 py-2 text-sm font-semibold"
                    )}
                  >
                    {activeC ? "Popular" : "96"}
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

export default Drop;
