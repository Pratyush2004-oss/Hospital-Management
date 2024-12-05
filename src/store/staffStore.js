import { db } from "@/config";
import { Doctors, Medicos } from "@/config/schema";
import { eq } from "drizzle-orm";
import { toast } from "sonner";
import { create } from "zustand";
export const useStaffStore = create((set) => ({
    loading: false,
    error: null,
    staff: null,
    navigate: false,

    registerDoctor: async (input) => {
        try {
            set({ loading: true, error: null, navigate: false });
            if (!input.name || !input.email || !input.hospital || !input.experience || !input.specialization || !input.password) {
                toast.error("Fill in all the fields")
                return;
            }

            const user = await db.select().from(Doctors).where(eq(input.email, Doctors.email));
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
                set({ error: null, navigate: true })
            }
        } catch (error) {
            toast.error("Error in creating account");
            set({ error: error.message })
        }
        finally {
            set({ loading: false })
        }
    },

    registerMedicos: async (input) => {
        try {
            set({ loading: true, error: null, navigate: false });
            if (!input.name || !input.email || !input.hospital || !input.experience || !input.password) {
                toast.error("Fill in all the fields")
                return;
            }
            const user = await db.select().from(Medicos).where(eq(input.email, Medicos.email));
            if (user[0]) {
                toast.error("User already exists..")
                return;
            }
            const response = await db.insert(Medicos).values({
                name: input.name,
                hospital: input.hospital,
                email: input.email,
                experience: input.experience,
                password: input.password
            })
            if (response) {
                toast.success("Medicos account created successfully");
                set({ error: null, navigate: true })
            }
        }
        catch (error) {
            toast.error("Error in creating account");
            set({ error: error.message })
        }
        finally {
            set({ loading: false })
        }
    },

    staffLogin: async (input) => {
        set({ loading: true, error: null });
        try {
            if (!input.email || !input.password || !input.loginType) {
                toast.error("Fill in all the fields");
                return;
            }
            if (input.loginType === "doctor") {
                const user = await db.select().from(Doctors).where(eq(input.email, Doctors.email));
                if (user[0]) {
                    if (user[0].password === input.password) {
                        toast.success("Login successful");
                        set({ error: null })
                    } else {
                        toast.error("Incorrect password");
                        set({ error: null })
                    }
                }
            }
            else {

            }
        } catch (error) {

        }
        finally {
            set({ loading: false })
        }
    },
}));