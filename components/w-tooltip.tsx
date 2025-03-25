import { Info } from "lucide-react"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip"

export default function WtoolTip({
  content,
  cName,
  align,
}: {
  content?: string
  cName?: string
  align?: any
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Info className="h-4 w-4 text-gray-500 cursor-pointer" />
        </TooltipTrigger>
        <TooltipContent
          side={align ?? "right"}
          className={
            cName ??
            "bg-gray-700 text-white text-xs px-3 py-2 rounded-md shadow-lg w-70"
          }
        >
          {content ??
            "We remember your account information for the next time you log in."}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
