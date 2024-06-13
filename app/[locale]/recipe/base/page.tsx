
import Card from "@/components/card";
import {AbstractIntlMessages, useMessages, useTranslations} from "next-intl";
import {CardData} from "@/app/api/recipeData";

export default function Page(){
  const t = useTranslations("recipe.ingredients")
  const messages = useMessages()
  const keys = Object.keys((messages.recipe as AbstractIntlMessages).ingredients)
  console.log(keys)
  return (
    <div className={"flex flex-col space-y-6"}>
      {keys.map((key, index)=> {
        const data:CardData = {
          name: t(`${key}.name`),
          description: t(`${key}.description`)
        }
        return (
          <Card data={data} key={index}/>
        )
      })}
    </div>
  )
}
