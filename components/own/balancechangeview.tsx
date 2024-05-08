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
export default function BalanceChangeView(){

   
    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button>Cambiar Balance</Button>
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