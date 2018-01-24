import { Injectable } from '@angular/core';

@Injectable()
export class ApiConstants {

  public static readonly login: string = 'login';
  public static readonly logout: string = 'logout';
  public static readonly register: string = 'register';
  public static readonly regions: string = 'regions';
  public static readonly patient: string = 'patient';
  public static readonly event: string = 'event';
  public static readonly session_details: string = 'session-details';
  public static readonly site: string = 'sitestaff';
  public static readonly patient_profile: string = 'patient-profile';
  public static readonly csrf_token = 'csrf-token';

  /* Forgot password */
  public static readonly forgot_password: string = 'forgot-password';
  public static readonly set_password: string = 'set-password';
  public static readonly passwordSet: string = 'password/set';
  public static readonly password: string = 'password';
  public static readonly verify: string = 'verify';
  public static readonly verifyUrl: string = 'password/verify';

  /* Questionnaire Dashboard Page */
  public static readonly eventList: string = 'events';
  public static readonly getQuestionnaire: string = 'questionnaire';
  public static readonly timelineData: string = 'questionnaire/status-by-date';
  public static readonly patientProfileUpdateFlag: string = 'first-time-login';

  /* Questionnaire Details Page */
  public static readonly getQuestions: string = 'questionnaire/questions';
  public static readonly saveQuestionnaireResponse: string = 'questionnaire/saveresponse';

  /* Daily Diary Page */
  public static readonly monthlyPatientData: string = 'diary/monthly';
  public static readonly weeklyPatientData: string = 'diary/weekly';
  public static readonly symptomsHistory: string = 'diary';
  public static readonly symptomsHistoryPages: string = 'page';
  public static readonly symptomsHistorySize: string = 'size';
  public static readonly symptomsZoomview: string = 'zoomview';
  public static readonly patientDiary: string = 'patientdiary';
  public static readonly diarySymptoms: string = 'symptoms';
  public static readonly search: string = 'search';
  public static readonly update: string = 'update';
  public static readonly medications: string = 'medications';
  public static readonly occurrencePattern: string = 'graph/occurrencepattern';
  public static readonly durationPattern: string = 'graph/duration';
  public static readonly symptom: string = 'symptom';
  public static readonly options: string = 'options';
  public static readonly form_metadata: string = 'form-metadata';

  /* Profile my-information page*/
  public static readonly profile: string = 'profile';
  public static readonly scprofile: string = 'scprofile';
  public static readonly resetPassword: string = 'reset-password';
  public static readonly withdraw: string = 'withdrawal-notification';
  public static readonly editInfo: string = 'update';

  /*Profile my-medication page*/
  public static readonly medicationDetails: string = 'medication-details';
  public static readonly allMedicines: string = 'all-medications';
  public static readonly medication: string = 'medication';
  public static readonly savedetails: string = 'save';
  public static readonly updateDetails: string = 'update';
  public static readonly current: string = 'CURRENT';
  public static readonly past: string = 'PAST';
  public static readonly patientMedication: string = 'patient-medication';
  public static readonly deleteMedication: string = 'delete';
  public static readonly moveToPast: string = 'move-to-past';

  /*Profile my-medication page*/
  public static readonly sitestaff: string = 'sitestaff';
  public static readonly invite: string = 'invite';
  /*Pteint list sample data */
  public static readonly sampledata = 'testdata';

  /*consentReminder*/
  public static readonly consentReminder = 'pendingconsent/notification';
  public static readonly saveConsentReminder = 'save';

  /*Patient details service*/
  public static readonly assign = 'assign';
  public static readonly master_data = 'master-data';

  /*consent Management*/
  public static readonly consentManagement: string = 'consentManagement';
  public static readonly download: string = 'download';
  public static readonly downloadform: string = 'download';
  public static readonly patientConsent: string = 'patientConsent';
  public static readonly reconsent: string = 'reconsent';

  /*Physican List*/
  public static readonly physicians = 'physicians';

  /*  Site staff site Settings */
  public static readonly siteSettings = 'site-settings';
  public static readonly saveData = 'save';
  public static readonly add = 'add';
  public static readonly sc = 'sc';
  public static readonly investigator = 'investigator';
  public static readonly delete = 'delete';
  public static readonly edit = 'edit';

  /* Site-Staff set notification rules. */
  public static readonly notificationRules = 'rules';
  public static readonly notificationRulesSave = 'save';

  /* Site-Staff Dashboard. */
  public static readonly dashboard = 'dashboard';
  public static readonly currentMonthSummary = 'current-month-summary';
  public static readonly patients = 'patients';
  public static readonly diaryCompletionStatus = 'diary-status';
  public static readonly dashboardGraphsData = 'dashboard-graphs-data';
  public static readonly dashboardPatientSummary = 'dashboard-patient-summary';

  /* Patient Dashboard. */
  public static readonly questionnaireDropDown = 'questionnaireDropDown';
  public static readonly questionnaireEvent = 'questionnaireEvent';
  public static readonly pendingQuestionnaire = 'pendingQuestionnaire';
  public static readonly completionScore = 'completionScore';
  public static readonly contacts = 'contacts';
  public static readonly dairyCompleted = 'dairyCompleted';

  /*  Error handler */
  public static readonly badRequest = 'Bad Request';
  public static readonly apiNotFound = 'API not found';
  public static readonly sessionHasTimedOut = 'Session has timed out';
  public static readonly serviceUnavailable = 'Service Unavailable';
  public static readonly someOtherError = 'Some other error';

  /*Ehr*/
  public static readonly ehr = 'ehr';
  public static readonly language = 'language';
  public static readonly demography = 'demography';
  public static readonly guardian = 'guardian';

  public static readonly fourHundredFour = 404;
  public static readonly fourHundredOne = 401;
  public static readonly fourHundred = 400;
  public static readonly fourHundredThree = 403;
  public static readonly fourHundredFourty = 440;
  public static readonly fiveHundred = 500;
  public static readonly fiveHundredThree = 503;

  /*Site- report data */
  public static readonly siteReportedData = 'sitereportdata';
  public static readonly loadsitedata = 'loadsitedata';
  public static readonly addsitedataform = 'addsitedataform';
  public static readonly questions = 'questions';
  public static readonly questionnaire = 'questionnaire';
  public static readonly patientQuestionnaire = 'patientquestionnaire';
  public static readonly deleteSiteData = 'deletesitedata';

  /*Header*/

  public static readonly notifications = 'notifications';
}
