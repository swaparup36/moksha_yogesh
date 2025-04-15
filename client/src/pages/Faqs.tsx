import { useState, memo } from 'react'
import { Helmet } from 'react-helmet'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { slugify } from '@arpansaha13/utils'
import Sheet from '~common/Sheet'
import Container from '~common/Container'
import faqs, { type Faq as FaqType } from '~/data/faqs'

interface FaqProps {
  faq: FaqType
  slug: string
}

export function Component() {
  return (
    <Container className="py-10">
      <Helmet>
        <title>Moksha | FAQs</title>
      </Helmet>

      <section className="markdown" id="moksha-faqs">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-12 drop-shadow-lg">
            Frequently Asked Questions
          </h1>

          <div className="space-y-6">
            {faqs.map((faq) => {
              const slug = slugify(faq.question)
              return <Faq key={slug} faq={faq} slug={slug} />
            })}
          </div>
        </div>
      </section>
    </Container>
  )
}

Component.displayName = 'Faqs'

const Faq = memo(
  ({ faq, slug }: FaqProps) => {
    const [open, setOpen] = useState(false)

    return (
      <Sheet
        id={slug}
        className={`p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#1e293b] to-[#0f172a] shadow-xl transition-all duration-300 border border-white/10`}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">{faq.question}</h2>
          <button
            onClick={() => setOpen(!open)}
            className="text-sm font-semibold px-4 py-2 bg-white text-slate-900 rounded-xl shadow-md hover:bg-gray-100 transition"
            aria-expanded={open}
          >
            {open ? (
              <div className="flex items-center gap-1">
                <ChevronUp className="w-4 h-4" /> Hide Answer
              </div>
            ) : (
              <div className="flex items-center gap-1">
                <ChevronDown className="w-4 h-4" /> Show Answer
              </div>
            )}
          </button>
        </div>

        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <p className="text-white font-medium leading-relaxed">{faq.answer}</p>
        </div>
      </Sheet>
    )
  },
  (prev, next) => prev.slug === next.slug
)
