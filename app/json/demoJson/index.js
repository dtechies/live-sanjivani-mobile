import React from 'react';

import {
  size,
  color,
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
    value: 'Appointments',
    svg: (
      <IcAppointment
        height={size.moderateScale(40)}
        width={size.moderateScale(40)}
        fill={color.blue}
      />
    ),
    selectedCard: false,
  },
  {
    label: '2',
    value: 'Medication Reminder',
    svg: (
      <IcPills
        height={size.moderateScale(40)}
        width={size.moderateScale(40)}
        fill={color.blue}
      />
    ),
    selectedCard: false,
  },
  {
    label: '3',
    value: 'Symptom Checker',
    svg: (
      <IcMan
        height={size.moderateScale(40)}
        width={size.moderateScale(40)}
        fill={color.blue}
      />
    ),
    selectedCard: false,
  },
  {
    label: '4',
    value: 'Medical Journal',
    svg: (
      <IcJournal
        height={size.moderateScale(40)}
        width={size.moderateScale(40)}
        fill={color.blue}
      />
    ),
    selectedCard: false,
  },
  {
    label: '5',
    value: 'Account Settings',
    svg: (
      <IcProfile
        height={size.moderateScale(40)}
        width={size.moderateScale(40)}
        fill={color.blue}
      />
    ),
    selectedCard: false,
  },
  {
    label: '6',
    value: 'Help',
    svg: (
      <IcJournal
        height={size.moderateScale(40)}
        width={size.moderateScale(40)}
        fill={color.blue}
      />
    ),
    selectedCard: false,
  },
  {
    label: '7',
    value: 'Logout',
    svg: (
      <IcHelp
        height={size.moderateScale(40)}
        width={size.moderateScale(40)}
        fill={color.blue}
      />
    ),
    selectedCard: false,
  },
];

export const DWMYData = [
  {id: 1, value: 'D', selected: true},
  {id: 2, value: 'W', selected: false},
  {id: 3, value: 'M', selected: false},
  {id: 4, value: 'Y', selected: false},
];

export const AddNavData = [
  {id: 1, value: 'Vitals', selected: true},
  {id: 2, value: 'Measurements', selected: false},
  {id: 3, value: 'Activity', selected: false},
  {id: 4, value: 'Others', selected: false},
  {id: 5, value: 'Care Giver', selected: false},
  {id: 6, value: 'Medications', selected: false},
  {id: 7, value: 'Appointments', selected: false},
  {id: 8, value: 'Symptoms Check', selected: false},
];
