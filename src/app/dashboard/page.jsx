'use client'
import React, { useEffect } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useStaffStore } from '@/store/staffStore'
import { useRouter } from 'next/navigation'

const page = () => {
  const { getPatients, patients, staff } = useStaffStore();
  const router = useRouter();
  useEffect(() => {
    if (staff) {
      getPatients();
    }
  }, [staff]);
  return (
    <ScrollArea>
      <div className='p-5'>
        <Table>
          <TableCaption >A list of Today's Appointment</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] font-bold">Serial no.</TableHead>
              <TableHead className='font-bold'>Patient Name</TableHead>
              <TableHead className='font-bold'>Age</TableHead>
              <TableHead className='font-bold'>Gender</TableHead>
              <TableHead className="font-bold text-right">Problem</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              patients && patients.map((patient, idx) => (
                <TableRow key={idx} className='cursor-pointer' onClick={() => router.push(`dashboard/patients/${patient.id}`)}>
                  <TableCell className="font-medium">{idx + 1}</TableCell>
                  <TableCell>{patient.name}</TableCell>
                  <TableCell>{patient.age}</TableCell>
                  <TableCell>{patient.gender}</TableCell>
                  <TableCell className="text-right">{patient.problem}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </div>
    </ScrollArea>
  )
}

export default page