import {LanguagesIcon} from "lucide-react";

type Props = {
  onSelected: (option: string) => void
}
export default function LangDropdown({onSelected}:Props){
  const options = [{name:"English", locale:"en"}, {name:"中文", locale: "cn"}]
  return (
    <div className="dropdown dropdown-end self-end mr-4">
      <div tabIndex={0} role="button" className="btn btn-accent m-1"><LanguagesIcon className={""}/></div>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-accent rounded-box w-52">
        {options.map((option, index) => (<li key={index}>
          <div className={"btn btn-accent"} onClick={()=>{
            onSelected(option.locale)
          }}>{option.name}</div>
        </li>))}
      </ul>
    </div>
  )
}