import {CardData} from "@/app/api/recipeData"

type Pros={
  data: CardData
}
// bg-[#3E230E]
export default function Card({data}:Pros){
  return (
    <div className={"bg-[#3E230E] text-primary p-4 mx-4 rounded-xl"}>
      <div className={"flex flex-row"}>
        {data.image && <div className="shrink-0" style={{
          backgroundImage: `url('${data.image}')`,
          backgroundSize: "1000px 1000px",
          backgroundPosition: data.imagePosition,
          width: "100px",
          height: "100px",
          backgroundRepeat: "no-repeat",
        }}></div>}
        <div className={"grow p-2"}>
          <h2 className={"text-lg font-bold text-center"}>{data.name}</h2>
          {data.base && <p>{data.base}</p>}
        </div>
      </div>
      <p className={"mt-4"}>{data.description}</p>
    </div>
  )
}