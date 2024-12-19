import { db } from "../config/index";
import { Doctors, Medicos, Patients } from "../config/schema";
import { eq } from "drizzle-orm";
import { toast } from "sonner";
import { create } from "zustand";

export const usePatientStore = create((set) => ({
    loading: false,
    error: null,
    doctors: [],
    appointment: null,
    medicos: [],

    bookAppointment: async (input) => {
        set({ loading: true, error: null });
        try {
            if (!input.name || !input.age || !input.gender || !input.address || !input.problem || !input.mobile || !input.appointmentDate || !input.hospital) {
                toast.error("Please fill all the fields");
                return;
            }
            const user = await db.select().from(Patients).where(eq(Patients.mobile, input.mobile));
            if (user[0]) {
                const response = await db.update(Patients).set({
                    name: input.name,
                    age: input.age,
                    gender: input.gender,
                    address: input.address,
                    hospital: input.hospital,
                    problem: input.problem,
                    mobile: input.mobile,
                    appointmentDate: input.appointmentDate,
                    medicines: null,
                    appointedBy: null,
                    isAppointed: false
                }).where(eq(Patients.mobile, input.mobile));
                if (response) {
                    toast.success("Appointment Updated Successfully");
                }
            }
            else {
                const response = await db.insert(Patients).values({
                    name: input.name,
                    age: input.age,
                    gender: input.gender,
                    address: input.address,
                    problem: input.problem,
                    mobile: input.mobile,
                    hospital: input.hospital,
                    appointmentDate: input.appointmentDate
                });
                if (response) {
                    toast.success("Appointment Booked Successfully");
                }
            }
            set({ loading: false, error: null });
        } catch (error) {
            set({ loading: false, error: error.message });
        }
        finally {
            set({ loading: false });
        }

    },

    viewAppointment: async (input) => {
        set({ loading: true, error: null });
        try {
            const response = await db.select().from(Patients).fullJoin(Doctors, eq(Patients.appointedBy, Doctors.id)).where(eq(Patients.mobile, input));
            if (response[0]) {
                set({ loading: false, error: null, appointment: response[0] });
            }
            else {
                toast.error("No Appointment Found");
                set({ loading: false, error: null, appointment: null });
            }
        } catch (error) {
            set({ loading: false, error: error.message });
            toast.error("Error in fetching data");
        }
        finally {
            set({ loading: false });
        }
    },

    getDoctors: async () => {
        set({ loading: true, error: null });
        try {
            const response = await db.select().from(Doctors);
            if (response) {
                set({ loading: false, error: null, doctors: response });
            }
            else {
                set({ loading: false, error: null, doctors: [] });
            }
        } catch (error) {
            set({ loading: false, error: error.message });
        }
        finally {
            set({ loading: false });
        }
    },

    getMedicos: async () => {
        set({ loading: true, error: null });
        try {
            const response = await db.select().from(Medicos);
            if (response) {
                set({ loading: false, error: null, medicos: response });
            }
            else {
                set({ loading: false, error: null, medicos: [] });
            }
        } catch (error) {
            set({ loading: false, error: error.message });
        }
        finally {
            set({ loading: false });
        }
    },

}));