'use client'

import { useEffect, useRef, useState } from 'react'
import { track } from '@vercel/analytics'
import TrackedLink from '@/components/TrackedLink'
import { questionsFor, readAnswers } from '@/lib/booksHealthCheck'

const PRIMARY = 'inline-block px-8 py-4 bg-teal-dark text-white font-bold rounded-lg hover:bg-navy transition-all text-sm tracking-wide text-center'
const SECONDARY = 'inline-block px-8 py-4 bg-white text-navy font-bold rounded-lg border-2 border-navy/20 hover:border-navy/50 transition-all text-sm tracking-wide text-center'

function DiagnosisLink({ band, className = PRIMARY, children = 'See the Foundation Diagnosis' }) {
  return (
    <TrackedLink href="/foundation-diagnosis" event="diagnosis_cta_click" data={{ placement: `health_check_${band}` }} className={className}>
      {children}
    </TrackedLink>
  )
}

function GetHelpLink({ band, className = SECONDARY, children = 'Tell us where your books stand' }) {
  return (
    <TrackedLink href="/get-help" event="get_help_cta_click" data={{ placement: `health_check_${band}` }} className={className}>
      {children}
    </TrackedLink>
  )
}

function BookkeepingLink({ band, className = PRIMARY, children = 'See cleanup and monthly bookkeeping' }) {
  return (
    <TrackedLink href="/bookkeeping" event="health_check_bookkeeping_click" data={{ placement: `health_check_${band}` }} className={className}>
      {children}
    </TrackedLink>
  )
}

function ResultBody({ result }) {
  const { band, tells, unknown } = result

  if (band === 'other_system') {
    return (
      <>
        <h2 tabIndex={-1} className="font-display font-bold text-3xl text-navy mb-4 leading-tight">This check is built for QuickBooks Online.</h2>
        <p className="text-[#444] leading-[1.8] mb-8">The questions are QuickBooks screens, so they would not tell you much about your setup. Tell us where your books stand and we&rsquo;ll point you to the right first step.</p>
        <div className="flex flex-wrap gap-4"><GetHelpLink band={band} className={PRIMARY} /></div>
      </>
    )
  }

  if (band === 'forensic') {
    return (
      <>
        <h2 tabIndex={-1} className="font-display font-bold text-3xl text-navy mb-4 leading-tight">Your answers point to a forensic look before anyone quotes a fix.</h2>
        <p className="text-[#444] leading-[1.8] mb-4">You marked {tells.length === 1 ? 'one sign' : `${tells.length} signs`} that are worth checking before more work goes on top of them:</p>
        <ul className="list-disc pl-5 space-y-2 text-[#444] mb-6">
          {tells.map(q => <li key={q.id}>{q.tell}</li>)}
        </ul>
        <p className="text-[#444] leading-[1.8] mb-8">Any of these can have an innocent explanation. They can also hide damage that a quote based on transaction count would miss. The Foundation Diagnosis is a $495 fixed-fee, read-only review that finds out which, before you pay anyone to fix anything.</p>
        <div className="flex flex-wrap gap-4"><DiagnosisLink band={band} /><GetHelpLink band={band} /></div>
      </>
    )
  }

  if (band === 'unverified') {
    return (
      <>
        <h2 tabIndex={-1} className="font-display font-bold text-3xl text-navy mb-4 leading-tight">You marked no signs of forced corrections, but {unknown.length === 1 ? 'one answer is' : `${unknown.length} answers are`} still open.</h2>
        <p className="text-[#444] leading-[1.8] mb-4">These are the ones to check, or to ask whoever keeps your books:</p>
        <ul className="list-disc pl-5 space-y-3 text-[#444] mb-6">
          {unknown.map(q => <li key={q.id}><strong className="text-navy">{q.prompt}</strong> {q.how}</li>)}
        </ul>
        <p className="text-[#444] leading-[1.8] mb-8">If you can&rsquo;t get to them, tell us where things stand and we&rsquo;ll point you to the right first step.</p>
        <div className="flex flex-wrap gap-4"><GetHelpLink band={band} className={PRIMARY} /><DiagnosisLink band={band} className={SECONDARY} /></div>
      </>
    )
  }

  if (band === 'neglect') {
    return (
      <>
        <h2 tabIndex={-1} className="font-display font-bold text-3xl text-navy mb-4 leading-tight">Your answers look like books that fell behind.</h2>
        <p className="text-[#444] leading-[1.8] mb-8">You marked uncategorized or unreconciled work, and none of the signs of forced corrections. Falling behind is usually the more straightforward problem to fix. The usual next step is a catch-up, then monthly bookkeeping.</p>
        <div className="flex flex-wrap gap-4"><GetHelpLink band={band} className={PRIMARY} /><BookkeepingLink band={band} className={SECONDARY} /></div>
      </>
    )
  }

  return (
    <>
      <h2 tabIndex={-1} className="font-display font-bold text-3xl text-navy mb-4 leading-tight">You marked none of the signs.</h2>
      <p className="text-[#444] leading-[1.8] mb-8">That&rsquo;s a good read, as far as a self-check can go. It doesn&rsquo;t prove the books are right, because some damage only shows up against your settlement files and statements. If you want them kept that way, ask us about monthly bookkeeping.</p>
      <div className="flex flex-wrap gap-4"><GetHelpLink band={band} className={PRIMARY} children="Ask about monthly bookkeeping" /><DiagnosisLink band={band} className={SECONDARY} /></div>
    </>
  )
}

