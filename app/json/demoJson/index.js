import React from 'react';

import {
  IcMan,
  IcAppointment,
  IcJournal,
  IcPills,
  IcLogout,
  IcHelp,
  IcProfile,
} from 'theme';

export const MainProfileDetail = [
  {
    label: '1',
    value: 'My Appointments',
    valueTx: 'profileOptions.my_appointments',
    svg: IcAppointment,
    selectedCard: false,
  },
  {
    label: '2',
    value: 'My Medication',
    valueTx: 'profileOptions.my_medication',
    svg: IcPills,
    selectedCard: false,
  },
  {
    label: '3',
    value: 'My Care Giver',
    valueTx: 'profileOptions.my_care_giver',
    svg: IcAppointment,
    selectedCard: false,
  },
  {
    label: '4',
    value: 'Medical Journal Lists',
    valueTx: 'profileOptions.medical_journal_lists',
    svg: IcJournal,
    selectedCard: false,
  },
  {
    label: '5',
    value: 'Symptom Checker',
    valueTx: 'profileOptions.symptom_checker',
    svg: IcMan,
    selectedCard: false,
  },
  {
    label: '6',
    value: 'Account Settings',
    valueTx: 'profileOptions.account_settings',
    svg: IcProfile,
    selectedCard: false,
  },
  {
    label: '7',
    value: 'Other Details',
    valueTx: 'profileOptions.other_details',
    svg: IcJournal,
    selectedCard: false,
  },
  {
    label: '8',
    value: 'Help',
    valueTx: 'profileOptions.help',
    svg: IcHelp,
    selectedCard: false,
  },
  {
    label: '9',
    value: 'Logout',
    valueTx: 'profileOptions.logout',
    svg: IcLogout,
    selectedCard: false,
  },
];

export const DWMYData = [
  {id: 1, value: 'D', selected: true},
  {id: 2, value: 'W', selected: false},
  {id: 3, value: 'M', selected: false},
  {id: 4, value: 'Y', selected: false},
];

export const MedicalJournalListJson = [
  {id: 1, date: '01/05/2022', time: '3.33 PM', description: 'Drink water'},
  {
    id: 2,
    date: '22/02/2022',
    time: '7.11 PM',
    description: 'Eat only vegetables',
  },
  {id: 3, date: '01/09/2021', time: '2.00 PM', description: 'Walking'},
];
