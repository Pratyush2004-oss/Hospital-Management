'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DoctorsRegister from "./_components/DoctorsRegister"
import MedicosRegister from "./_components/MedicosRegister"

const Register = () => {

    return (
        <Tabs defaultValue="doctors">
            <TabsList className='flex justify-center'>
                <TabsTrigger value="doctors">Doctors</TabsTrigger>
                <TabsTrigger value="medicos">Medicos</TabsTrigger>
            </TabsList>
            <TabsContent value="doctors">
                <DoctorsRegister />
            </TabsContent>
            <TabsContent value="medicos">
                <MedicosRegister />
            </TabsContent>
        </Tabs>
    )
}

export default Register