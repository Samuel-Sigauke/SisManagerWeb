export interface IStudent {
    name?: string,
    surname?: string,
    dateofbirth?: Date,
    studentnumber?: string,
    classtag?: string,

}

export interface IStudents {
    students?: IStudent[]
}