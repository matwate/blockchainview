'use client';
import React, { use, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useStore } from '@/lib/store/blockchain';
import UsersView from '@/components/own/usersview';
import BalanceChangeView from '@/components/own/balancechangeview';
import MakeTransactionView from '@/components/own/maketransactionview';
import BlockChainView from '@/components/own/blockchainview';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ArrowRightLeft, Link, Pickaxe, UserPlus, Users } from 'lucide-react';

const page = () => {
	const { toast } = useToast();

	const exception = useStore((state: any) => state.exception);
	useEffect(() => {
		if (exception == ""){
			return;
		}


		if (exception !== null || exception !== '' || exception !== undefined) {
			toast({
				title: 'Error',
				description: exception,
			});
		}
	}, [exception]);

	const blockchain = useStore((state: any) => state.blockchain);
	const fetchBlockchain = useStore((state: any) => state.fetchBlockchain);
	const handleViewBlockchain = () => {
		fetchBlockchain();
		toast({
			title: 'BlockChain',
			description: JSON.stringify(blockchain),
		});
	};

	const users = useStore((state: any) => state.users);
	const createUser = useStore((state: any) => state.createUser);
	const fetchUsers = useStore((state: any) => state.fetchUsers);
	const handleUserCreation = () => {
		createUser();
		fetchUsers();
		toast({
			title: 'Usuario Creado',
			description: JSON.stringify(users),
		});
	};

	const pending_trxs = useStore((state: any) => state.pending_trxs);
	const fetchPendingTrxs = useStore((state: any) => state.fetchPendingTrxs);
	const handleViewPendingTrxs = () => {
		fetchPendingTrxs();
		toast({
			title: 'Transacciones Pendientes',
			description: JSON.stringify(pending_trxs),
		});
	};

	useEffect(() => {
		fetchBlockchain();
		fetchUsers();
		fetchPendingTrxs();
	}, []);

	const mine_block = useStore((state: any) => state.mine_block);
	const handleMiningBlock = () => {
		mine_block();
		toast({
			title: 'Bloque Minado',
		});
	};

	return (
		<>
			<div>
				<Sheet>
					<SheetTrigger asChild>
						<Button>Controles</Button>
					</SheetTrigger>
					<SheetContent
						className='w-60'
						side={'left'}>
						<div className='flex-col justify-evenly'>
							<Button onClick={handleViewBlockchain} variant={"ghost"} >
								<Link size={16} strokeWidth={1.75} className='mx-2' />
								Ver BlockChain
							</Button>
							<Button onClick={handleUserCreation} variant={"ghost"}>
							<UserPlus size={16} strokeWidth={1.75} className='mx-2' />
								Crear Usuario
							</Button>
							<UsersView />
							<BalanceChangeView />
							<Button onClick={handleViewPendingTrxs} variant={"ghost"}>
								<ArrowRightLeft
									size={16}
									strokeWidth={1.75}
									className='mx-2'
								/>
								Ver Transacciones 
							</Button>
							<Button onClick={handleMiningBlock} variant={"ghost"}>
								<Pickaxe size={16} strokeWidth={1.75} className='mx-2' />
								Minar Bloque
							</Button>
							<MakeTransactionView />
						</div>
					</SheetContent>
				</Sheet>
			</div>
			<div className='m-8'>
				<BlockChainView />
			</div>
		</>
	);
};

export default page;
