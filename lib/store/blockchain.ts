import { checkForException } from "../utils";
import {create } from "zustand";

export const useStore = create((set) => ({
    blockchain: [],
    users: [],
    pending_trxs: [],
    exception: null,
    fetchBlockchain: async () => {
        const response = await fetch('http://127.0.0.1:8000/');
		const data = await response.json();
        const data_parsed = JSON.parse(data);

        

        console.log(data_parsed)
        set({blockchain: data_parsed});
    },
    createUser: async () => {
        const response = await fetch('http://127.0.0.1:8000/newuser/');
		const data = await response.json();
        const pk = data.public_key;
		
    },
    fetchUsers: async () => {
        const response = await fetch('http://127.0.0.1:8000/debug/viewUsers');
		const data = await response.json();
        
        set({users: data});
    },
    setBalance: async (index: number , balance: number) => {
        const response = await fetch(`http://127.0.0.1:8000/debug/setbalance/${index}/${balance}`)
        const data = await response.json();

        if (checkForException(data) !== null) {
            set({exception: checkForException(data)});
        }
        
    }, 
    getBalance: async (index: number) => {
        const response = await fetch(`http://127.0.0.1:8000/debug/getbalance/${index}`)
        const data = await response.json();

        if (checkForException(data) !== null) {
            set({exception: checkForException(data)});
        }
        
    },
    fetchPendingTrxs: async () => {
        const response = await fetch('http://127.0.0.1:8000/debug/viewPendingTransactions');
        const data = await response.json();
        set({pending_trxs: data})
    },
    make_new_transaction: async (sender: number, receiver: number, amount: number) => {
        const response = await fetch(`http://127.0.0.1:8000/newtransaction/${sender}/${receiver}/${amount}`);
        const data = await response.json();
        
        if (checkForException(data) !== null) {
            set({exception: checkForException(data)});
        }

    },
    mine_block: async () => {
        const response = await fetch('http://127.0.0.1:8000/mine');
        const data = await response.json();

        if (checkForException(data) !== null) {
            set({exception: checkForException(data)});
        }

        
    }
}))