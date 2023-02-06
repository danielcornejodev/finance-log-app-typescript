//format method should return a string. If a class uses HasFormatter interface, it must use the format method. 
export interface HasFormatter {
    format(): string;
}