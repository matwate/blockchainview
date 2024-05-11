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
						className='p-6 max-w-xl h-fit  text-wrap break-words'>
						<CardTitle>Bloque {index}</CardTitle>
						<CardContent className='p-4  gap-4 h-fit'>
							<p>
								{' '}
								<span className='text-[#dbec9c]'>
									Timestamp:
								</span>{' '}
								{block.Timestamp}
							</p>
							<p>
								<span className='text-[#dbec9c]'>
									Previous Hash:
								</span>{' '}
								{block.PreviousHash}
							</p>
							<p>
								<span className='text-[#dbec9c]'>Nonce:</span>{' '}
								{block.Nonce}
							</p>
							<p>
								<span
									className='
								text-[#dbec9c]
								'>
									Hash:
								</span>
								{block.Hash}
							</p>
							<p className='text-lg font-bold text-[#dbec9c]'>
								Transactions:
							</p>
							<div>
								<ScrollArea className='max-h-50 p-4'>
									<div className='flex h-full'>
										{block.Transactions.map(
											(transaction: any, index: any) => (
												<Card key={index}>
													<CardContent className='p-4 w-full'>
														<div>
															<p className='break-words text-[#dbec9c]'>
																Sender:{' '}
																{
																	transaction.From
																}
															</p>
															<p className='break-words text-[#dbec9c]'>
																Receiver:{' '}
																{transaction.To}
															</p>
															<p className='break-words text-[#dbec9c]'>
																Amount:{' '}
																{
																	transaction.Amount
																}
															</p>
														</div>
													</CardContent>
												</Card>
											)
										)}
									</div>
									<ScrollBar orientation='horizontal' />
								</ScrollArea>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
			<ScrollBar orientation='horizontal' />
		</ScrollArea>
	);
}
/* 

{
*/
