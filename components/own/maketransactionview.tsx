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
import { ArrowLeft, ArrowLeftRight } from 'lucide-react';

export default function MakeTransactionView() {
	return (
		<>
			<Dialog>
				<DialogTrigger asChild>
					<Button variant={"ghost"}>
						<ArrowLeftRight
							size={16}
							strokeWidth={1.75}
							className='mx-2'
						/>
						Crear Transaccion</Button>
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
