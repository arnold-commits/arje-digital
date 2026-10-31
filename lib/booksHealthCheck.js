// lib/booksHealthCheck.js
//
// Questions and scoring for /books-health-check/. Derived from Cleanup Sizing Judgment s4.5.
// Runs in the browser only: answers are never sent anywhere. The result is the owner's own
// self-read, not a finding, so nothing here may state a verdict on a file or a price for one.

const YES_NO_UNSURE = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' },
  { value: 'unsure', label: 'I don’t know' },
]

export const SYSTEM_QUESTION = {
  id: 'system',
  prompt: 'Where do your books live?',
  options: [
    { value: 'qbo', label: 'QuickBooks Online' },
    { value: 'other', label: 'Other accounting software' },
    { value: 'none', label: 'Spreadsheets, or nothing yet' },
  ],
}

// kind: 'tell' fires the forensic result, 'neglect' fires the neglect result,
// 'context' never changes the result band, only adds a note.
export const FILE_QUESTIONS = [
  {
    id: 'recon_discrepancies',
    kind: 'tell',
    prompt: 'Does the Reconciliation Discrepancies account show any entries, or a balance other than $0?',
    how: 'Settings, then Chart of accounts. Turn on Include inactive from the gear above the table, then search for it and run its report for all dates. Any entry counts, even if they net to $0. If the account isn’t there, active or inactive, answer No.',
    tell: 'Entries or a balance in Reconciliation Discrepancies',
    options: YES_NO_UNSURE,
  },
  {
    id: 'backlog_recon',
    kind: 'tell',
    prompt: 'Were months of statements reconciled in one sitting, long after the statement dates?',
    how: 'Open Reconcile, then History by account. Check every bank and card account, with the period set to all dates. Compare the date each reconciliation was done with its statement ending date.',
    tell: 'Backlog reconciliation done in one sitting',
    options: YES_NO_UNSURE,
  },
  {
    id: 'opening_balance_equity',
    kind: 'tell',
    prompt: 'Does Opening Balance Equity show anything other than $0?',
    how: 'Run the Balance Sheet report for all dates and look under Equity.',
    tell: 'Opening Balance Equity is not $0',
    options: YES_NO_UNSURE,
  },
  {
    id: 'suspense_activity',
    kind: 'tell',
    prompt: 'Does real money keep moving through Suspense or Ask My Accountant?',
    how: 'Run Transaction Detail by Account for those accounts. Read the activity, not the balance. An account can net to $0 and still have carried a lot. Set the report period to All Dates. If neither account exists, answer No.',
    tell: 'Money moving through Suspense or Ask My Accountant',
    options: YES_NO_UNSURE,
  },
  {
    id: 'equity_plugs',
    kind: 'tell',
    prompt: 'Are there repeated round-number entries to owner’s equity?',
    how: 'Open the owner’s equity accounts and look for even amounts with no clear contribution or draw behind them.',
    tell: 'Repeated round-number entries to owner’s equity',
    options: YES_NO_UNSURE,
  },
  {
    id: 'inactive_accounts',
    kind: 'tell',
    prompt: 'Do recent transactions point at inactive accounts?',
    how: 'In the Chart of accounts, turn on Include inactive from the gear above the table and note those accounts. Then run Transaction Detail by Account for the period you’re working on and look for them. Reports still show them. Old history in a properly retired account doesn’t count.',
    tell: 'Recent transactions pointing at inactive accounts',
    options: YES_NO_UNSURE,
  },
  {
    id: 'year_end_entries',
    kind: 'tell',
    prompt: 'Is there a cluster of round-number journal entries around year end?',
    how: 'Run the Journal report for the last weeks of each year, filtered to Journal Entry, and look for even amounts with no support behind them.',
    tell: 'Round-number journal entries around year end',
    options: YES_NO_UNSURE,
  },
  {
    id: 'neglect',
    kind: 'neglect',
    prompt: 'Are transactions uncategorized, or months not reconciled?',
    how: 'Look for Uncategorized accounts, a backlog in the bank feed, and months missing from Reconcile history.',
    options: YES_NO_UNSURE,
  },
  {
    id: 'tried_before',
    kind: 'context',
    prompt: 'Has someone already tried to fix these books?',
    how: 'A prior bookkeeper, a relative, or you following a video all count.',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
  },
]

// The questions still to show, given the answers so far. Anyone not on QuickBooks Online stops
// after the first question, because the rest are QuickBooks screens.
export function questionsFor(answers) {
  if (answers.system && answers.system !== 'qbo') return [SYSTEM_QUESTION]
  return [SYSTEM_QUESTION, ...FILE_QUESTIONS]
}

export function readAnswers(answers) {
  const empty = { tells: [], unknown: [], triedBefore: false }
  if (answers.system !== 'qbo') return { band: 'other_system', ...empty }

  const tells = FILE_QUESTIONS.filter(q => q.kind === 'tell' && answers[q.id] === 'yes')
  const unknown = FILE_QUESTIONS.filter(q => answers[q.id] === 'unsure')
  const triedBefore = answers.tried_before === 'yes'

  let band = 'no_tells'
  if (tells.length > 0) band = 'forensic'
  else if (unknown.length > 0) band = 'unverified'
  else if (answers.neglect === 'yes') band = 'neglect'

  return { band, tells, unknown, triedBefore }
}
