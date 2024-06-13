import Card from "@/components/card";
import {CardData} from "@/app/api/recipeData";
import {AbstractIntlMessages, useMessages, useTranslations} from "next-intl";

export default function Page(){
  const t = useTranslations("recipe.coffees")
  const messages = useMessages()
  const keys = Object.keys((messages.recipe as AbstractIntlMessages).coffees)
  console.log(keys)
  return (
    <div className={"flex flex-col space-y-6"}>
      {keys.map((key, index) => {
        const data: CardData = {
          name: t(`${key}.name`),
          description: t(`${key}.description`),
          base: t(`${key}.base`),
          image: t(`${key}.image`),
          imagePosition: t(`${key}.imagePosition`),
        }
        return (
          <Card data={data} key={index}/>
        )
      })}
    </div>
  )
}