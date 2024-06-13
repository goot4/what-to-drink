import {ingredients} from "@/app/api/recipeData";
import Card from "@/components/card";

export default function Page(){
  return (
    <div className={"flex flex-col space-y-6"}>
      {ingredients.map((ingredient, index)=> (
        <Card data={ingredient} key={index}/>
      ))}
    </div>
  )
}
