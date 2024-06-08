
  import { Input } from "../ui/input"
  import { SearchIcon } from "../icons/Search"
  import { Button } from "../ui/button"
  import { CelifiIcon } from "../icons/CelifiLogo"
  export function CommandDemo() {
    return (
        <div className="w-screen h-full">
            <div className="flex justify-between md:justify-end items-center w-full pr-4  md:pr-32">
                <div className="block md:hidden "> <Button className="bg-transparent   hover:bg-transparent"><CelifiIcon/></Button></div>
               
            <Button className="rounded-xl border-none w-1/2 md:w-1/4 " ><SearchIcon/> <Input type="email" className="bg-transparent  border-none outline-none focus-visible:border-none focus-visible:outline-none focus-visible:ring-0 ring-offset-0 ring-0" placeholder="Search Address"/></Button>


            </div>
          
        </div>
        
             

      
    
       
       
        
    )
  }
  
  