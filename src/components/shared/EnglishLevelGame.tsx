"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Gamepad2,
  RotateCcw,
  Sparkles,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const questions = [
  {
    question: "Elige la frase correcta:",
    options: [
      { text: "She have a car.", points: 0 },
      { text: "She has a car.", points: 1 },
      { text: "She having a car.", points: 0 },
    ],
  },
  {
    question: "¿Cómo responderías a: “How are you?”",
    options: [
      { text: "I am fine, thank you.", points: 1 },
      { text: "I have fine.", points: 0 },
      { text: "I fine am.", points: 0 },
    ],
  },
  {
    question: "Completa: “I ____ to work every day.”",
    options: [
      { text: "go", points: 1 },
      { text: "goes", points: 0 },
      { text: "going", points: 0 },
    ],
  },
  {
    question: "¿Cuál frase suena más natural?",
    options: [
      { text: "Can you help me, please?", points: 1 },
      { text: "Can help me you, please?", points: 0 },
      { text: "You can please help me?", points: 0 },
    ],
  },
  {
    question: "Completa: “Yesterday, I ____ English.”",
    options: [
      { text: "study", points: 0 },
      { text: "studied", points: 1 },
      { text: "studying", points: 0 },
    ],
  },
];

function getResult(score: number) {
  if (score <= 1) {
    return {
      level: "Nivel inicial",
      label: "A1 aproximado",
      title: "Estás empezando tu camino.",
      description:
        "Parece que necesitas reforzar bases, vocabulario esencial y estructuras simples. Es un excelente momento para comenzar con una guía clara.",
    };
  }

  if (score <= 3) {
    return {
      level: "Nivel básico en desarrollo",
      label: "A1–A2 aproximado",
      title: "Ya reconoces algunas estructuras.",
      description:
        "Tienes una base inicial, pero aún conviene trabajar gramática práctica, escucha y conversación para ganar seguridad.",
    };
  }

  if (score === 4) {
    return {
      level: "Nivel intermedio inicial",
      label: "A2–B1 aproximado",
      title: "Vas por buen camino.",
      description:
        "Tienes conocimientos útiles, pero una evaluación profesional puede ayudarte a identificar qué necesitas reforzar para avanzar mejor.",
    };
  }

  return {
    level: "Buen dominio inicial",
    label: "B1 aproximado o superior",
    title: "Tienes una base interesante.",
    description:
      "Tu resultado sugiere que puedes estar listo para una ruta más estructurada, conversación práctica o preparación para exámenes Cambridge.",
  };
}

export function EnglishLevelGame() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);

  const progress = useMemo(() => {
    return ((currentQuestion + 1) / questions.length) * 100;
  }, [currentQuestion]);

  const result = getResult(score);

  const handleAnswer = (points: number, index: number) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(index);
    setScore((prev) => prev + points);

    window.setTimeout(() => {
      if (currentQuestion + 1 >= questions.length) {
        setFinished(true);
      } else {
        setCurrentQuestion((prev) => prev + 1);
        setSelectedAnswer(null);
      }
    }, 650);
  };

  const resetGame = () => {
    setStarted(false);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setFinished(false);
  };

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-950/10">
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-red-600/15 blur-3xl" />
      <div className="absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-slate-950/10 blur-3xl" />

      <div className="relative grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="bg-slate-950 p-8 text-white md:p-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-black text-red-200 backdrop-blur">
            <Gamepad2 size={17} />
            Mini reto interactivo
          </div>

          <h2 className="mt-5 text-4xl font-black leading-none tracking-[-0.05em] md:text-5xl">
            ¿Qué nivel de inglés tienes?
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            Responde 5 preguntas rápidas y obtén una orientación inicial de tu
            nivel. Es sencillo, divertido y toma menos de un minuto.
          </p>

          <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-red-300">
              Importante
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Este resultado es solo orientativo. Para conocer tu nivel real y
              recibir una recomendación personalizada, te sugerimos visitar la
              escuela y realizar una evaluación profesional.
            </p>
          </div>
        </div>

        <div className="p-8 md:p-10">
          {!started && !finished && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex h-full flex-col justify-center"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                <Sparkles size={32} />
              </div>

              <h3 className="text-3xl font-black tracking-[-0.04em] text-slate-950">
                Descubre tu nivel aproximado.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                No necesitas registrarte. Solo responde unas preguntas básicas y
                al final te diremos qué ruta puede convenirte.
              </p>

              <button
                type="button"
                onClick={() => setStarted(true)}
                className="mt-7 inline-flex w-fit items-center justify-center rounded-full bg-red-600 px-6 py-4 font-black text-white shadow-xl shadow-red-600/25 transition hover:-translate-y-0.5 hover:bg-red-700"
              >
                Iniciar jueguito
                <ArrowRight className="ml-2" size={18} />
              </button>
            </motion.div>
          )}

          {started && !finished && (
            <div>
              <div className="mb-6">
                <div className="mb-3 flex items-center justify-between text-sm font-black text-slate-500">
                  <span>
                    Pregunta {currentQuestion + 1} de {questions.length}
                  </span>
                  <span>{Math.round(progress)}%</span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                  <motion.div
                    className="h-full rounded-full bg-red-600"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.35 }}
                  />
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.25 }}
                >
                  <h3 className="text-2xl font-black tracking-tight text-slate-950">
                    {questions[currentQuestion].question}
                  </h3>

                  <div className="mt-6 grid gap-3">
                    {questions[currentQuestion].options.map((option, index) => {
                      const isSelected = selectedAnswer === index;

                      return (
                        <button
                          key={option.text}
                          type="button"
                          onClick={() => handleAnswer(option.points, index)}
                          className={`flex items-center justify-between rounded-2xl border p-5 text-left font-bold transition ${
                            isSelected
                              ? "border-red-600 bg-red-50 text-red-700"
                              : "border-slate-200 bg-white text-slate-700 hover:border-red-300 hover:bg-red-50/50"
                          }`}
                        >
                          <span>{option.text}</span>
                          {isSelected && <CheckCircle2 size={22} />}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          )}

          {finished && (
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600 text-white shadow-xl shadow-red-600/25">
                <Trophy size={32} />
              </div>

              <p className="text-sm font-black uppercase tracking-[0.28em] text-red-600">
                Resultado orientativo
              </p>

              <h3 className="mt-3 text-4xl font-black tracking-[-0.05em] text-slate-950">
                {result.level}
              </h3>

              <div className="mt-4 inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-black text-slate-600">
                {result.label}
              </div>

              <h4 className="mt-6 text-2xl font-black tracking-tight text-slate-950">
                {result.title}
              </h4>

              <p className="mt-3 leading-7 text-slate-600">
                {result.description}
              </p>

              <div className="mt-6 rounded-2xl border border-red-100 bg-red-50 p-5">
                <p className="font-black text-red-700">
                  Para una evaluación real:
                </p>
                <p className="mt-2 text-sm font-bold leading-6 text-red-700/80">
                  Agenda tu examen diagnóstico gratuito y recibe una orientación
                  profesional según tu objetivo.
                </p>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button
                  href="/contacto"
                  className="justify-center bg-red-600 text-white shadow-xl shadow-red-600/25 hover:bg-red-700"
                >
                  Agendar diagnóstico gratis
                  <ArrowRight className="ml-2" size={18} />
                </Button>

                <button
                  type="button"
                  onClick={resetGame}
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 font-black text-slate-500 transition hover:bg-slate-100 hover:text-slate-950"
                >
                  <RotateCcw className="mr-2" size={18} />
                  Repetir
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}