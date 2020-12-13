export interface ITeacher {
    name?: string,
    surname?: string,
    regnumber?: string,
    classtag?: string,
    nationalid?: string

}

export interface ITeachers{
    teachers?: ITeacher[];
}