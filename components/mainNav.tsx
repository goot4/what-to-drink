'use client'
import Link from "next/link"
import {usePathname} from "next/navigation"
import clsx from "clsx";

const paths = [
  {name: "制作", path: "/", activeCond: ''},
  {name: "食谱", path: "/recipe/coffee", activeCond: "recipe"},
]

export default function MainNav(){
  const pathname = usePathname()
  const conditions = Array(paths.length).fill(false)
  paths.forEach((path, index) => {
    if(index===0) {
      conditions[0]=true
      return
    }
    if(pathname.includes(path.activeCond)){
      conditions[index]=true
      conditions[0]=false
    }
  })

  return (
    <div className={"text-center"}>
      <h1 className={"text-3xl mt-4 mb-2"}>今天喝什么?</h1>
      <div role="tablist" className="tabs tabs-bordered">
        {paths.map((path, index) => (
          <Link key={index} href={path.path} role="tab"
                className={clsx("tab text-xl", {"tab-active": conditions[index]})}>{path.name}</Link>
        ))}
      </div>
    </div>
  )


}
