import TrackedLink from "@/components/TrackedLink";

export const metadata = {
  title: { absolute: "Get Help With Your Books — ARJE Bookkeeping & Tax" },
  description:
    "Tell us where your books stand. Within one business day you get a clear next step: a Foundation Diagnosis, a cleanup quote, a monthly plan, or a referral.",
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
        <h2 className="text-sm font-semibold uppercase tracking-wider text-[#1e7a6f]">
          What happens after you submit
        </h2>
        <ol className="mt-4 space-y-3 text-[#1a1a2e]/85">
          <li className="flex gap-3">
            <span className="font-semibold text-[#1e7a6f]">1.</span>
            <span>
              We review what you sent and match it to the right kind of
              engagement.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="font-semibold text-[#1e7a6f]">2.</span>
            <span>
              You get a personal email back within one business day with a
              clear next step.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="font-semibold text-[#1e7a6f]">3.</span>
            <span>
              If we're a fit, we schedule a 20-minute call. If we're not,
              we tell you who is.
            </span>
          </li>
        </ol>
      </section>

      {/* The three ways this goes — so a cold visitor knows what "a clear next step" means */}
      <section className="max-w-4xl mx-auto px-6 pb-10">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-[#1e7a6f]">
          The three ways this usually goes
        </h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <TrackedLink
            href="/foundation-diagnosis"
            event="diagnosis_cta_click"
            data={{ placement: "get_help_routes" }}
            className="block rounded-2xl border border-[#1e7a6f]/40 bg-[#1e7a6f]/5 p-5 transition-colors hover:border-[#1e7a6f]/70"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-[#1e7a6f]">Books behind, or &ldquo;fixed&rdquo; and still wrong</p>
            <p className="mt-2 font-semibold text-[#1a1a2e]">Foundation Diagnosis</p>
            <p className="mt-1 text-sm text-[#1a1a2e]/70">
              $495, fixed. Read-only forensic pass over your QuickBooks, written verdict and a real cleanup quote in 5 business days. Credited 100% toward the cleanup within 30 days of your report.
            </p>
            <p className="mt-3 text-sm font-semibold text-[#1e7a6f]">Start the Foundation Diagnosis →</p>
          </TrackedLink>

          <a
            href="/bookkeeping/"
            className="block rounded-2xl border border-[#1a1a2e]/10 bg-white p-5 transition-colors hover:border-[#1a1a2e]/30"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-[#1a1a2e]/70">Books are current, you want them off your desk</p>
            <p className="mt-2 font-semibold text-[#1a1a2e]">Monthly bookkeeping</p>
            <p className="mt-1 text-sm text-[#1a1a2e]/70">
              Monthly close, reconciliations, and year-end-ready books. Founding-client rate for Henderson and Las Vegas businesses, with the initial cleanup included.
            </p>
            <p className="mt-3 text-sm font-semibold text-[#1a1a2e]">See the offer →</p>
          </a>

          <a
            href="/fba-bookkeeping-system/"
            className="block rounded-2xl border border-[#1a1a2e]/10 bg-white p-5 transition-colors hover:border-[#1a1a2e]/30"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-[#1a1a2e]/70">Not a fit, or not yet</p>
            <p className="mt-2 font-semibold text-[#1a1a2e]">An honest referral, or the guide</p>
            <p className="mt-1 text-sm text-[#1a1a2e]/70">
              If we&rsquo;re not the right practice for your situation we say so and point you to who is. If you&rsquo;d rather do it yourself first, the Amazon FBA bookkeeping guide is free.
            </p>
            <p className="mt-3 text-sm font-semibold text-[#1a1a2e]">Read the guide →</p>
          </a>
        </div>
        <p className="mt-4 text-sm text-[#1a1a2e]/75">
          Every reply is written by Arnold Dizon, PTIN-certified tax preparer and QuickBooks Online ProAdvisor. There is no sales team and nothing automated decides what you&rsquo;re quoted.
        </p>
      </section>

      {/* Form */}
      <section className="max-w-4xl mx-auto px-2 sm:px-6 pb-20">
        <div className="rounded-2xl border border-[#1a1a2e]/10 bg-white p-2 sm:p-4 shadow-sm">
          <iframe
            src="https://form.jotform.com/261375188338062"
            title="Get help intake form"
            allow="geolocation; microphone; camera; fullscreen"
            allowFullScreen
            loading="lazy"
            className="w-full"
            style={{
              minHeight: "920px",
              border: "none",
            }}
          />
        </div>

        {/* Trust footer */}
        <div className="mt-8 text-center text-sm text-[#1a1a2e]/75">
          <p>
            ARJE Bookkeeping &amp; Tax Services · Henderson, NV ·
            PTIN-certified · arnold@arjebookkeeping.com
          </p>
        </div>
      </section>
    </main>
  );
}
