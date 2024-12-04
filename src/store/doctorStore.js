import { db } from "@/config";

export const useDoctorStore = create((set) => ({
    loading: false,
    error: null,
    
    register: async (input) => {
        try {
            set({ loading: true, error: null });
                        
        } catch (error) {
            
        }
    }
}));