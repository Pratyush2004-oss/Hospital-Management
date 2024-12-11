import { date, integer, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const Doctors = pgTable("doctors",
    {
        id: serial("id").primaryKey(),
        name: text("name").notNull(),
        specialization: text("specialization").notNull(),
        experience: integer("experience").notNull().default(0),
        hospital: varchar("hospital").notNull(),
        email: varchar("email").notNull().unique(),
        password: varchar("password").notNull(),
        loginType: varchar("loginType").notNull().default("doctor"),
    }
)

export const Patients = pgTable("patients",
    {
        id: serial("id").primaryKey(),
        name: text("name").notNull(),
        age: integer("age").notNull(),
        gender: text("gender").notNull(),
        address: text("address").notNull(),
        problem: varchar("problem").notNull(),
        mobile: varchar("mobile").notNull().unique(),
        appointmentDate: date("appointmentDate").notNull(),
        medicines: varchar("medicines"),
    }
)

export const Medicos = pgTable("medicos",
    {
        id: serial("id").primaryKey(),
        name: text("name").notNull(),
        experience: integer("experience").notNull().default(0),
        hospital: varchar("hospital").notNull(),
        email: varchar("email").notNull().unique(),
        password: varchar("password").notNull(),
        loginType: varchar("loginType").notNull().default("medicos"),
    }
)