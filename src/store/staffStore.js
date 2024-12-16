import { db } from "@/config";
import { Doctors, Medicos, Patients } from "@/config/schema";
import { and, eq, ne } from "drizzle-orm";
import { toast } from "sonner";
import { create } from "zustand";
export const useStaffStore = create((set, get) => ({
    loading: false,
    error: null,
    staff: null,
    isCheckingStaff: false,
    isAuthenticated: false,
    patients: [],
    patient: null,

    registerDoctor: async (input) => {
        try {
            set({ loading: true, error: null, navigate: false });
            if (!input.name || !input.email || !input.hospital || !input.experience || !input.specialization || !input.password || !input.city) {
                toast.error("Fill in all the fields")
                return false;
            }

            const user = await db.select().from(Doctors).where(eq(input.email, Doctors.email));
            if (user[0]) {
                toast.error("User already exists..")
                return false;
            }
            const response = await db.insert(Doctors).values({
                name: input.name,
                hospital: input.hospital,
                city: input.city,
                email: input.email,
                experience: input.experience,
                specialization: input.specialization,
                password: input.password
            })
            if (response) {
                toast.success("Doctor account created successfully");
                set({ error: null, staff: response[0] })
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
            if (!input.name || !input.email || !input.hospital || !input.experience || !input.password || !input.city) {
                toast.error("Fill in all the fields")
                set({ navigate: false })
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
                password: input.password,
                city: input.city
            })
            if (response) {
                toast.success("Medicos account created successfully");
                set({ error: null })
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
                        set({ error: null });
                        localStorage.setItem('staff', JSON.stringify(user[0]))
                        set({ error: null, staff: user[0] });

                    } else {
                        toast.error("Incorrect password");
                        set({ error: null })
                        return;
                    }
                }
                else {
                    toast.error("User does not exist");
                    return;
                }
            }
            else {
                const user = await db.select().from(Medicos).where(eq(input.email, Medicos.email));
                if (user[0]) {
                    if (user[0].password === input.password) {
                        toast.success("Login successful");
                        localStorage.setItem('staff', JSON.stringify(user[0]))
                        set({ error: null, staff: user[0] });
                    }
                    else {
                        toast.error("Incorrect Password");
                        set({ error: null })
                        return;
                    }
                }
                else {
                    toast.error("User does not exist");
                    return;
                }
            }
        } catch (error) {
            toast.error("Error Logging In");
            set({ error: error });
        }
        finally {
            set({ loading: false })
        }
    },

    checkStaff: () => {
        set({ isCheckingStaff: true, error: null })
        try {
            const response = localStorage.getItem('staff');
            if (response) {
                set({ staff: JSON.parse(response), isAuthenticated: true })
            }
            else {
                set({ staff: null, isAuthenticated: false })
            }
        } catch (error) {
            set({ staff: null, error: error, isCheckingStaff: false })
        }
        finally {
            set({ isCheckingStaff: false })
        }
    },

    logout: () => {
        localStorage.removeItem('staff');
        set({ staff: null, isAuthenticated: false })
    },

    getPatients: async () => {
        set({ loading: true, error: null });
        try {
            const today = new Date();
            const response = await db.select().from(Patients).where(and(eq(Patients.appointmentDate, today), eq(Patients.address, get().staff.city), eq(Patients.hospital, get().staff.hospital)));
            if (response) {
                set({ loading: false, error: null, patients: response });
            }
            else {
                set({ loading: false, error: null, patients: [] });
            }
        } catch (error) {
            set({ loading: false, error: error.message });
        }
        finally {
            set({ loading: false });
        }
    },

    getPatientbyId: async (id) => {
        set({ loading: true, error: null });
        try {
            const response = await db.select().from(Patients).where(eq(Patients.id, id));
            if (response[0]) {
                set({ loading: false, error: null, patient: response[0] });
            }
            else {
                set({ loading: false, error: null, patient: null });
            }
        } catch (error) {
            set({ loading: false, error: error.message });
        }
        finally {
            set({ loading: false });
        }
    },

    getCheckedPatients: async () => {
        set({ loading: true, error: null });
        try {
            const response = await db.select().from(Patients).where(ne(Patients.medicines, null));
            if (response) {
                set({ loading: false, error: null, patients: response });
            }
            else {
                set({ loading: false, error: null, patients: [] });
            }
        } catch (error) {
            set({ loading: false, error: error.message });
        }
        finally {
            set({ loading: false });
        }
    },

    appointPatient: async (input, patientId) => {
        set({ loading: true, error: null });
        try {
            const stringInput = JSON.stringify(input);
            const response = await db.update(Patients).set({ medicines: stringInput, isAppointed: true }).where(eq(Patients.id, patientId));
            if (response) {
                await db.update(Doctors).set({ patientsAppointed: get().staff.patientsAppointed + 1 }).where(eq(Doctors.email, get().staff.email));
                set({ loading: false, error: null });
                toast.success("Patient has been appointed successfully");
            }
            else {
                set({ loading: false, error: null });
                toast.error("Error in appointing patient");
            }
        } catch (error) {
            set({ loading: false, error: error.message });
            toast.error("Error in appointing patient");
        }
        finally {
            set({ loading: false });
        }
    },

    

}));