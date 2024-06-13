'use client'
import Link from "next/link"
import {usePathname} from "next/navigation"
import clsx from "clsx";
import {useTranslations} from "next-intl";

type Props={
  locale: string
}
export default function RecipeNav({locale}:Props){
  const t = useTranslations("recipeIndex")
  const pathname = usePathname()
  const paths = [
    {name: t("ingredients"), path: `/${locale}/recipe/base`},
    {name: t("coffee"), path: `/${locale}/recipe/coffee`},
    {name: t("secondary"), path: `/${locale}/recipe/secondary`},
  ]

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
