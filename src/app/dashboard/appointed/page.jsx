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
  const { getCheckedPatients, patients, staff } = useStaffStore();
  const router = useRouter();
  useEffect(() => {
    if (staff) {
      getCheckedPatients();
    }
  }, [staff]);
  return (
    <ScrollArea>
      <div className='p-5'>
        <Table>
          <TableCaption >A list of Appointed Patients</TableCaption>
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
                <TableRow key={idx} className='cursor-pointer' onClick={() => router.push(`patients/${patient.id}`)}>
                  <TableCell className="font-medium">{idx + 1}</TableCell>
                  <TableCell>{patient.patients.name}</TableCell>
                  <TableCell>{patient.patients.age}</TableCell>
                  <TableCell>{patient.patients.gender}</TableCell>
                  <TableCell className="text-right">{patient.patients.problem}</TableCell>
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