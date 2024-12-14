import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { consumption } from '@/config/Specialization';
import { toast } from 'sonner';

const InputMedicines = ({ medicines, setMedicines }) => {
    const [input, setInput] = useState({
        medicine: '',
        consumption: '',
        days: ''
    })
    const handlePush = (e) => {
        if (!input.medicine || !input.consumption || !input.days) {
            toast.error("Fill all the fields");
            return;
        }
        setMedicines([...medicines, { medicine: input.medicine, consumption: input.consumption, days: input.days }])

        setInput({
            medicine: '',
            consumption: '',
            days: ''
        })
    }
    return (
        <div className='absolute bottom-0 left-0 right-0 grid items-center w-full grid-cols-2 gap-4 p-4 bg-red-100 rounded-lg lg:mx-10 max-w-7xl lg:grid-cols-3'>
            <div className='gap-1'>
                <Label>Medicine Name</Label>
                <Input placeholder='Medicine name' className='border' value={input.medicine} onChange={(e) => setInput({ ...input, medicine: e.target.value })} />
            </div>
            <div>
                <Label>Consumption</Label>
                <Select onValueChange={(e) => setInput({ ...input, consumption: e })}>
                    <SelectTrigger>
                        <SelectValue value='' placeholder="Consumption" />
                    </SelectTrigger>
                    <SelectContent>
                        {
                            consumption.map((item, idx) => (
                                <SelectItem key={idx} value={item}>{item}</SelectItem>
                            ))
                        }
                    </SelectContent>
                </Select>
            </div>
            <div>
                <Label>Time Period</Label>
                <Input placeholder='days' type='number' className='border' min={0} value={input.days} onChange={(e) => setInput({ ...input, days: e.target.value })} />
            </div>
            <div>
                <Button onClick={handlePush} size='sm' variant='destructive' className='w-full rounded-full'>Push</Button>
            </div>



        </div>
    )
}

export default InputMedicines