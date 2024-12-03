import { db } from "@/config/index";
import { Patients } from "@/config/schema";
import { eq } from "drizzle-orm";
import { toast } from "sonner";
import { create } from "zustand";

export const usePatientStore = create((set) => ({
    loading: false,
    error: null,
    doctors: [],

    bookAppointment: async (input) => {
        set({ loading: true, error: null });
        try {
            if (!input.name || !input.age || !input.gender || !input.address || !input.problem || !input.mobile || !input.appointmentDate) {
                toast.error("Please fill all the fields");
            }
            const user = await db.select().from(Patients).where(eq(Patients.mobile, input.mobile));
            if (!user) {
                const response = await db.insert(Patients).values(input);
                if (response) {
                    toast.success("Appointment Booked Successfully");
                }
            }
            else {
                const response = await db.update(Patients).set(input).where(eq(Patients.mobile, input.mobile));
                if (response) {
                    toast.success("Appointment Updated Successfully");
                }
            }
            set({ loading: false, error: null });
        } catch (error) {
            set({ loading: false, error: error.message });
        }
        finally {
            set({ loading: false });
        }

    }
}
));