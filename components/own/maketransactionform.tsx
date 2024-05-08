"use client"

import {zodResolver} from '@hookform/resolvers/zod'; 
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import { Button } from '../ui/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useStore } from '@/lib/store/blockchain';
import { useToast } from '@/components/ui/use-toast';


const formSchema = z.object({
    sender: z.string(),
    receiver: z.string(),
    amount: z.string(),
})

export default function MakeTransactionForm(){

    const {toast} = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            sender: "0",
            receiver: "0",
            amount: "0",
        }
    })

    const makeTransaction = useStore((state: any) => state.make_new_transaction);

    function onSubmit(data: z.infer<typeof formSchema>){

        const sender = parseInt(data.sender);
        const receiver = parseInt(data.receiver);
        const amount = parseInt(data.amount);
        makeTransaction(sender, receiver, amount)
        toast({
            title: 'Transaccion Realizada',
            description: `Transaccion de ${data.amount} de usuario ${data.sender} a usuario ${data.receiver}`,
        
        })

    }

    return(
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name= "sender"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Emisor</FormLabel>
                                <Input {...field} type="text" />
                                <FormMessage>{form.formState.errors.sender?.message}</FormMessage>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name= "receiver"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Receptor</FormLabel>
                                <Input {...field} type="text" />
                                <FormMessage>{form.formState.errors.receiver?.message}</FormMessage>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name= "amount"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Cantidad</FormLabel>
                                <Input {...field} type="text" />
                                <FormMessage>{form.formState.errors.amount?.message}</FormMessage>
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Realizar Transaccion</Button>
                </form>
            </Form>
        </>
    )
}