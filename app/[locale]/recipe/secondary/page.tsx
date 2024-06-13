import Card from "@/components/card";
import {CardData} from "@/app/api/recipeData";
import {AbstractIntlMessages, useMessages, useTranslations} from "next-intl";

export default function Page(){
  const t = useTranslations("recipe.secondaries")
  const messages = useMessages()
  const keys = Object.keys((messages.recipe as AbstractIntlMessages).secondaries)
  console.log(keys)
  return (
    <div className={"flex flex-col space-y-6"}>
      {keys.map((key, index) => {
        const data: CardData = {
          name: t(`${key}.name`),
          description: t(`${key}.description`),
        }
        return (
          <Card data={data} key={index}/>
        )
      })}
    </div>
  )
}