export const metadata = {
  title: "Terms of Service | Anchor Yash Soni",
  description: "Terms and conditions for booking and utilizing the services of Anchor Yash Soni and Yash Soni Studio.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsOfService() {
  return (
    <div className="bg-[#050505] text-white min-h-screen pt-32 pb-20 font-sans selection:bg-[#D4AF37] selection:text-black">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black mb-6 uppercase tracking-tight text-white">
            Terms of <span className="gold-gradient-text">Service</span>
          </h1>
          <p className="text-gray-400 text-sm uppercase tracking-widest font-bold">Last Updated: May 2026</p>
        </div>

        <div className="space-y-12 text-gray-300 font-light leading-relaxed">
          
          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">1. Agreement to Terms</h2>
            <p>
              These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Anchor Yash Soni / Yash Soni Studio ("we," "us," or "our"), concerning your access to and use of our website as well as the booking of any event anchoring, management, or design services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">2. Booking and Retainers</h2>
            <p className="mb-4">To secure our services for your event date, a formal booking process is required:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>A non-refundable retainer fee (typically 50% of the total agreed amount) is required to officially block the calendar date.</li>
              <li>Verbal confirmations or initial inquiries do not guarantee the reservation of a date.</li>
              <li>The remaining balance must be cleared as per the payment schedule outlined in your specific contract, usually prior to or on the day of the event.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">3. Cancellations and Postponements</h2>
            <p className="mb-4">We understand that unforeseen circumstances may arise. However, due to the nature of the event industry and the exclusivity of booked dates, the following applies:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Cancellations:</strong> Retainer fees are strictly non-refundable, as they cover administrative costs and compensate for turning away other potential clients for your secured date.</li>
              <li><strong>Postponements:</strong> If an event is postponed, we will attempt to accommodate the new date subject to our availability. If we are unavailable on the new date, the retainer remains non-refundable. Additional charges may apply if the new date falls in a different peak season or year.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">4. Client Responsibilities</h2>
            <p>
              The client agrees to provide all necessary details, timelines, and logistical information required for the successful execution of the event. For out-of-station (destination) events, travel, accommodation, and related logistical expenses for the anchor and team must be borne by the client, unless explicitly stated otherwise in a comprehensive event management package.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">5. Force Majeure</h2>
            <p>
              We shall not be liable for any failure to perform our obligations where such failure is as a result of Acts of Nature (including fire, flood, earthquake, storm, hurricane or other natural disaster), war, invasion, act of foreign enemies, hostilities, civil war, rebellion, revolution, insurrection, military or usurped power or confiscation, terrorist activities, nationalization, government sanction, blockage, embargo, labor dispute, strike, lockout or interruption or failure of electricity or telephone service, or pandemic-related lockdowns.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">6. Modifications to Services and Prices</h2>
            <p>
              Prices for our services are subject to change without notice for unbooked inquiries. Once a retainer is paid and a contract is signed, the price for the specific services outlined in that contract is locked. We reserve the right at any time to modify or discontinue any specific service offering on the website without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">7. Governing Law</h2>
            <p>
              These Terms shall be governed by and defined following the laws of India. Anchor Yash Soni and yourself irrevocably consent that the courts of Jaipur, Rajasthan shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
