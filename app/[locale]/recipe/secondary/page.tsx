import {secondaries} from "@/app/api/recipeData";
import Card from "@/components/card";

export default function Page(){
  return (
    <div className={"flex flex-col space-y-6"}>
      {secondaries.map((secondary, index)=> (
        <Card data={secondary} key={index}/>
      ))}
    </div>
  )
}
