import Card from "@/components/card";
import {coffees} from "@/app/api/recipeData";

export default function Page(){
  return (
    <div className={"flex flex-col space-y-6"}>
      {coffees.map((coffee, index) => (
        <Card data={coffee} key={index} />
      ))}
    </div>
  )
}