export default function BooksHealthCheck() {
  const [answers, setAnswers] = useState({})
  const [step, setStep] = useState(0)
  const panel = useRef(null)
  const started = useRef(false)
  const tapLock = useRef(false)

  const questions = questionsFor(answers)
  const done = step >= questions.length
  const result = done ? readAnswers(answers) : null
  const question = done ? null : questions[step]

  // Move focus with the question so keyboard and screen-reader users are not left behind.
  useEffect(() => {
    if (!started.current) return
    panel.current?.querySelector('h2')?.focus()
  }, [step])

  useEffect(() => {
    if (!result) return
    try {
      track('health_check_result', { band: result.band })
    } catch {
      // analytics must never block the result
    }
  }, [result?.band, done])

  const answer = value => {
    // A double tap must not answer the next question too.
    if (tapLock.current) return
    tapLock.current = true
    setTimeout(() => { tapLock.current = false }, 350)
    started.current = true
    setAnswers(prev => ({ ...prev, [question.id]: value }))
    setStep(step + 1)
  }

  const restart = () => {
    started.current = true
    setAnswers({})
    setStep(0)
  }

  return (
    <div ref={panel} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-10">
      {question ? (
        <>
          <p className="text-teal-dark text-xs font-bold tracking-[2px] uppercase mb-4">
            {question.id === 'system' ? 'First question' : `Question ${step + 1} of ${questions.length}`}
          </p>
          <h2 tabIndex={-1} aria-describedby={question.how ? 'health-check-how' : undefined} className="font-display font-bold text-2xl text-navy mb-3 leading-snug outline-none">{question.prompt}</h2>
          {question.how && <p id="health-check-how" className="text-gray-600 text-sm leading-relaxed mb-6">{question.how}</p>}
          <div className="flex flex-col gap-3 mt-6">
            {question.options.map(o => (
              <button
                key={o.value}
                type="button"
                onClick={() => answer(o.value)}
                className="w-full text-left px-5 py-4 rounded-lg border-2 border-navy/15 text-navy font-semibold hover:border-teal-dark hover:bg-cream transition-all"
              >
                {o.label}
              </button>
            ))}
          </div>
          {step > 0 && (
            <button type="button" onClick={() => { started.current = true; setStep(step - 1) }} className="mt-6 text-sm text-gray-600 underline hover:text-navy">
              Back
            </button>
          )}
        </>
      ) : (
        <>
          <ResultBody result={result} />
          {result.triedBefore && (
            <p className="mt-8 rounded-xl bg-cream border border-gray-100 p-5 text-sm text-[#444] leading-relaxed">
              <strong className="text-navy">One more thing:</strong> you said someone already tried to fix these books. Earlier corrections are where the hardest problems tend to hide, so read this result with that in mind.
            </p>
          )}
          <p className="mt-8 text-xs text-gray-600 leading-relaxed">
            This reflects only your own answers. Nobody has looked at your file, and this is not a finding, a verdict, or a quote. Findings and quotes come only from a person, after a review of your actual books.
          </p>
          <button type="button" onClick={restart} className="mt-4 text-sm text-gray-600 underline hover:text-navy">
            Start over
          </button>
        </>
      )}
    </div>
  )
}
