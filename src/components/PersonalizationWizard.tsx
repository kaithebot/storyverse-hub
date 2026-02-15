'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Sparkles, BookOpen, User, Palette, Gift } from 'lucide-react';

interface WizardStep {
  id: number;
  title: string;
  icon: React.ReactNode;
  question: string;
  options: string[];
}

const steps: WizardStep[] = [
  {
    id: 1,
    title: "Qui est le héros ?",
    icon: <User className="w-6 h-6" />,
    question: "Quel est le prénom de l'enfant ?",
    options: []
  },
  {
    id: 2,
    title: "Quelle aventure ?",
    icon: <BookOpen className="w-6 h-6" />,
    question: "Quel type d'histoire préfère l'enfant ?",
    options: [
      "🚀 Espace & Astronautes",
      "🏴‍☠️ Pirates & Trésors", 
      "👸 Princesses & Châteaux",
      "🦸 Super-héros & Aventures",
      "🦁 Animaux & Nature",
      "🏎️ Courses & Vitesse"
    ]
  },
  {
    id: 3,
    title: "Le style",
    icon: <Palette className="w-6 h-6" />,
    question: "Quel style d'illustration préférez-vous ?",
    options: [
      "🎨 Aquarelle douce",
      "✏️ Dessin animé moderne",
      "🖼️ Classique & Détaillé",
      "🌈 Coloré & Fun",
      "🎭 Artistique & Unique"
    ]
  },
  {
    id: 4,
    title: "L'occasion",
    icon: <Gift className="w-6 h-6" />,
    question: "C'est pour quelle occasion ?",
    options: [
      "🎂 Anniversaire",
      "🎄 Noël",
      "🎉 Fête spéciale",
      "💝 Juste comme ça",
      "📚 Pour encourager la lecture"
    ]
  }
];

export default function PersonalizationWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [childName, setChildName] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSelect = (option: string) => {
    setAnswers({ ...answers, [steps[currentStep].id]: option });
    setTimeout(handleNext, 300);
  };

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (childName.trim()) {
      setAnswers({ ...answers, [steps[0].id]: childName });
      handleNext();
    }
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  if (isComplete) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-8 text-center"
      >
        <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <Sparkles className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          ✨ Votre histoire est prête !
        </h2>
        <p className="text-gray-600 mb-6">
          Nous avons créé une aventure parfaite pour <strong>{answers[1]}</strong>
        </p>
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 mb-6">
          <h3 className="font-semibold text-purple-800 mb-2">Récapitulatif :</h3>
          <ul className="text-left text-gray-700 space-y-2">
            <li>👤 Héros : {answers[1]}</li>
            <li>📖 Thème : {answers[2]}</li>
            <li>🎨 Style : {answers[3]}</li>
            <li>🎁 Occasion : {answers[4]}</li>
          </ul>
        </div>
        <button
          onClick={() => window.location.href = '/create'}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all"
        >
          Créer le livre maintenant
        </button>
      </motion.div>
    );
  }

  const step = steps[currentStep];

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Étape {currentStep + 1} sur {steps.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-600 to-pink-600"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Main Card */}
      <motion.div
        key={step.id}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        className="bg-white rounded-3xl shadow-2xl p-8"
      >
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white">
            {step.icon}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{step.title}</h2>
            <p className="text-gray-500">{step.question}</p>
          </div>
        </div>

        {/* Content */}
        {step.id === 1 ? (
          // Name input for first step
          <form onSubmit={handleNameSubmit} className="space-y-4">
            <input
              type="text"
              value={childName}
              onChange={(e) => setChildName(e.target.value)}
              placeholder="Entrez le prénom..."
              className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
              autoFocus
            />
            <button
              type="submit"
              disabled={!childName.trim()}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              Continuer <ChevronRight className="w-5 h-5" />
            </button>
          </form>
        ) : (
          // Option buttons for other steps
          <div className="grid grid-cols-1 gap-3">
            {step.options.map((option, index) => (
              <motion.button
                key={index}
                onClick={() => handleSelect(option)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-4 text-left rounded-xl border-2 transition-all ${
                  answers[step.id] === option
                    ? 'border-purple-500 bg-purple-50'
                    : 'border-gray-200 hover:border-purple-300'
                }`}
              >
                <span className="text-lg">{option}</span>
              </motion.button>
            ))}
          </div>
        )}

        {/* Navigation */}
        {currentStep > 0 && (
          <button
            onClick={handlePrev}
            className="mt-6 text-gray-500 hover:text-purple-600 flex items-center gap-2 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" /> Retour
          </button>
        )}
      </motion.div>

      {/* Helper Text */}
      <p className="text-center text-gray-500 mt-6 text-sm">
        💡 Cela prend moins de 2 minutes et votre livre sera créé sur mesure
      </p>
    </div>
  );
}
