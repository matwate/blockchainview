import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import BalanceChangeForm from "./balancechangeform"
import { Bitcoin } from "lucide-react"
export default function BalanceChangeView(){

   
    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant={"ghost"}>
                        <Bitcoin size={16} strokeWidth={1.75} className="mx-2"/>
                        Cambiar Balance</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Cambiar Balance</DialogTitle>
                    </DialogHeader>
                    <DialogDescription>
                        <BalanceChangeForm/>
                </DialogDescription>
                </DialogContent>
            </Dialog>
        </>
    )
}