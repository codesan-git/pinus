"use client"
import { FC } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
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
import { useForm } from "react-hook-form"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from './ui/textarea'

interface EmailFormProps {

}

interface AirbnbReviewEmailProps {
    authorName?: string;
    authorImage?: string;
    reviewText?: string;
}

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",

    }),
    image: z.string().min(5, {
        message: "Jangan bercanda masukin fotonya"
    })
})

const EmailForm: FC<EmailFormProps> = ({ }) => {
    // const onSubmit: SubmitHandler<AirbnbReviewEmailProps> = (data) => console.log(data)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            image: ""
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return (
        <section className='container py-20'>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant={'ghost'} className='space-x-4 rounded-full'>
                        <span>Log in</span>
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-white">
                    <DialogHeader>
                        <DialogTitle>Send Email</DialogTitle>
                        <DialogDescription>
                            Sending Email using react-email resend.
                        </DialogDescription>
                    </DialogHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-96 mx-auto">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input placeholder="username" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            This is your public display name.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="image"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Image</FormLabel>
                                        <FormControl>
                                            <Input placeholder="image" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            This is your public Image.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit">Submit</Button>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
        </section>
    )
}

export default EmailForm