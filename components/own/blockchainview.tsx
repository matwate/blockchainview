import { useStore } from '@/lib/store/blockchain';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

export default function BlockChainView() {
	const blockchain = useStore((state: any) => state.blockchain);

	const chain = blockchain.Blockchain;

	return (
		<ScrollArea className='whitespace-nowrap rounded-md border'>
			<div className='flex w-max space-x-4 p-4'>
				{chain?.map((block: any, index: any) => (
					<Card
						key={index}
						className='p-6 max-w-xl  text-wrap break-words'>
						<CardTitle>Bloque {index}</CardTitle>
						<CardContent className='p-4 flex-col gap-4 h-fit'>
							<p>Timestamp: {block.Timestamp}</p>
							<p>Previous Hash: {block.PreviousHash}</p>
							<p>Nonce: {block.Nonce}</p>
							<p>Hash:{block.Hash}</p>
                            <p
                                className='text-lg font-bold'
                            >Transactions:</p>
							<ScrollArea className='h-96 p-4'>
								{block.Transactions.map(
									(transaction: any, index: any) => (
										<Card key={index}>
											<CardContent className='p-4'>
												
													<div >
														<p className='break-words'>
															Sender:{' '}
															{transaction.From}
														</p>
														<p className='break-words'>
															Receiver:{' '}
															{transaction.To}
														</p>
														<p className='break-words'>
															Amount:{' '}
															{transaction.Amount}
														</p>
													</div>
												
											</CardContent>
										</Card>
									)
								)}
							</ScrollArea>
						</CardContent>
					</Card>
				))}
			</div>
			<ScrollBar orientation='horizontal' />
		</ScrollArea>
	);
}
