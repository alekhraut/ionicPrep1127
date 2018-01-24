export class User {

  public id: number;
  public username: string;
  public firstName: string;
  public lastName: string;
  public dateOfBirth: Date;
  public email: string;
  public mobileNumber: string;
  // public gender: Gender;
  public coordinatorName: string;
  public physicianName: string;
  // public role: Roles;
  public permissions: string[];
  // public status: UserStatus;
  public userRoleId: number;
  public locale: string;
  public region: string;
  public site: string;
  public study: string;
  public isLocked: boolean;
  public isActive: boolean;
  public questionnairesAttempted: boolean;
  public allowedNoOfDays: number;
  public isDiaryAssigned: boolean;
  public isQuestionnaireAssigned: boolean;
  public siteId: number;

  constructor() { }

}
