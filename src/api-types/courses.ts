import type {
    SectionCode,
    RawApiCourseBase,
    ProcessedApiCourseBase,
} from '@api-types';

export enum CourseType {
    Lecture = 'lecture',
    Tutorial = 'tut', // Tutorial is 'tut', not 'tutorial'.
    Lab = 'lab',
    Seminar = 'SEM', // Seminar is 'SEM', not 'seminar'.
}

export interface RawApiSection {
    number: string; // number here is actually section (ex. "D100").
    value: string; // If number is "D100", then value is "d100".
    classStatus: 'a'; // Don't know what the possible values of this is.
    classType: CourseType;
    sectionCode: SectionCode;
    associatedClass: number;
}

export interface RawApiCourse extends RawApiCourseBase {
    recommended: string;
    sections: RawApiSection[];
}

export interface ProcessedApiSection {
    sectionName: string; // number here is actually section (ex. "D100").
    section: string; // If number is "D100", then value is "d100".
    status: 'a'; // Don't know what the possible values of this is.
    type: CourseType;
    sectionCode: SectionCode;
    associatedCourse: number;
}

export interface ProcessedApiCourse extends ProcessedApiCourseBase {
    recommended: string;
    sections: ProcessedApiSection[];
}
