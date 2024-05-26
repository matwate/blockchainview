import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';
import { useStore } from '@/lib/store/blockchain';
import { Users } from 'lucide-react';
export default function UsersView() {
	const users = useStore((state: any) => state.users);
	const fetchUsers = useStore((state: any) => state.fetchUsers);
	const content = users;

	return (
		<>
			<Sheet>
				<SheetTrigger asChild>
					<Button
						onClick={fetchUsers}
						variant={'ghost'}>
						<Users
							size={16}
							strokeWidth={1.75}
							className='mx-2'
						/>
						Ver Usuarios
					</Button>
				</SheetTrigger>
				<SheetContent>
					<ScrollArea className='h-max'>
						<div className='p-4 h-[500px]'>
							{content.map((user: any, idx: number) => {
								return (
									<div key={user.public_key}>
										<div className='p-4'>
											<div>{`User ${idx}`}</div>
											<div>
												{`Public Key: ${user.public_key}`}
											</div>
											<div>{`Balance: ${user.balance}`}</div>
										</div>
									</div>
								);
							})}
						</div>
						
					</ScrollArea>
				</SheetContent>
			</Sheet>
		</>
	);
}
