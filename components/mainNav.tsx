'use client'
import Link from "next/link"
import {usePathname} from "next/navigation"
import clsx from "clsx";
import {useTranslations} from "next-intl";



export default function MainNav(){
  const t = useTranslations()

  const pathname = usePathname()
  const paths = [
    {name: t("index.brew"), path: "/", activeCond: ''},
    {name: t("index.recipe"), path: "/recipe/coffee", activeCond: "recipe"},
  ]
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
      <h1 className={"text-3xl mt-4 mb-2"}>{t("Title")}</h1>
      <div role="tablist" className="tabs tabs-bordered">
        {paths.map((path, index) => (
          <Link key={index} href={path.path} role="tab"
                className={clsx("tab text-xl", {"tab-active": conditions[index]})}>{path.name}</Link>
        ))}
      </div>
    </div>
  )


}
