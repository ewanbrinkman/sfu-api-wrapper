export enum DeliveryMethod {
    InPerson = 'In Person',
    DistanceEducation = 'Distance Education',
}

export enum DegreeLevel {
    Undergraduate = 'UGRD',
    Graduate = 'GRAD',
}

export enum Enrollment {
    EnrollmentSection = 'e',
    NonEnrollment = 'n',
}

export enum InstructorRole {
    PrimaryInstructor = 'PI',
    SecondaryInstructor = 'SI',
}

export interface RawAPIResponseInstructor {
    profileUrl: string;
    commonName?: string;
    firstName: string;
    lastName: string;
    phone: string;
    roleCode: InstructorRole;
    name: string;
    officeHours: string;
    office: string;
    email: string;
}

export interface Instructor {
    profileUrl: string;
    commonName?: string;
    firstName: string;
    lastName: string;
    phone: string;
    role: InstructorRole;
    name: string;
    officeHours: string;
    office: string;
    email: string;
}

export enum Day {
    Monday = 'Mo',
    Tuesday = 'Tu',
    Wednesday = 'We',
    Thursday = 'Th',
    Friday = 'Fr',
    Saturday = 'Sa',
    Sunday = 'Su',
}

export enum Campus {
    Burnaby = 'Burnaby',
    Surrey = 'Surrey',
    Vancouver = 'Vancouver',
}

export enum SectionCode {
    Lecture = 'LEC',
    Tutorial = 'TUT',
    Lab = 'LAB',
    Seminar = 'SEM',
}

export interface RawAPIResponseSchedulePart {
    roomNumber: number;
    endDate: string;
    campus: Campus;
    buildingCode: string;
    days: string;
    sectionCode: SectionCode;
    startTime: string;
    isExam: boolean;
    endTime: string;
    startDate: string;
}
export type RawAPIResponseSchedule = RawAPIResponseSchedulePart[];

export interface SchedulePart {
    roomNumber: number;
    endDate: string;
    campus: Campus;
    buildingCode: string;
    days: Day[];
    sectionCode: SectionCode;
    startTime: string;
    isExam: boolean;
    endTime: string;
    startDate: string;
}
export type Schedule = SchedulePart[];

export interface CourseGradingScheme {
    description: string;
    weight: number;
}

export interface Textbook {
    details: string;
}

export interface Course {
    title: string;
    name: string;
    department: string;
    number: number;
    section: string;
    units: number;
    degreeLevel: DegreeLevel;
    description: string;
    details: string;
    designation: string;
    materials: string;
    prerequisites: string;
    corequisites: string;
    requirements: string;
    educationalGoals: string;
    specialTopic: string;
    instructors: Instructor[];
    deliveryMethod: DeliveryMethod;
    term: string;
    schedule: Schedule;
    type: Enrollment;
    gradingScheme?: CourseGradingScheme;
    internal: {
        outlinePath: string;
        number: number;
    };
    notes: {
        general: string;
        grading: string;
        registrar: string;
        requiredReading: string;
        departmentalUndergraduateNotes: string;
        short?: string;
    };
    text: {
        required?: Textbook[];
        recommended?: Textbook[];
    };
}

export interface RawAPIResponseCourse {
    info: {
        educationalGoals: string;
        notes: string;
        deliveryMethod: DeliveryMethod;
        description: string;
        section: string;
        units: number;
        title: string;
        type: Enrollment;
        classNumber: number;
        departmentalUgradNotes: string;
        prerequisites: string;
        number: number;
        requiredReadingNotes: string;
        registrarNotes: string;
        shortNote?: string;
        outlinePath: string;
        term: string;
        requirements: string;
        gradingNotes: string;
        corequisites: string;
        dept: string;
        degreeLevel: DegreeLevel;
        specialTopic: string;
        courseDetails: string;
        materials: string;
        name: string;
        designation: string;
    };
    instructor: RawAPIResponseInstructor[];
    courseSchedule: RawAPIResponseSchedule;
    grades?: CourseGradingScheme;
    requiredText?: Textbook[];
    recommendedText?: Textbook[];
}