import React from 'react';
import { X, Copy } from 'lucide-react';
import { useTranslation } from '../translations';
import { Language } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  formData: {
    // Eligibility
    citizenship: boolean;
    age: boolean;
    resident: boolean;
    
    // Personal Info
    firstName: string;
    lastName: string;
    middleName: string;
    dateOfBirth: string;
    gender: string;
    preferredName: string;
    
    // Contact Info
    residentialAddress: string;
    apartment: string;
    city: string;
    county: string;
    state: string;
    zipCode: string;
    mailingAddress: string;
    phone: string;
    email: string;
    
    // Legal Status
    felony: boolean;
    felonyRestored: boolean;
    mentalIncompetent: boolean;
    
    // Additional Info
    race: string;
    party: string;
    language: string;
    driversLicense: string;
    ssn: string;
  };
}

export default function RegistrationReferenceModal({ isOpen, onClose, formData }: Props) {
  const t = useTranslation(formData.language);
  if (!isOpen) return null;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const renderField = (label: string, value: string | boolean) => (
    <div className="flex items-center justify-between py-2 border-b border-gray-100">
      <span className="text-sm text-gray-600">{label}</span>
      <div className="flex items-center space-x-2">
        <span className="font-medium">
          {typeof value === 'boolean' 
            ? (value ? t('guided.yes') : t('guided.no')) 
            : value === 'M' ? t('guided.gender.male')
            : value === 'F' ? t('guided.gender.female')
            : value === 'X' ? t('guided.gender.other')
            : value}
        </span>
        <button
          onClick={() => copyToClipboard(value.toString())}
          className="p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
        >
          <Copy className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-[60] bg-white overflow-hidden">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b bg-white">
          <h3 className="text-xl font-semibold text-gray-900">{t('reference.title')}</h3>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-gray-600 mb-6">
              {t('reference.info')}
            </p>

            {/* Form Fields */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-4">
        {/* Eligibility */}
        {renderField(t('guided.citizenship'), formData.citizenship)}
        {renderField(t('guided.age'), formData.age)}
        {renderField(t('guided.resident'), formData.resident)}
        
        {/* Personal Info */}
        {renderField(t('guided.firstName'), formData.firstName)}
        {renderField(t('guided.lastName'), formData.lastName)}
        {renderField(t('guided.middleName'), formData.middleName)}
        {renderField(t('guided.dateOfBirth'), formData.dateOfBirth)}
        {renderField(t('guided.gender'), formData.gender)}
        {renderField(t('guided.preferredName'), formData.preferredName)}
        
        {/* Contact Info */}
        {renderField(t('guided.residentialAddress'), formData.residentialAddress)}
        {renderField(t('guided.apartment'), formData.apartment)}
        {renderField(t('guided.city'), formData.city)}
        {renderField(t('guided.county'), formData.county)}
        {renderField(t('guided.state'), formData.state)}
        {renderField(t('guided.zipCode'), formData.zipCode)}
        {renderField(t('guided.mailingAddress'), formData.mailingAddress)}
        {renderField(t('guided.phone'), formData.phone)}
        {renderField(t('guided.email'), formData.email)}
        
        {/* Legal Status */}
        {renderField(t('guided.felony'), formData.felony)}
        {formData.felony && renderField(t('guided.felonyRestored'), formData.felonyRestored)}
        {renderField(t('guided.mentalIncompetent'), formData.mentalIncompetent)}
        
        {/* Additional Info */}
        {renderField(t('guided.race'), formData.race)}
        {renderField(t('guided.party'), formData.party)}
        {renderField(t('guided.language'), formData.language === 'en' ? 'English' : 'Español')}
        {renderField(t('guided.driversLicense'), formData.driversLicense)}
        {renderField(t('guided.ssn'), '••••')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}