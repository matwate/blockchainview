import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { ScrollArea } from '../ui/scroll-area';
import { useStore } from '@/lib/store/blockchain';
export default function UsersView() {

	const users = useStore((state: any) => state.users);
	const fetchUsers = useStore((state: any) => state.fetchUsers);
	const content = users;

	return (
		<div>
			<Sheet>
				<SheetTrigger asChild>
					<Button onClick={fetchUsers}>Ver Usuarios</Button>
				</SheetTrigger>
				<SheetContent>
					
						<ScrollArea h-max>
							{content.map((user: any, idx: number) => {
								return (
									<div key={user.public_key}>
										<div className='p-4'>
                                            <div>
                                                {`User ${idx    }`}
                                            </div>
											<div>
												{`Public Key: ${user.public_key}`}
											</div>
											<div>
												{`Balance: ${user.balance}`}
											</div>
										</div>
									</div>
								);
							})}
						</ScrollArea>
					
				</SheetContent>
			</Sheet>
		</div>
	);
}
