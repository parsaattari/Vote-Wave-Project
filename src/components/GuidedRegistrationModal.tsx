import React, { useState } from 'react';
import { X, ArrowRight, HelpCircle } from 'lucide-react';
import { StateData, Language } from '../types';
import { useTranslation } from '../translations';
import RegistrationReferenceModal from './RegistrationReferenceModal';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  selectedState: StateData;
  language: Language;
}

interface FormData {
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
}

export default function GuidedRegistrationModal({ isOpen, onClose, selectedState, language }: Props) {
  const t = useTranslation(language);
  const [step, setStep] = useState(1);
  const [showReference, setShowReference] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    citizenship: false,
    age: false,
    resident: false,
    firstName: '',
    lastName: '',
    middleName: '',
    dateOfBirth: '',
    gender: '',
    preferredName: '',
    residentialAddress: '',
    apartment: '',
    city: '',
    county: '',
    state: selectedState.id.toUpperCase(),
    zipCode: '',
    mailingAddress: '',
    phone: '',
    email: '',
    felony: false,
    felonyRestored: false,
    mentalIncompetent: false,
    race: '',
    party: '',
    language: language,
    driversLicense: '',
    ssn: ''
  });

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // Open registration URL in new tab with form data ready
    window.open(selectedState.registrationUrl, '_blank');
    // Show reference modal but don't close the main modal
    setShowReference(true);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold mb-4">Citizenship & Basic Eligibility</h3>
            {['citizenship', 'age', 'resident'].map((field) => (
              <div key={field} className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  {t(`guided.${field}`)}
                </label>
                <div className="flex space-x-4">
                  {['yes', 'no'].map((answer) => (
                    <label key={answer} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name={field}
                        checked={formData[field] === (answer === 'yes')}
                        onChange={() => handleInputChange({
                          target: { name: field, value: answer === 'yes' }
                        } as any)}
                        className="text-indigo-600"
                      />
                      <span>{t(`guided.${answer}`)}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('guided.firstName')}</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('guided.lastName')}</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('guided.middleName')}</label>
                <input
                  type="text"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('guided.gender')}</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange as any}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">{t('guided.select')}</option>
                  <option value="M">{t('guided.gender.male')}</option>
                  <option value="F">{t('guided.gender.female')}</option>
                  <option value="X">{t('guided.gender.other')}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('guided.preferredName')}</label>
                <input
                  type="text"
                  name="preferredName"
                  value={formData.preferredName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t('guided.dateOfBirth')}</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t('guided.residentialAddress')}</label>
              <input
                type="text"
                name="residentialAddress"
                value={formData.residentialAddress}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('guided.apartment')}</label>
                <input
                  type="text"
                  name="apartment"
                  value={formData.apartment}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('guided.city')}</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('guided.county')}</label>
                <input
                  type="text"
                  name="county"
                  value={formData.county}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('guided.zipCode')}</label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t('guided.mailingAddress')}</label>
              <input
                type="text"
                name="mailingAddress"
                value={formData.mailingAddress}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('guided.phone')}</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('guided.email')}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold mb-4">Legal Status & Restrictions</h3>
            <div className="space-y-4">
              {[
                { field: 'felony', showRestored: true },
                { field: 'mentalIncompetent', showRestored: false }
              ].map(({ field, showRestored }) => (
                <div key={field} className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    {t(`guided.${field}`)}
                  </label>
                  <div className="flex space-x-4">
                    {['yes', 'no'].map((answer) => (
                      <label key={answer} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name={field}
                          checked={formData[field] === (answer === 'yes')}
                          onChange={() => handleInputChange({
                            target: { name: field, value: answer === 'yes' }
                          } as any)}
                          className="text-indigo-600"
                        />
                        <span>{t(`guided.${answer}`)}</span>
                      </label>
                    ))}
                  </div>
                  {showRestored && formData[field] && (
                    <div className="mt-4 ml-6">
                      <label className="block text-sm font-medium text-gray-700">
                        {t('guided.felonyRestored')}
                      </label>
                      <div className="flex space-x-4 mt-2">
                        {['yes', 'no'].map((answer) => (
                          <label key={answer} className="flex items-center space-x-2">
                            <input
                              type="radio"
                              name="felonyRestored"
                              checked={formData.felonyRestored === (answer === 'yes')}
                              onChange={() => handleInputChange({
                                target: { name: 'felonyRestored', value: answer === 'yes' }
                              } as any)}
                              className="text-indigo-600"
                            />
                            <span>{t(`guided.${answer}`)}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Additional & Optional Information</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t('guided.race')}</label>
              <input
                type="text"
                name="race"
                value={formData.race}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t('guided.party')}</label>
              <input
                type="text"
                name="party"
                value={formData.party}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t('guided.language')}</label>
              <select
                name="language"
                value={formData.language}
                onChange={handleInputChange as any}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t('guided.driversLicense')}</label>
              <input
                type="text"
                name="driversLicense"
                value={formData.driversLicense}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t('guided.ssn')}
                <HelpCircle className="inline-block w-4 h-4 ml-1 text-gray-400" />
              </label>
              <input
                type="password"
                name="ssn"
                maxLength={4}
                value={formData.ssn}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="fixed inset-0 bg-black/50" onClick={onClose} />
          
          <div className="relative bg-white rounded-xl shadow-xl max-w-2xl w-full p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">{t('guided.title')}</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Progress Indicator */}
            <div className="mb-8">
              <div className="flex justify-between">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className={`w-1/5 h-2 rounded-full ${
                      i <= step ? 'bg-indigo-600' : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-sm text-gray-600">{t('guided.step1')}</span>
                <span className="text-sm text-gray-600">{t('guided.step2')}</span>
                <span className="text-sm text-gray-600">{t('guided.step3')}</span>
                <span className="text-sm text-gray-600">{t('guided.step4')}</span>
                <span className="text-sm text-gray-600">{t('guided.step5')}</span>
              </div>
            </div>

            {/* Form Content */}
            <div className="mb-8">
              {renderStep()}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <button
                onClick={() => setStep(step - 1)}
                disabled={step === 1}
                className={`px-6 py-2 rounded-lg ${
                  step === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {t('guided.back')}
              </button>
              <button
                onClick={() => {
                  if (step === 5) handleSubmit();
                  else setStep(step + 1);
                }} disabled={step === 1 && (!formData.citizenship || !formData.age || !formData.resident)}
                className="flex items-center space-x-2 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
              >
                <span>{step === 5 ? t('guided.complete') : t('guided.next')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {showReference && (
        <RegistrationReferenceModal
          isOpen={true}
          onClose={() => setShowReference(false)}
          formData={formData}
        />
      )}
    </>
  );
}