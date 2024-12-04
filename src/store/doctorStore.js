import { db } from "@/config";
import { Doctors } from "@/config/schema";
import { eq } from "drizzle-orm";
import { toast } from "sonner";
import { create } from "zustand";
export const useDoctorStore = create((set) => ({
    loading: false,
    error: null,

    registerDoctor: async (input) => {
        try {
            set({ loading: true, error: null });
            if (!input.name || !input.email || !input.hospital || !input.experience || !input.specialization || !input.password) {
                toast.error("Fill in all the fields")
                return;
            }

            const user = await db.select().from(Doctors).where(eq(input.email,Doctors.email));
            if (user[0]) {
                toast.error("User already exists..")
                return;
            }
            const response = await db.insert(Doctors).values({
                name: input.name,
                hospital: input.hospital,
                email: input.email,
                experience: input.experience,
                specialization: input.specialization,
                password: input.password
            })
            if (response) {
                toast.success("Doctor account created successfully");
                set({ error: null })
            }
        } catch (error) {
            toast.error("Error in creating account");
            set({ error: error.message })
        }
        finally {
            set({ loading: false })
        }
    }
}));