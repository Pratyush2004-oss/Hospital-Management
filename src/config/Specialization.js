import { LibraryBig, LineChart, MessagesSquare, Shield } from "lucide-react"

export const specialization = [
    {
        id: 1,
        name: "General Physician",
        value: "General Physician"
    },
    {
        id: 2,
        name: "Cardiologist",
        value: "Cardiologist"
    },
    {
        id: 3,
        name: "Pediatrician",
        value: "Pediatrician"
    },
    {
        id: 4,
        name: "Orthopedist",
        value: "Orthopedist"
    },
    {
        id: 5,
        name: "Dentist",
        value: "Dentist"
    },
    {
        id: 6,
        name: "Gynecologist",
        value: "Gynecologist"
    },
    {
        id: 7,
        name: "Neurologist",
        value: "Neurologist"
    },
    {
        id: 8,
        name: "Psychiatrist",
        value: "Psychiatrist"
    },
    {
        id: 9,
        name: "Surgeon",
        value: "Surgeon"
    },
    {
        id: 10,
        name: "Urologist",
        value: "Urologist"
    },
    {
        id: 11,
        name: "Ophthalmologist",
        value: "Ophthalmologist"
    },
    {
        id: 12,
        name: "Rheumatologist",
        value: "Rheumatologist"
    },
    {
        id: 13,
        name: "Endocrinologist",
        value: "Endocrinologist"
    },
    {
        id: 14,
        name: "Nephrologist",
        value: "Nephrologist"
    }
]

export const Problem = [
    'Fever',
    'Cough',
    'Shortness of Breath',
    'Fatigue',
    'Headache',
    'Muscle Pain',
    'Sore Throat',
    'Vomiting',
    'Nausea',
    'Diarrhea',
    'Chills',
    'Rashes',
    'Joint Pain',
    'Nasal Congestion',
    'Chest Pain',
    'Diabetes',
    'Hypertension',
    'Asthma',
    'Heart Disease',
    'Kidney Disease',
]

export const MenuList = [
    {
        id: 1,
        name: 'Today\'s Appointments',
        icon: LibraryBig,
        path: '/dashboard'
    },
    {
        id: 2,
        name: 'Appointed Patients',
        icon: MessagesSquare,
        path: '/dashboard/appointed'
    },
    {
        id: 3,
        name: 'Analytics',
        icon: LineChart,
        path: '/dashboard/analytics'
    },
    {
        id: 4,
        name: 'Recommended for Surgery',
        icon: Shield,
        path: '/dashboard/surgeries'
    },
]

export const consumption = [
    "Twice a day: Morning-Evening",
    "Once a day",
    "Morning",
    "Night",
    "Empty Stomach",
]