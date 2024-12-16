import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Story, Language } from '../types';
import { successStories as defaultStories } from '../data/mockData/successStories';
import { useTranslation } from '../translations';

interface Props {
  stories?: Story[];
  language: Language;
}

export default function SuccessStories({ stories = defaultStories, language }: Props) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const t = useTranslation(language);

  const nextStory = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('stories.title')}</h2>
      
      <div className="relative">
        <div className="overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {stories.map((story) => (
              <div
                key={story.id}
                className="w-full flex-shrink-0"
              >
                <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                  <img
                    src={story.imageUrl}
                    alt={t(`stories.${story.id}.title`, { fallback: story.title })}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="text-xl font-bold">
                      {t(`stories.${story.id}.title`, { fallback: story.title })}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-3">
                  {t(`stories.${story.id}.description`, { fallback: story.description })}
                </p>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <p className="text-indigo-700 font-medium">
                    {t('stories.impact')}: {t(`stories.${story.id}.impact`, { fallback: story.impact })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevStory}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <button
          onClick={nextStory}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>

        {/* Dots */}
        <div className="flex justify-center space-x-2 mt-4">
          {stories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-indigo-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}