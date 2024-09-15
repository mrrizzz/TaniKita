export default function AuthHeroSection() {
  return (
    <div className="hidden lg:flex lg:w-6/10 bg-primary flex-col justify-between p-12">
      <div>
        <h1 className="text-5xl font-bold text-white mt-12">
          Grow Smarter, Harvest Success!
        </h1>
        <p className="text-xl text-white mt-6 leading-relaxed">
          Welcome to TaniKita, where technology meets agriculture. Transform
          your farm with:
        </p>
        <ul className="text-white text-lg mt-4 space-y-2">
          <li>🌱 AI-powered crop planning</li>
          <li>📊 Real-time yield forecasting</li>
          <li>💧 Smart irrigation management</li>
          <li>🤖 Automated pest detection</li>
        </ul>
        <p className="text-xl text-white mt-6 font-semibold">
          Join thousands of farmers boosting productivity and sustainability.
          Your smart farm journey starts here!
        </p>
      </div>
      <p className="text-sm text-white">
        © 2024 TaniKita. Cultivating the future of farming.
      </p>
    </div>
  );
}
