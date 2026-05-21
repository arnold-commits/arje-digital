export const metadata = {
  title: "Get Help With Your Books — ARJE Bookkeeping & Tax Services",
  description:
    "Tell us where your books stand and what you need. We'll respond within one business day with a clear next step — whether that's a cleanup quote, a monthly bookkeeping plan, or a referral.",
};

export default function GetHelpPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-[#1a1a2e]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-10 sm:pt-24 sm:pb-12">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1a1a2e]">
          Get help with your books.
        </h1>
        <p className="mt-5 text-lg sm:text-xl text-[#1a1a2e]/80 leading-relaxed">
          Tell us where things stand. We'll respond within one business day
          with a clear next step — a cleanup quote, a monthly bookkeeping
          plan, or an honest referral if we're not the right fit.
        </p>

        {/* Founding hint — scarcity without pricing */}
        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-4 py-2 text-sm font-medium text-[#1a1a2e]">
          <span className="h-2 w-2 rounded-full bg-[#d4af37]" />
          Limited spots open for founding clients
        </div>
      </section>

      {/* What happens next */}
      <section className="max-w-4xl mx-auto px-6 pb-10">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-[#2ec4b6]">
          What happens after you submit
        </h2>
        <ol className="mt-4 space-y-3 text-[#1a1a2e]/85">
          <li className="flex gap-3">
            <span className="font-semibold text-[#2ec4b6]">1.</span>
            <span>
              We review what you sent and match it to the right kind of
              engagement.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="font-semibold text-[#2ec4b6]">2.</span>
            <span>
              You get a personal email back within one business day with a
              clear next step.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="font-semibold text-[#2ec4b6]">3.</span>
            <span>
              If we're a fit, we schedule a 20-minute call. If we're not,
              we tell you who is.
            </span>
          </li>
        </ol>
      </section>

      {/* Form */}
      <section className="max-w-4xl mx-auto px-2 sm:px-6 pb-20">
        <div className="rounded-2xl border border-[#1a1a2e]/10 bg-white p-2 sm:p-4 shadow-sm">
          <iframe
            src="https://form.jotform.com/261375188338062"
            title="Get help intake form"
            allow="geolocation; microphone; camera; fullscreen"
            allowFullScreen
            className="w-full"
            style={{
              minHeight: "920px",
              border: "none",
            }}
          />
        </div>

        {/* Trust footer */}
        <div className="mt-8 text-center text-sm text-[#1a1a2e]/60">
          <p>
            ARJE Bookkeeping &amp; Tax Services · Henderson, NV ·
            PTIN-certified · arnold@arjebookkeeping.com
          </p>
        </div>
      </section>
    </main>
  );
}
