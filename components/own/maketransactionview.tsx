import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import MakeTransactionForm from './maketransactionform';

export default function MakeTransactionView() {
	return (
		<>
			<Dialog>
				<DialogTrigger asChild>
					<Button>Crear Transaccion</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Crear Transaccion</DialogTitle>
					</DialogHeader>
					<DialogDescription>
						<MakeTransactionForm />
					</DialogDescription>
				</DialogContent>
			</Dialog>
		</>
	);
}
