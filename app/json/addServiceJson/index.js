import {
  IcHeartNew1,
  IcIcon2,
  IcIcon3,
  IcIcon4,
  IcIcon5,
  IcIcon6,
  IcIcon7,
  IcIcon8,
  IcIcon9,
  IcIcon10,
  IcIcon11,
  size,
  color,
} from 'theme';

// export const addServiceData = [
//   {
//     name: 'Vitals',
//     serviceSlug: 'vitals',
//     subCategory: [
//       {
//         name: 'Resting Heart Rate',
//         icon: IcHeartNew1,
//         unit: 'BPM',
//       },
//       {
//         name: 'Respiratory Rate',
//         icon: IcIcon2,
//         unit: 'B/Min',
//       },
//       {
//         name: 'Body Temperature',
//         icon: IcIcon3,
//         unit: '`F`',
//       },
//       {
//         name: 'Oxygen Saturation',
//         icon: IcIcon4,
//         unit: '%',
//       },
//       {
//         name: 'Blood Glycose',
//         icon: IcIcon5,
//         unit: 'mmol/L',
//       },
//       {
//         name: 'Meal Time',
//         icon: IcIcon6,
//         unit: '',
//       },
//     ],
//   },
//   {
//     name: 'Measurements',
//     serviceSlug: 'measurements',
//     subCategory: [
//       {
//         name: 'Height ',
//         icon: IcIcon7,
//         unit: 'in/ft',
//       },
//       {
//         name: 'Weight ',
//         icon: IcIcon8,
//         unit: 'Kg',
//       },
//       {
//         name: 'BMI',
//         icon: IcIcon9,
//         unit: '',
//       },
//     ],
//   },
//   {
//     name: 'Activity',
//     serviceSlug: 'activity',
//     subCategory: [
//       {
//         name: 'Sleep',
//         icon: IcIcon10,
//         unit: '',
//       },
//       {
//         name: 'Steps',
//         icon: IcIcon11,
//         unit: 'Steps',
//       },
//     ],
//   },
//   {
//     name: 'Others',
//     serviceSlug: 'others',
//     subCategory: [
//       {
//         name: 'Allergies ',
//       },
//       {
//         name: 'Menstruation',
//       },
//       {
//         name: 'Alcohol Consumption',
//       },
//       {
//         name: 'Inhaler Usage',
//       },
//       {
//         name: 'Sexual Activity',
//       },
//       {
//         name: 'Toothbrushing',
//       },
//     ],
//   },
//   {
//     name: 'Care giver',
//     serviceSlug: 'care',
//     subCategory: [
//       {
//         name: 'First name ',
//       },
//       {
//         name: 'Last name',
//       },
//       {
//         name: 'Contact Phone',
//       },
//       {
//         name: 'Email ID',
//       },
//       {
//         name: 'Nick name',
//       },
//     ],
//   },
//   {
//     name: 'Medication',
//     serviceSlug: 'medication',
//     navigateScreen: 'medicationReminderScreen',
//     subCategory: [],
//   },
//   {
//     name: 'Appointments',
//     serviceSlug: 'appointments',
//     navigateScreen: 'appointmentReminderScreen',
//     subCategory: [],
//   },
//   {
//     name: 'Symptoms check',
//     serviceSlug: 'symptoms',
//     navigateScreen: 'symptomsScreen',
//     subCategory: [],
//   },
//   {
//     name: 'Medical Journal',
//     serviceSlug: 'medical journal',
//     navigateScreen: 'medicalJournalScreen',
//     subCategory: [],
//   },
// ];

export const AddNavData = [
  {id: 1, name: 'Vitals', selected: true, nameTx: 'addNavData.vitals'},
  {
    id: 2,
    name: 'Measurements',
    selected: false,
    nameTx: 'addNavData.measurements',
  },
  {id: 3, name: 'Activity', selected: false, nameTx: 'addNavData.activity'},
  {id: 4, name: 'Others', selected: false, nameTx: 'addNavData.others'},
  {id: 5, name: 'Care Giver', selected: false, nameTx: 'addNavData.care_giver'},
  {
    id: 6,
    name: 'Medications',
    selected: false,
    nameTx: 'addNavData.medications',
  },
  {
    id: 7,
    name: 'Appointments',
    selected: false,
    nameTx: 'addNavData.appointments',
  },
  // {id: 8, name: 'Symptoms Check', selected: false},
  {
    id: 9,
    name: 'Medical Journal',
    selected: false,
    nameTx: 'addNavData.medical_journal',
  },
];
