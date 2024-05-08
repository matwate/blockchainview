'use client';
import React, { use, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useStore } from '@/lib/store/blockchain';
import UsersView from '@/components/own/usersview';
import BalanceChangeView from '@/components/own/balancechangeview';
import MakeTransactionView from '@/components/own/maketransactionview';
import BlockChainView from '@/components/own/blockchainview';
const page = () => {
	const { toast } = useToast();

	const exception = useStore((state: any) => state.exception);
	useEffect(() => {
		
		if (exception !== null || exception !== "" || exception !== undefined) {
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
			<div className='flex'>
				<Button onClick={handleViewBlockchain}>Ver BlockChain</Button>
				<Button onClick={handleUserCreation}>Crear Usuario</Button>
				<UsersView />
				<BalanceChangeView />
				<Button onClick={handleViewPendingTrxs}>
					Ver Transacciones Pendientes
				</Button>
				<Button onClick={handleMiningBlock}>Minar Bloque</Button>
				<MakeTransactionView />
			</div>
			<div className='m-8'>
				<BlockChainView />
			</div>
		</>
	);
};

export default page;
