export interface ISubject {
    subjectName?: string,
    subjectCode?: string,
    subjectDescription?: string,
    subjectSyllabus?: Blob,
    classCode?: string,

}

export interface ISubjects {
    subjects?: ISubject[]
}