export default function TrustBadges() {
  return (
    <div className="flex flex-wrap justify-center gap-8 py-8 border-t border-gray-200">
      <div className="flex items-center gap-2 text-gray-600">
        <span className="text-2xl">🔒</span>
        <span className="font-medium">SSL Secure</span>
      </div>
      <div className="flex items-center gap-2 text-gray-600">
        <span className="text-2xl">💳</span>
        <span className="font-medium">Stripe Payments</span>
      </div>
      <div className="flex items-center gap-2 text-gray-600">
        <span className="text-2xl">✓</span>
        <span className="font-medium">Verified Reviews</span>
      </div>
      <div className="flex items-center gap-2 text-gray-600">
        <span className="text-2xl">🛡️</span>
        <span className="font-medium">30-Day Guarantee</span>
      </div>
    </div>
  );
}
