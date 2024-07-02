import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
  import { Card,CardContent,CardDescription,CardFooter } from "./ui/card"
  
  const ComingSoon=()=>{
    return (
        <div className="flex justify-center items-center h-full  w-full">
             <Card className="w-1/2 h-48 flex justify-center items-center bg-Celifi-Yellow" >
        
        <CardContent>
        <h1>COMING SOON</h1>
        </CardContent>
          
          
          
        
      </Card>
        </div>
        
     
    )
  }
  export default ComingSoon
  