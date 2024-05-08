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
    user_index: z.string(),
    balance: z.string(),
})



export default function BalanceChangeForm(){

    const {toast} = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            user_index: "0",
            balance: "0",
        }
    })

    const changeBalance = useStore((state: any) => state.setBalance);

    function onSubmit(data: z.infer<typeof formSchema>){
        const idx = parseInt(data.user_index);
        const bal = parseInt(data.balance);
        changeBalance(idx, bal )
        toast({
            title: 'Balance Cambiado',
            description: `Balance de usuario ${data.user_index} cambiado a ${data.balance}`,
        
        })

    }

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name= "user_index"
                        render={({field}) => (

                            <FormItem>
                                <FormLabel htmlFor="user_index">User Index</FormLabel>
                                <FormControl>
                                    <Input {...field} id="user_index"  />

                                </FormControl>
                                <FormDescription>Ingrese el indice del Usuario</FormDescription>
                                <FormMessage>{form.formState.errors.user_index?.message}</FormMessage>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name= "balance"
                        render={({field}) => (

                            <FormItem>
                                <FormLabel htmlFor="cantidad">Cantidad</FormLabel>
                                <FormControl>
                                    <Input {...field} id="balance"  />

                                </FormControl>
                                <FormDescription>Ingrese la cantidad a asignar</FormDescription>
                                <FormMessage>{form.formState.errors.user_index?.message}</FormMessage>
                            </FormItem>
                        )}
                    /> 
                    <Button type="submit">Cambiar Balance</Button>   
                </form>
            </Form>
        

        </>
    )
}