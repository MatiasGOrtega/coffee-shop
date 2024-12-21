import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";
import { dataFooter } from "@/utils/dataFooter";


function Footer() {
  return (
    <footer>
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between p-1">
          <p className="text-center py-1">
            <span className="font-bold">Coffe</span> Shop
          </p>

          <ul className="flex flex-col sm:flex-row items-center text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 gap-3">
            {dataFooter.map((data) => (
              <li key={data.id}>
                <Link href={data.link} className="hover:underline">
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Separator className="border-gray-200 sm:mx-auto dark:border-gray-700 my-1" />
        <span className="block text-sm text-gray-500 text-center dark:text-gray-400 p-1">
            &copy; 2024 <Link href="#">Matias Ortega</Link>. Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
