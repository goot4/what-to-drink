'use client'
import Link from "next/link"
import {useRouter, usePathname} from "next/navigation"
import clsx from "clsx";
import {useTranslations} from "next-intl";
import LangDropdown from "@/components/langDropdown";

type Props = {
  locale:string
}
export default function MainNav({locale}: Props){
  const t = useTranslations('index')
  const router = useRouter()
  const pathname = usePathname()
  const paths = [
    {name: t("brew"), path: `/${locale}`, activeCond: ''},
    {name: t("recipe"), path: `/${locale}/recipe/coffee`, activeCond: "recipe"},
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
    <div className={"flex flex-col text-center"}>
      <h1 className={"text-3xl mt-4 mb-2"}>{t("Title")}</h1>
      <LangDropdown onSelected={langSelectedHandler}/>
      <div role="tablist" className="tabs tabs-bordered">
        {paths.map((path, index) => (
          <Link key={index} href={path.path} role="tab"
                className={clsx("tab text-xl", {"tab-active": conditions[index]})}>{path.name}</Link>
        ))}
      </div>
    </div>
  )

  function langSelectedHandler(newLocale:string){
    router.replace(pathname.replace(locale,newLocale))
  }
}
