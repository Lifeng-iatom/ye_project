import StartupFrom from '@/components/StartupFrom'
import {auth} from "@/auth";
import { redirect } from 'next/navigation';




const  Page = async () => {

    const session = await auth();
        if(!session) redirect('/')
    return (
        <>
            <section className='pink_container !min-h-[230px]'>
                <h1 className='heading'>Submit yourstartup page</h1>
            </section>
            <StartupFrom />
        </>

    )
}

export default Page