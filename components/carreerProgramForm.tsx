import { FormEvent, useEffect, useRef, useState } from 'react'

const CarreerProgramForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formStatus, setFormStatus] = useState<string | null>(null)
    const [errors, setErrors] = useState<{
        name?: string
        email?: string
        phone?: string
        recaptcha?: string
    }>({})
    const recaptchaWidgetId = useRef<number | null | undefined>(null)

    useEffect(() => {
        const tryRenderRecaptcha = () => {
            const grecaptcha = (window as any).grecaptcha
            const container = document.getElementById('recaptcha')
            if (!grecaptcha || !container || recaptchaWidgetId.current !== null) {
                return
            }

            const alreadyRendered = container.querySelector('iframe') !== null || container.innerHTML.trim().length > 0
            if (alreadyRendered) {
                recaptchaWidgetId.current = undefined
                return
            }

            try {
                recaptchaWidgetId.current = grecaptcha.render('recaptcha', {
                    sitekey: '6Lc6l2UsAAAAAHO4su8PboZdxWAgyi0i4gkU-779',
                    theme: 'light',
                })
            } catch (error) {
                console.warn('reCAPTCHA render skipped because widget is already rendered.', error)
                recaptchaWidgetId.current = undefined
            }
        }

        tryRenderRecaptcha()
        const interval = window.setInterval(tryRenderRecaptcha, 500)
        return () => window.clearInterval(interval)
    }, [])

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        const form = e.currentTarget
        e.preventDefault()
        setIsSubmitting(true)
        setFormStatus(null)
        setErrors({})

        const formData = new FormData(form)
        const payload = {
            name: formData.get('name')?.toString().trim() ?? '',
            email: formData.get('email')?.toString().trim() ?? '',
            phone: formData.get('phone')?.toString().trim() ?? '',
            message: formData.get('message')?.toString().trim() ?? '',
        }

        const grecaptcha = (window as any).grecaptcha
        const recaptchaToken = grecaptcha
            ? recaptchaWidgetId.current !== null
                ? grecaptcha.getResponse(recaptchaWidgetId.current)
                : grecaptcha.getResponse()
            : ''

        const nextErrors: typeof errors = {}
        if (!payload.name) nextErrors.name = 'Name is required.'
        if (!payload.email) {
            nextErrors.email = 'Email is required.'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
            nextErrors.email = 'Please enter a valid email address.'
        }
        if (!payload.phone) nextErrors.phone = 'Phone number is required.'
        if (!recaptchaToken) nextErrors.recaptcha = 'Please complete the captcha verification.'

        if (Object.keys(nextErrors).length > 0) {
            setErrors(nextErrors)
            setIsSubmitting(false)
            return
        }

        try {
            const response = await fetch('/api/submitApplication', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...payload, recaptchaToken }),
            })
            const data = await response.json()

            console.log(data)
            if (!data.success) {
                setFormStatus(data.error || 'Unable to submit the application.')
                if (data.error?.toLowerCase().includes('captcha')) {
                    setErrors((prev) => ({ ...prev, recaptcha: data.error }))
                }
            } else {
                setFormStatus('Application submitted successfully. A confirmation email has been sent to you.')
                form.reset()
                setErrors({})
            }
        } catch (error) {
            console.error('Application submit failed:', error)
            setFormStatus('Something went wrong. Please try again later.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-bold text-black mb-2">Full Name <span className="text-red-600">*</span></label>
                    <input
                        name="name"
                        className="w-full bg-white border border-gray-200 rounded-lg p-4 focus:ring-2 focus:ring-black transition-all text-black"
                        placeholder="John Doe"
                        type="text"
                        required
                    />
                    {errors.name ? (
                        <p className="mt-2 text-sm text-red-600">{errors.name}</p>
                    ) : null}
                </div>
                <div>
                    <label className="block text-sm font-bold text-black mb-2">Phone Number <span className="text-red-600">*</span></label>
                    <input
                        name="phone"
                        className="w-full bg-white border border-gray-200 rounded-lg p-4 focus:ring-2 focus:ring-black transition-all text-black"
                        placeholder="+91 00000 00000"
                        type="tel"
                        required
                    />
                    {errors.phone ? (
                        <p className="mt-2 text-sm text-red-600">{errors.phone}</p>
                    ) : null}
                </div>
            </div>
            <div>
                <label className="block text-sm font-bold text-black mb-2">Email Address <span className="text-red-600">*</span></label>
                <input
                    name="email"
                    className="w-full bg-white border border-gray-200 rounded-lg p-4 focus:ring-2 focus:ring-black transition-all text-black"
                    placeholder="john@example.com"
                    type="email"
                    required
                />
                {errors.email ? (
                    <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                ) : null}
            </div>
            <div>
                <label className="block text-sm font-bold text-black mb-2">Message (Optional)</label>
                <textarea
                    name="message"
                    className="w-full bg-white border border-gray-200 rounded-lg p-4 focus:ring-2 focus:ring-black transition-all h-32 text-black"
                    placeholder="Tell us about your career goals..."
                    defaultValue={''}
                />
            </div>
            <div>
                <div
                    id="recaptcha"
                    className="g-recaptcha mt-4"
                    data-sitekey="6Lc6l2UsAAAAAHO4su8PboZdxWAgyi0i4gkU-779"
                ></div>
                {errors.recaptcha ? (
                    <p className="mt-2 text-sm text-red-600">{errors.recaptcha}</p>
                ) : null}
            </div>
            <button
                className="w-full bg-black text-white py-4 rounded-lg font-sans font-bold text-lg hover:bg-gray-800 transition-all shadow-lg shadow-black/10 disabled:cursor-not-allowed disabled:opacity-60"
                type="submit"
                disabled={isSubmitting}
            >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
            {formStatus ? (
                <p className="text-sm text-center text-gray-600">{formStatus}</p>
            ) : null}
        </form>
    )
}

export default CarreerProgramForm
