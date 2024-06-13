'use client'
import Link from "next/link"
import {usePathname} from "next/navigation"
import clsx from "clsx";

const paths = [
  {name: "素材", path: "/recipe/base"},
  {name: "咖啡", path: "/recipe/coffee"},
  {name: "配料", path: "/recipe/secondary"},
]

export default function RecipeNav(){
  const pathname = usePathname()

  return (
    <div className={"text-center my-2"}>
      <div role="tablist" className="tabs tabs-bordered">
        {paths.map((path, index) => (
          <Link key={index} href={path.path} role="tab"
                className={clsx("tab", {"tab-active": pathname===path.path})}>{path.name}</Link>
        ))}
      </div>
    </div>
  )


}
