import React from 'react';
import { ContactItem } from '@nojsja/react-chat';
import { contact } from './displayData';
import DisplayWrapper from './DisplayWrapper';
import { jsx as _jsx } from 'react/jsx-runtime';
export default function DemoContactList() {
  return /*#__PURE__*/ _jsx(DisplayWrapper, {
    children: /*#__PURE__*/ _jsx(ContactItem, {
      contact: contact,
    }),
  });
}
